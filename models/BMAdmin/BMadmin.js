import mongoose from "mongoose";

const BMadminSchema = mongoose.Schema(
    {
        businessDetailsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BMbusinessDetails",
        },
        adminProfileId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BMadminProfile",
        },
        residenceDetailsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BMresidenceDetails",
        },
        bankDetailsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BMbankDetails",
        },
        subscriptionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BMsubscription",
        },
        isFinalSubmitted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const BMadmin = mongoose.model("BMadmin", BMadminSchema);

export default BMadmin;
