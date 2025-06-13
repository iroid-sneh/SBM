import Countries from "../../../models/countries";
import Cities from "../../../models/cities";
import BMbusinessDetails from "../../../models/BMAdmin/BMbussinessDetails";
import BMadminProfile from "../../../models/BMAdmin/BMadminProfile";
import { randomOtpGenerator } from "../../common/helper";
import AuthHelper from "../../common/authHelper";
import BMresidenceDetails from "../../../models/BMAdmin/BMresidenceDetails";
import BMbankDetails from "../../../models/BMAdmin/BMbankDetails";
import BMsubscriptionPlan from "../../../models/BMAdmin/BMsubscriptionPlan";
import BMadmin from "../../../models/BMAdmin/BMadmin";
import mongoose from "mongoose";
import moment from "moment-timezone";
class bmServices {
    /**
     * @description: Login Page for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        // Fetching countries for the dropdown
        const countries = await Countries.find({});
        return res.render("adminPanels/buildingManagement/login", {
            layout: false,
            countries: countries,
        });
    }

    /**
     * @description: Login for Building Management
     * @param {*} data
     * @param {*} req
     * @param {*} res
     */
    static async login(data, req, res) {
        try {
            const { countryCode, contactNumber, password } = req.body;

            const admin = await BMadminProfile.findOne({
                contactNumber,
                countryCode: countryCode,
            });

            if (!admin) {
                return res.status(404).json({
                    success: false,
                    message: "Admin Not Found with this Number. Signup first.",
                });
            }

            if (!admin.isOtpVerified) {
                return res.status(403).json({
                    success: false,
                    message: "Please Verify OTP first",
                });
            }

            const isMatch = await AuthHelper.matchHashedPassword(
                password,
                admin.password
            );

            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid credentials. Please try again.",
                });
            }

            const payload = {
                id: admin._id,
                role: "admin",
                panel: "web",
            };

            const tokens = await AuthHelper.tokensGenerator(admin._id, payload);

            if (req.headers["user-agent"]?.includes("Mozilla")) {
                res.cookie("accessToken", tokens.accessToken, {
                    httpOnly: true,
                    secure: false, // set to true in production with HTTPS
                    maxAge: 1000 * 60 * 60 * 24 * 365, // 365 days in ms = 31,536,000,000
                    sameSite: "strict",
                });
            }
            return res.status(200).json({
                success: true,
                message: "Login successful",
                tokenType: "Bearer",
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
                expiresIn: tokens.expiresIn,
                redirectTo: "/bmadmin/dashboard",
            });
        } catch (error) {
            console.log("error: ", error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    /**
     * @description: bussinessDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetailsPage(req, res) {
        const countries = await Countries.find({});
        const cities = await Cities.find({}).populate("country");
        return res.render("adminPanels/buildingManagement/bussinessDetails", {
            layout: false,
            countries: countries,
            cities: cities,
        });
    }

    /**
     * @description: bussinessDetails for Building Management
     * @param {*} data
     * @param {*} file
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetails(data, file, req, res) {
        try {
            if (!req.session.signup || !req.session.signup.signupId) {
                req.session.signup = {
                    signupId: new mongoose.Types.ObjectId(),
                    step: 2,
                };
            }
            const businessLogo = file
                ? `/BMadmin/businessLogo-${file.filename}`
                : null;

            const workingTime = [];

            if (Array.isArray(data.openTime) && Array.isArray(data.closeTime)) {
                for (let i = 0; i < data.openTime.length; i++) {
                    if (data.openTime[i] && data.closeTime[i]) {
                        // Parse the input times with timezone
                        const openMoment = moment.tz(
                            data.openTime[i],
                            "HH:mm A",
                            "Asia/Kolkata"
                        );
                        const closeMoment = moment.tz(
                            data.closeTime[i],
                            "HH:mm A",
                            "Asia/Kolkata"
                        );

                        // Store as Date objects (UTC)
                        workingTime.push({
                            openTime: openMoment.toDate(),
                            closeTime: closeMoment.toDate(),
                        });
                    }
                }
            }

            if (file) {
                const businessDetail = await BMbusinessDetails.create({
                    signupId: req.session.signup.signupId,
                    commercialName: data.commercialName,
                    countryCode: data.countryCode,
                    businessLandline: data.businessLandline,
                    VATnumber: data.VATnumber,
                    CRnumber: data.CRnumber,
                    businessEmail: data.businessEmail,
                    workingTime: workingTime,
                    workingDays: data.workingDays,
                    country: data.country,
                    city: data.city,
                    addressLat: data.addressLat,
                    addressLong: data.addressLong,
                    businessLogo: businessLogo,
                });

                req.flash("success", "Business Details Added Successfully.");
                return res.redirect("/bmadmin/adminprofile");
            }
        } catch (error) {
            console.error("Error in bussinessDetails:", error);
            return res.status(500).json({
                message: "Internal Server Error",
                error: error.message,
            });
        }
    }

    /**
     * @description: adminProfilePage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async adminProfilePage(req, res) {
        if (!req.session.signup || req.session.signup.step < 2) {
            return res.redirect("/bmadmin/bussinessdetails");
        }
        const countries = await Countries.find({});
        return res.render("adminPanels/buildingManagement/adminProfile", {
            layout: false,
            countries: countries,
        });
    }

    /**
     * @description: adminProfile for Building Management
     * @param {*} data
     * @param {*} file
     * @param {*} req
     * @param {*} res
     */
    static async adminProfile(data, file, req, res) {
        try {
            const {
                firstName,
                middleName,
                lastName,
                role,
                email,
                countryCode,
                contactNumber,
                password,
            } = data;

            const adminProfilePhoto = file
                ? `/BMadmin/adminProfilePhoto-${file.filename}`
                : null;

            const otp = randomOtpGenerator(6);
            const otpExpiry = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes
            const hashedPassword = await AuthHelper.hashPassword(password); // Use argon2

            const existing = await BMadminProfile.findOne({
                contactNumber,
                email,
            });
            if (existing) {
                return res
                    .status(400)
                    .json({ message: "Admin already exists." });
            }

            const adminProfile = await BMadminProfile.create({
                signupId: req.session.signup.signupId,
                adminProfilePhoto,
                firstName,
                middleName,
                lastName,
                role,
                email,
                countryCode,
                contactNumber,
                otp,
                otpExpiry,
                password: hashedPassword,
                isOtpVerified: false,
            });

            req.session.signup = {
                signupId: req.session.signup.signupId,
                step: 3,
            };

            // TODO: Integrate SMS gateway here
            console.log(`OTP for ${contactNumber}: ${otp}`);

            return res.status(200).json({
                success: true,
                message: "OTP sent successfully",
                profileId: adminProfile._id,
            });
        } catch (err) {
            console.error("Admin profile creation failed", err);
            return res.status(500).json({ message: "Server error" });
        }
    }

    /**
     * @description: verifyOtp for Building Management
     * @param {*} data
     * @param {*} req
     * @param {*} res
     */
    static async verifyOtp(data, req, res) {
        const signupId = req.session.signup.signupId;
        const { otp } = data;

        const admin = await BMadminProfile.findOne({ signupId: signupId });

        if (!admin) {
            return res
                .status(404)
                .json({ message: "Admin not found", success: false });
        }

        if (admin.otp !== otp || admin.otpExpiry < new Date()) {
            return res
                .status(400)
                .json({ message: "Invalid or expired OTP", success: false });
        }

        // Mark OTP as verified
        const confirmOtp = await BMadminProfile.findOne({
            signupId: signupId,
            otp,
            otpExpiry: { $gt: new Date() },
        });

        if (!confirmOtp) {
            return res
                .status(404)
                .json({ message: "otp does not match", success: false });
        }

        await BMadminProfile.findOneAndUpdate(
            { signupId: signupId },
            {
                otp: null,
                otpExpiry: null,
                isOtpVerified: true,
            }
        );

        req.session.signup.step = 3;

        req.flash("success", "Admin Profile Added Successfully");
        return res
            .status(200)
            .json({ message: "OTP verified successfully", success: true });
    }

    /**
     * @description: resendOtp for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async resendOtp(req, res) {
        try {
            const signupId = req.session.signup.signupId;
            if (!signupId) {
                return res
                    .status(400)
                    .json({ message: "Admin ID not found", success: false });
            }

            const findBMadmin = await BMadminProfile.findOne({
                signupId: signupId,
            });
            console.log("Found BMadmin:", findBMadmin);

            if (!findBMadmin) {
                return res.status(404).json({ message: "Admin not found" });
            }

            const newOtp = randomOtpGenerator(6);
            const otpExpiry = new Date(Date.now() + 2 * 60 * 1000);

            await BMadminProfile.findOneAndUpdate(
                { signupId: signupId },
                {
                    otp: newOtp,
                    otpExpiry,
                },
                { new: true }
            );

            // TODO: Send OTP via SMS gateway
            console.log(
                `Resent OTP to ${findBMadmin.contactNumber}: ${newOtp}`
            );

            return res
                .status(200)
                .json({ message: "OTP sent successfully", success: true });
        } catch (err) {
            console.error("Resend OTP failed", err);
            return res
                .status(500)
                .json({ message: "Server error", success: false });
        }
    }

    /**
     * @description: residenceDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async residenceDetailsPage(req, res) {
        if (!req.session.signup || req.session.signup.step < 3) {
            return res.redirect("/bmadmin/bussinessdetails");
        }
        return res.render("adminPanels/buildingManagement/residenceDetails", {
            layout: false,
        });
    }

    /**
     * @description: residenceDetails for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async residenceDetails(req, res) {
        try {
            const {
                residenceType,
                numberOfFlatOrVilla,
                buildingNameOrAreaName,
                residenceAddressOrRoadBlock,
                managerName,
                residenceLat,
                residenceLong,
            } = req.body;

            const residencePolicies = req.files?.residencePolicies?.[0]
                ?.filename
                ? `/BMadmin/${req.files.residencePolicies[0].filename}`
                : null;

            const emergencyExits = req.files?.emergencyExits?.[0]?.filename
                ? `/BMadmin/${req.files.emergencyExits[0].filename}`
                : null;

            const fireExtingushierLocations = req.files
                ?.fireExtingushierLocations?.[0]?.filename
                ? `/BMadmin/${req.files.fireExtingushierLocations[0].filename}`
                : null;

            const permissions = req.body.permissions || [];

            const residenceDetails = {
                signupId: req.session.signup.signupId,
                residenceType,
                numberOfFlatOrVilla,
                buildingNameOrAreaName,
                residenceAddressOrRoadBlock,
                managerName,
                permissions: permissions,
                residencePolicies: residencePolicies,
                emergencyExits: emergencyExits,
                fireExtingushierLocations: fireExtingushierLocations,
                residenceLat: parseFloat(residenceLat),
                residenceLong: parseFloat(residenceLong),
            };

            if (req.files) {
                const residenceDetail = await BMresidenceDetails.create(
                    residenceDetails
                );
                req.session.signup = {
                    signupId: req.session.signup.signupId,
                    step: 4,
                };
                req.flash("success", "Residence Details Added Successfully.");
                return res.redirect("/bmadmin/bankdetails");
            }
        } catch (error) {
            console.error("Error in residenceDetails:", error);
            return res.status(500).json({
                message: "Internal Server Error",
                success: false,
            });
        }
    }

    /**
     * @description: bankDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        if (!req.session.signup || req.session.signup.step < 4) {
            return res.redirect("/bmadmin/bussinessdetails");
        }
        return res.render("adminPanels/buildingManagement/bankDetails", {
            layout: false,
        });
    }

    /**
     * @description: bankDetails for Building Management
     * @param {*} data
     * @param {*} req
     * @param {*} res
     */
    static async bankDetails(data, req, res) {
        if (!req.session.signup || req.session.signup.step < 4) {
            return res.redirect("/bmadmin/residencedetails");
        }
        try {
            const {
                accountName,
                accountNumber,
                IBAN,
                bankName,
                billingAddress,
            } = data;

            const bankDetails = {
                signupId: req.session.signup.signupId,
                bankName,
                accountNumber,
                accountName,
                IBAN,
                billingAddress,
            };
            const existingBankDetails = await BMbankDetails.findOne({
                accountNumber: bankDetails.accountNumber,
            });

            if (existingBankDetails) {
                return res.status(400).json({
                    message: "Bank account already exists.",
                    success: false,
                });
            } else {
                const bankDetail = await BMbankDetails.create(bankDetails);
                req.session.signup = {
                    signupId: req.session.signup.signupId,
                    step: 5,
                };
            }
            req.flash("success", "Bank Details Added Successfully.");

            return res.redirect("/bmadmin/subscriptiondetails");
        } catch (error) {
            console.error("Error in bankDetails:", error);
            return res.status(500).json({
                message: "Internal Server Error",
                success: false,
            });
        }
    }

    /**
     * @description: subscriptionDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionDetailsPage(req, res) {
        if (!req.session.signup || req.session.signup.step < 5) {
            return res.redirect("/bmadmin/bussinessdetails");
        }
        return res.render(
            "adminPanels/buildingManagement/subscriptionDetails",
            {
                layout: false,
            }
        );
    }

    /**
     * @description: subscriptionDetails for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionDetails(req, res) {
        if (!req.session.signup || req.session.signup.step < 5) {
            return res.redirect("/bmadmin/bussinessdetails");
        }
        const { planName, setupFee, monthlyFee, commissionRate } = req.body;
        try {
            await BMsubscriptionPlan.create({
                signupId: req.session.signup.signupId,
                planName,
                setupFee: Number(setupFee),
                monthlyFee: Number(monthlyFee),
                commissionRate: Number(commissionRate),
            });

            req.session.signup = {
                signupId: req.session.signup.signupId,
                step: 6,
            };
            req.flash("success", "Subscription selected successfully.");
            res.redirect("/bmadmin/reviewdetails");
        } catch (err) {
            console.error("Subscription save failed:", err);
            req.flash("error", "Something went wrong.");
            res.redirect("back");
        }
    }

    /**
     * @description: notificationPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async notificationPage(req, res) {
        return res.render("adminPanels/buildingManagement/notification", {
            currentPage: null,
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }

    /**
     * @description: reviewDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetailsPage(req, res) {
        const signupId = req.session.signup.signupId;
        const businessDetails = await BMbusinessDetails.findOne({
            signupId: signupId,
        });
        if (!businessDetails) {
            req.flash("error", "Business details not found.");
            return res.redirect("/bmadmin/bussinessdetails");
        }
        const adminProfile = await BMadminProfile.findOne({
            signupId: signupId,
        });
        if (!adminProfile) {
            req.flash("error", "Admin profile not found.");
            return res.redirect("/bmadmin/adminprofile");
        }
        const residenceDetails = await BMresidenceDetails.findOne({
            signupId: signupId,
        });
        if (!residenceDetails) {
            req.flash("error", "Residence details not found.");
            return res.redirect("/bmadmin/residencedetails");
        }
        const bankDetails = await BMbankDetails.findOne({ signupId: signupId });
        if (!bankDetails) {
            req.flash("error", "Bank details not found.");
            return res.redirect("/bmadmin/bankdetails");
        }
        const subscriptionPlan = await BMsubscriptionPlan.findOne({
            signupId: signupId,
        });
        if (!subscriptionPlan) {
            req.flash("error", "Subscription plan not found.");
            return res.redirect("/bmadmin/subscriptiondetails");
        }
        return res.render("adminPanels/buildingManagement/reviewDetails", {
            layout: false,
            moment: moment,
            businessDetails: businessDetails,
            adminProfile: adminProfile,
            residenceDetails: residenceDetails,
            bankDetails: bankDetails,
            subscriptionPlan: subscriptionPlan,
        });
    }

    /**
     * @description: reviewDetails for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetails(req, res) {
        const signupId = req.session.signup.signupId;
        const businessDetails = await BMbusinessDetails.findOne({
            signupId: signupId,
        });
        if (!businessDetails) {
            req.flash("error", "Business details not found.");
            return res.redirect("/bmadmin/bussinessdetails");
        }
        const adminProfile = await BMadminProfile.findOne({
            signupId: signupId,
        });
        if (!adminProfile) {
            req.flash("error", "Admin profile not found.");
            return res.redirect("/bmadmin/adminprofile");
        }
        const residenceDetails = await BMresidenceDetails.findOne({
            signupId: signupId,
        });
        if (!residenceDetails) {
            req.flash("error", "Residence details not found.");
            return res.redirect("/bmadmin/residencedetails");
        }
        const bankDetails = await BMbankDetails.findOne({
            signupId: signupId,
        });
        if (!bankDetails) {
            req.flash("error", "Bank details not found.");
            return res.redirect("/bmadmin/bankdetails");
        }
        const subscriptionPlan = await BMsubscriptionPlan.findOne({
            signupId: signupId,
        });
        if (!subscriptionPlan) {
            req.flash("error", "Subscription plan not found.");
            return res.redirect("/bmadmin/subscriptiondetails");
        }

        if (
            businessDetails &&
            adminProfile &&
            residenceDetails &&
            bankDetails &&
            subscriptionPlan
        ) {
            await BMadmin.create({
                signupId: signupId,
                businessDetailsId: businessDetails._id,
                adminProfileId: adminProfile._id,
                residenceDetailsId: residenceDetails._id,
                bankDetailsId: bankDetails._id,
                subscriptionId: subscriptionPlan._id,
                isFinalSubmitted: true,
            });
            req.flash("success", "Review details submitted successfully.");
            req.session.signup = null; // Clear the session after submission
            return res.redirect("/bmadmin/login");
        }
    }
}

export default bmServices;
