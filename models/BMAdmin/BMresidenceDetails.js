import mongoose from "mongoose";

const BMresidenceDetailsSchema = mongoose.Schema(
    {
        residenceType: {
            type: String,
            required: true,
        },
        numberOfFlatOrVilla: {
            type: String,
            required: true,
        },
        buildingNameOrAreaName: {
            type: String,
            required: true,
        },
        residenceAddressOrRoadBlock: {
            type: String,
            required: true,
        },
        managerName: {
            type: String,
            required: true,
        },
        permissions: [
            {
                type: String,
                required: true,
            },
        ],
        residencePolicies: {
            type: String,
            required: true,
        },
        emergencyExits: {
            type: String,
            required: true,
        },
        fireExtingushierLocations: {
            type: String,
            required: true,
        },
        residenceLat: {
            type: Number,
            required: true,
        },
        residenceLong: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const BMresidenceDetails = mongoose.model(
    "BMresidenceDetails",
    BMresidenceDetailsSchema
);

export default BMresidenceDetails;
