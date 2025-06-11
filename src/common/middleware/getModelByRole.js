import BMAdminProfile from "../../../models/BMAdmin/BMadminProfile";
// import SuperAdmin from "../models/SuperAdmin.js";
// import ServiceAdmin from "../models/ServiceAdmin.js";

export function getModelByRole(role) {
    switch (role) {
        // case "superAdmin":
        //     return SuperAdmin;
        case "admin":
            return BMAdminProfile;
        // case "serviceAdmin":
        //     return ServiceAdmin;
        default:
            throw new Error("Unknown role: " + role);
    }
}
