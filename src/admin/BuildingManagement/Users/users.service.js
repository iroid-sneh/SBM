import fs from "fs";
import BMresidenceDetails from "../../../../models/BMAdmin/BMresidenceDetails";
import Countries from "../../../../models/countries";
import Nationality from "../../../../models/nationality";
import Users from "../../../../models/users";
import commonService from "../../../common/utils/common.service";
import path from "path";

class usersServices {
    /**
     * @description: residentOwnerPage for admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async residentOwnerPage(req, res) {
        const countries = await Countries.find({});
        const buildingOrComplex = await BMresidenceDetails.find({});
        const nationality = await Nationality.find({});
        return res.render(
            "adminPanels/buildingManagement/users/residentOwner",
            {
                currentPage: "users",
                layout: "adminPanels/buildingManagement/layouts/layout",
                countries: countries,
                buildingOrComplex: buildingOrComplex,
                nationality: nationality,
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
     * @description: residentOwnersList for admin Panel
     * @param {*} query
     * @param {*} req
     * @param {*} res
     */
    static async residentOwnersList(query, req, res) {
        try {
            const { start, draw, search, length } = query;
            const limit = parseInt(length) || 10;
            const skip = parseInt(start) || 0;
            const search_value = query.customSearch || "";

            let search_query = {};
            if (search_value) {
                search_query = {
                    $or: [
                        { fullName: { $regex: search_value, $options: "i" } },
                        { IDno: { $regex: search_value, $options: "i" } },
                        {
                            flatVillaNumber: {
                                $regex: search_value,
                                $options: "i",
                            },
                        },
                        {
                            countryCode1: {
                                $regex: search_value,
                                $options: "i",
                            },
                        },
                        {
                            contactNumber: {
                                $regex: search_value,
                                $options: "i",
                            },
                        },
                        {
                            countryCode2: {
                                $regex: search_value,
                                $options: "i",
                            },
                        },
                        {
                            emergencyNumber: {
                                $regex: search_value,
                                $options: "i",
                            },
                        },
                    ],
                };
            }

            let sortBy = { createdAt: -1 }; // default

            if (query["order[0][column]"] !== undefined) {
                // Define your frontend columns order (MUST match frontend)
                const columns = [
                    "flatVillaNumber",
                    "buildingOrComplexName",
                    null,
                    null,
                    "nationality",
                    null, // merged countryCode1 + contactNumber
                    null, // merged countryCode2 + emergencyNumber
                    "resident",
                    "owner",
                    "associationMember",
                    null,
                    null, // actions column – not sortable
                ];

                const colIdx = query["order[0][column]"];
                const dir = query["order[0][dir]"] === "desc" ? -1 : 1;
                const sortField = columns[colIdx];

                if (sortField) {
                    sortBy = { [sortField]: dir };
                }
            }

            const data = await Users.find(search_query)
                .skip(skip)
                .limit(limit)
                .sort(sortBy)
                .populate("nationality", "name flag")
                .populate("buildingOrComplexName", "buildingNameOrAreaName");

            const total = await Users.countDocuments();
            const filteredTotal = await Users.countDocuments(search_query);

            return res.status(200).json({
                success: true,
                draw: parseInt(draw) || 0,
                iTotalRecords: total,
                iTotalDisplayRecords: filteredTotal,
                aaData: data,
            });
        } catch (error) {
            console.error("Error in get usersList data", error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }

    /**
     * @description: updateResidentOwner for admin Panel
     * @param {*} id
     * @param {*} data
     * @param {*} req
     * @param {*} res
     */
    static async updateResidentOwner(id, data, req, res) {
        const findUser = await commonService.findById(Users, { _id: id });
        if (!findUser) {
            console.log(
                "Error in updateResidentOwner: User not found with id: " + id
            );
            req.flash("error", "user not found");
        }
        try {
            const updatedData = {
                ...data,
            };
            if (req.files) {
                // Default to existing values
                let agreementPdf = findUser.agreementPdf;
                let personalPhoto = findUser.personalPhoto;

                // Check and update if new PDF uploaded
                if (req.files.agreementPdf && req.files.agreementPdf[0]) {
                    // Delete old PDF if exists
                    if (agreementPdf) {
                        try {
                            fs.unlinkSync(
                                path.join(
                                    __dirname,
                                    "../../../../public/",
                                    agreementPdf
                                )
                            );
                        } catch (err) {
                            console.log(
                                "Error deleting old agreement PDF:",
                                err
                            );
                        }
                    }
                    // Update with new path
                    agreementPdf = `/users/${req.files.agreementPdf[0].filename}`;
                }

                // Check and update if new photo uploaded
                if (req.files.personalPhoto && req.files.personalPhoto[0]) {
                    // Delete old photo if exists
                    if (personalPhoto) {
                        try {
                            fs.unlinkSync(
                                path.join(
                                    __dirname,
                                    "../../../../public/",
                                    personalPhoto
                                )
                            );
                        } catch (err) {
                            console.log("Error deleting old photo:", err);
                        }
                    }
                    // Update with new path
                    personalPhoto = `/users/${req.files.personalPhoto[0].filename}`;
                }

                // Save updated file paths
                updatedData.agreementPdf = agreementPdf;
                updatedData.personalPhoto = personalPhoto;
            }

            await commonService.findByIdAndUpdate(
                Users,
                { _id: id },
                updatedData
            );
            // req.flash("success", "User Updated Successfully");
            return res.status(200).json({
                success: true,
                message: "User Updated Successfully",
            });
        } catch (error) {
            console.log("Error in updating users", error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }

    /**
     * @description: deleteResidentOwner for admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async deleteResidentOwner(id, req, res) {
        try {
            const findUser = await commonService.findById(Users, { _id: id });
            if (!findUser) {
                req.flash("error", "User not found");
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }

            await commonService.findByIdAndDelete(Users, { _id: id });
            return res.status(200).json({
                success: true,
                message: "User deleted successfully",
            });
        } catch (error) {
            console.log("Error in deleteResidentOwner", error);
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
        const buildingOrComplex = await BMresidenceDetails.find({});
        const nationality = await Nationality.find({});
        const countries = await Countries.find({});

        return res.render("adminPanels/buildingManagement/users/security", {
            currentPage: "users",
            layout: "adminPanels/buildingManagement/layouts/layout",
            countries: countries,
            buildingOrComplex: buildingOrComplex,
            nationality: nationality,
        });
    }

    /**
     * @description: addSecurity for admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async addSecurity(req, res) {}

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
