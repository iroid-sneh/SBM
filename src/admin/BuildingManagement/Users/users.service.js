import BMresidenceDetails from "../../../../models/BMAdmin/BMresidenceDetails";
import Countries from "../../../../models/countries";
import Users from "../../../../models/users";
import commonService from "../../../common/utils/common.service";

class usersServices {
    /**
     * @description: residentOwnerPage for admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async residentOwnerPage(req, res) {
        const countries = await Countries.find({});
        const buildingOrComplex = await BMresidenceDetails.find({});
        return res.render(
            "adminPanels/buildingManagement/users/residentOwner",
            {
                currentPage: "users",
                layout: "adminPanels/buildingManagement/layouts/layout",
                countries: countries,
                buildingOrComplex: buildingOrComplex,
            }
        );
    }

    /**
     * @description: addResidentOwners for admin Panel
     * @param {*} data
     * @param {*} req
     * @param {*} res
     */
    static async addResidentOwners(data, req, res) {
        try {
            const {
                fullName,
                IDno,
                nationality,
                buildingOrComplexName,
                flatVillaNumber,
                associationMember,
                resident,
                owner,
                countryCode1,
                contactNumber,
                countryCode2,
                emergencyNumber,
            } = data;

            const findUser = await commonService.findOne(Users, {
                contactNumber,
                IDno,
            });

            const agreementPdf = req.files?.agreementPdf?.[0]?.filename
                ? `/users/${req.files.agreementPdf[0].filename}`
                : null;

            const personalPhoto = req.files?.personalPhoto?.[0]?.filename
                ? `/users/${req.files.personalPhoto[0].filename}`
                : null;

            if (findUser) {
                return res.status(400).json({
                    success: false,
                    message: "User Already Exists with this contact number",
                });
            } else {
                const user = await commonService.create(Users, {
                    fullName,
                    IDno,
                    nationality,
                    buildingOrComplexName,
                    flatVillaNumber,
                    associationMember:
                        associationMember === "on" ? true : false,
                    resident: resident === "on" ? true : false,
                    owner: owner === "on" ? true : false,
                    countryCode1,
                    contactNumber,
                    countryCode2,
                    emergencyNumber,
                    personalPhoto: personalPhoto,
                    agreementPdf: agreementPdf,
                });

                req.flash("success", "User Created Successfully.");
                return res.status(200).json({
                    success: true,
                    message: "User Created Successfully.",
                });
            }
        } catch (error) {
            console.log("User Creation Error", error);
            req.flash("error", "Internal Server Error.");
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }

    /**
     * @description: securityPage for admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async securityPage(req, res) {
        return res.render("adminPanels/buildingManagement/users/security", {
            currentPage: "users",
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }

    /**
     * @description: technicianPage for admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async technicianPage(req, res) {
        return res.render("adminPanels/buildingManagement/users/technician", {
            currentPage: "users",
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }
}

export default usersServices;
