import mongoose from "mongoose";

const citiesSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        country: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Countries", // Reference to the Countries model
            required: true,
        },
    },
    { timestamps: true }
);

const Cities = mongoose.model("Cities", citiesSchema);

export default Cities;
