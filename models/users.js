import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        IDno: {
            type: String,
            required: true,
        },
        nationality: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Nationality",
            required: true,
        },
        buildingOrComplexName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BMresidenceDetails",
            required: true,
        },
        flatVillaNumber: {
            type: String,
            required: true,
        },
        associationMember: {
            type: Boolean,
            default: false,
        },
        resident: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Boolean,
            default: false,
        },
        countryCode1: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
            required: true,
        },
        countryCode2: {
            type: String,
            required: true,
        },
        emergencyNumber: {
            type: String,
            required: true,
        },
        agreementPdf: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            default: null,
        },
        personalPhoto: {
            type: String,
            default: null,
        },
        birthDate: {
            type: String,
            default: null,
        },
        password: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
