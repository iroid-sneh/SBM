import mongoose from "mongoose";

const BMadminProfileSchema = mongoose.Schema(
    {
        adminProfilePhoto: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        countryCode: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            default: null,
        },
        otpExpiry: {
            type: Date,
            default: null,
        },
        isOtpVerified: {
            type: Boolean,
            default: false,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const BMAdminProfile = mongoose.model("BMAdminProfile", BMadminProfileSchema);

export default BMAdminProfile;
