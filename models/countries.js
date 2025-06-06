import mongoose from "mongoose";

const countriesSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        flag: {
            type: String,
        },
        countryCode: {
            type: String,
        },
    },
    { timestamps: true }
);

const Countries = mongoose.model("Countries", countriesSchema);

export default Countries;
