import SuperAdmin from "../models/superAdmin";
import SeedMetaHash from "../models/seederMetaHash";
import crypto from "crypto";
import Cloths from "../models/cloths";
import clothsData, { reverse } from "./clothsData";
import Countries from "../models/countries";
import countriesData from "./countriesData";
import Cities from "../models/cities";
import citiesData from "./citiesData";

const getHash = (data) => {
    return crypto
        .createHash("sha256")
        .update(JSON.stringify(data))
        .digest("hex");
};

const revrs = (str) => {
    const s = [...str].reverse().join("");
    return s.replace(/([a-zA-Z])([0-9])/g, "$2$1");
};

const seedWithHash = async ({
    model,
    data,
    key,
    upsertQueryFields = [],
    customUpsertQueryFn,
}) => {
    const currentHash = getHash(data);
    const previousHash = await SeedMetaHash.findOne({ key });
    const count = await model.countDocuments();

    const shouldSeed =
        count === 0 || !previousHash || previousHash.hash !== currentHash;

    if (!shouldSeed) return;

    for (const item of data) {
        const query =
            typeof customUpsertQueryFn === "function"
                ? customUpsertQueryFn(item)
                : Object.fromEntries(
                      upsertQueryFields.map((field) => [field, item[field]])
                  );

        await model.updateOne(query, { $set: item }, { upsert: true });
    }

    await SeedMetaHash.findOneAndUpdate(
        { key },
        { $set: { hash: currentHash } },
        { upsert: true }
    );

    console.log(
        count === 0
            ? `${key} seeded for the first time.`
            : `${key} updated based on data changes.`
    );
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

    await seedWithHash({
        model: Cloths,
        data: clothsData,
        key: revrs("SBMClothsDataHash"),
        upsertQueryFields: ["name", "category"],
    });

    await seedWithHash({
        model: Countries,
        data: countriesData,
        key: revrs("SBMCountriesDataHash"),
        upsertQueryFields: ["name", "countryCode"],
    });

    const countries = await Countries.find({});
    const countryMap = {};
    countries.forEach((c) => {
        countryMap[c.name] = c._id;
    });

    const transformedCities = citiesData
        .map((city) => {
            const countryId = countryMap[city.country];
            if (!countryId) {
                console.warn(`Country not found for city: ${city.name}`);
                return null;
            }
            return {
                name: city.name,
                country: countryId,
            };
        })
        .filter(Boolean); // Remove nulls

    await seedWithHash({
        model: Cities,
        data: transformedCities,
        key: revrs("SBMCitiesDataHash"),
        upsertQueryFields: ["name", "country"],
    });
};

admin();

export default admin;
