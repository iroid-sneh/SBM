import mongoose from "mongoose";

const BMbankDetailsSchema = mongoose.Schema(
    {
        signupId: { type: mongoose.Schema.Types.ObjectId, required: true },
        accountName: {
            type: String,
            required: true,
            trim: true,
        },
        accountNumber: {
            type: String,
            required: true,
        },
        IBAN: {
            type: String,
            required: true,
        },
        bankName: {
            type: String,
            required: true,
        },
        billingAddress: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const BMbankDetails = mongoose.model("BMbankDetails", BMbankDetailsSchema);

export default BMbankDetails;
