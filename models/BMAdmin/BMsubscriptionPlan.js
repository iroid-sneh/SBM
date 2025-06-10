import mongoose from "mongoose";

const BMsubscriptionDetailsSchema = mongoose.Schema(
    {
        signupId: { type: mongoose.Schema.Types.ObjectId, required: true },
        planName: {
            type: String,
            required: true,
        },
        setupFee: {
            type: String,
            required: true,
        },
        monthlyFee: {
            type: String,
            required: true,
        },
        commissionRate: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const BMsubscriptionDetails = mongoose.model(
    "BMsubscriptionDetails",
    BMsubscriptionDetailsSchema
);

export default BMsubscriptionDetails;
