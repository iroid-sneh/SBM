import mongoose from "mongoose";

const clothsSchema = mongoose.Schema(
    {
        name: String,
        image: String,
        category: {
            type: String,
            enum: ["Men", "Women", "Kids", "Others"],
            required: true,
        },
    },
    { timestamps: true }
);

const Cloths = mongoose.model("Cloths", clothsSchema);

export default Cloths;
