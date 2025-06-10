import mongoose from "mongoose";

const BMbusinessDetailsSchema = mongoose.Schema(
    {
        signupId: { type: mongoose.Schema.Types.ObjectId, required: true },
        businessLogo: {
            type: String,
            required: true,
        },
        commercialName: {
            type: String,
            required: true,
        },
        countryCode: {
            type: String,
            required: true,
        },
        businessLandline: {
            type: String,
            required: true,
        },
        VATnumber: {
            type: String,
            required: true,
        },
        CRnumber: {
            type: String,
            required: true,
        },
        businessEmail: {
            type: String,
            required: true,
        },
        workingTime: [
            {
                openTime: {
                    type: Date,
                    required: true,
                },
                closeTime: {
                    type: Date,
                    required: true,
                },
            },
        ],
        workingDays: [
            {
                type: String,
                required: true,
                enum: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
            },
        ],
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        addressLat: {
            type: Number,
            required: true,
        },
        addressLong: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const BMbusinessDetails = mongoose.model(
    "BMbusinessDetails",
    BMbusinessDetailsSchema
);

export default BMbusinessDetails;
