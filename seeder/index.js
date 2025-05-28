import SuperAdmin from "../models/superAdmin";
import Cloths from "../models/cloths";
import clothsData from "./clothsData";

const admin = async () => {
    const superAdminData = {
        email: "superadmin@gmail.com",
        password:
            "$2b$12$4ghb6CLvV6y2/rJX15ymquSc91W9e/Lo45T/vHVhT76NTe1.RKjdS", // superadmin@123
    };

    const findSuperAdmin = await SuperAdmin.find({});

    if (findSuperAdmin.length === 0) {
        const insert = await SuperAdmin.create(superAdminData);
        console.log("SuperAdmin Seeded");
        return true;
    }

    const findCloths = await Cloths.find({});

    if (findCloths.length === 0) {
        const insert = await Cloths.create(clothsData);
        console.log("Cloths Seeded");
        return true;
    }
};

admin();

export default admin;
