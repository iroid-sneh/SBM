import mongoose from "mongoose";

const superAdminSchema = mongoose.Schema(
    {
        email: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    { timestamps: true }
);

const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);

export default SuperAdmin;
