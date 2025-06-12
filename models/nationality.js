import mongoose from "mongoose";

const nationalitySchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        code: {
            type: String,
        },
        flag: {
            type: String,
        },
    },
    { timestamps: true }
);

const Nationality = mongoose.model("Nationality", nationalitySchema);

export default Nationality;
