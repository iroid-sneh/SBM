import SuperAdmin from "../models/superAdmin";
import Cloths from "../models/cloths";
import SeedMetaHash from "../models/seederMetaHash";
import clothsData from "./clothsData";
import crypto from "crypto";

const getHash = (data) => {
    return crypto
        .createHash("sha256")
        .update(JSON.stringify(data))
        .digest("hex");
};

const admin = async () => {
    const superAdminData = {
        email: "superadmin@gmail.com",
        password:
            "$2b$12$4ghb6CLvV6y2/rJX15ymquSc91W9e/Lo45T/vHVhT76NTe1.RKjdS", // superadmin@123
    };

    const existingSuperAdmin = await SuperAdmin.findOne({
        email: superAdminData.email,
    });

    if (!existingSuperAdmin) {
        await SuperAdmin.create(superAdminData);
        console.log("SuperAdmin Seeded");
    }

    const currentHash = getHash(clothsData);
    const seedKey = "hasHataDsehtolcMBS"; // SBMclothesDataHash

    const previousHash = await SeedMetaHash.findOne({ key: seedKey });
    const findClothsCount = await Cloths.countDocuments();

    const shouldSeedOrNot =
        findClothsCount === 0 ||
        !previousHash ||
        currentHash !== previousHash.hash;

    if (shouldSeedOrNot) {
        for (const cloths of clothsData) {
            await Cloths.updateOne(
                { name: cloths.name, category: cloths.category },
                { $set: cloths },
                { upsert: true }
            );
        }

        await SeedMetaHash.findOneAndUpdate(
            { key: seedKey },
            { $set: { hash: currentHash } },
            { upsert: true }
        );

        console.log(
            findClothsCount === 0
                ? "Clothes seeded for the first time."
                : "Clothes Seeder updated based on data changes."
        );
    }
};

admin();

export default admin;
