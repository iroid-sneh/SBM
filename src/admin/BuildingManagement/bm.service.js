import Countries from "../../../models/countries";
import Cities from "../../../models/cities";
import BMbusinessDetails from "../../../models/BMAdmin/BMbussinessDetails";
import BMadminProfile from "../../../models/BMAdmin/BMadminProfile";
import { randomOtpGenerator } from "../../common/helper";
import { hashPassword } from "../../common/authHelper";

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
        const { countryCode, Number, password } = req.body;
        return res.redirect("/bmadmin/bussinessdetails");
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
            const businessLogo = file
                ? `/BMadmin/businessLogo-${file.filename}`
                : null;

            const workingTime = [];

            if (Array.isArray(data.openTime) && Array.isArray(data.closeTime)) {
                for (let i = 0; i < data.openTime.length; i++) {
                    if (data.openTime[i] && data.closeTime[i]) {
                        workingTime.push({
                            openTime: data.openTime[i],
                            closeTime: data.closeTime[i],
                        });
                    }
                }
            }

            if (file) {
                await BMbusinessDetails.create({
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
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
    }

    /**
     * @description: adminProfilePage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async adminProfilePage(req, res) {
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
            const hashedPassword = await hashPassword(password); // Use argon2

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
                profileId: adminProfile._id,
                step: 2,
            };

            // TODO: Integrate SMS gateway here
            console.log(`OTP for ${contactNumber}: ${otp}`);

            return res.status(200).json({
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
     * @param {*} req
     * @param {*} res
     */
    static async verifyOtp(req, res) {
        const adminId = req.user;
        const { otp } = req.body;

        const admin = await BMadminProfile.findById(adminId);

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        if (admin.otp !== otp || admin.otpExpiry < new Date()) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        await BMadminProfile.findByIdAndUpdate(
            adminId,
            {
                otp: newOtp,
                otpExpiry,
                isOtpVerified: true,
            },
            { new: true } // returns the updated document
        );

        req.session.signup.step = 3;

        req.flash("success", "Admin Profile Added Successfully");
        return res
            .status(200)
            .json({ message: "OTP verified successfully" })
            .redirect("/bmadmin/residencedetails");
    }

    /**
     * @description: resendOtp for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async resendOtp(req, res) {
        try {
            const { adminId } = req.user;

            const findBMadmin = await BMadminProfile.findById(adminId);

            if (!findBMadmin) {
                return res.status(404).json({ message: "Admin not found" });
            }

            const newOtp = randomOtpGenerator(6);
            const otpExpiry = new Date(Date.now() + 2 * 60 * 1000);

            await BMadminProfile.findByIdAndUpdate(
                adminId,
                {
                    otp: newOtp,
                    otpExpiry,
                },
                { new: true }
            );

            // TODO: Send OTP via SMS gateway
            console.log(
                `Resent OTP to ${findBMadmin.contectNumber}: ${newOtp}`
            );

            return res.status(200).json({ message: "OTP resent successfully" });
        } catch (err) {
            console.error("Resend OTP failed", err);
            return res.status(500).json({ message: "Server error" });
        }
    }

    /**
     * @description: residenceDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async residenceDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/residenceDetails", {
            layout: false,
        });
    }

    /**
     * @description: bankDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/bankDetails", {
            layout: false,
        });
    }

    /**
     * @description: subscriptionDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionDetailsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/subscriptionDetails",
            {
                layout: false,
            }
        );
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
        return res.render("adminPanels/buildingManagement/reviewDetails", {
            layout: false,
        });
    }
}

export default bmServices;
