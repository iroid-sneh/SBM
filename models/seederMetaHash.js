import mongoose from "mongoose";

const seedMetaHashSchema = mongoose.Schema(
    {
        key: {
            type: String,
            unique: true,
        },
        hash: String,
    },
    { timestamps: true }
);

const SeedMetaHash = mongoose.model("SeedMetaHash", seedMetaHashSchema);

export default SeedMetaHash;
