import mongoose from "mongoose";

const accessTokenSchema = mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
            unique: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        jti: {
            type: String,
            required: true,
            index: true,
        },
        isRevoked: {
            type: Boolean,
            default: false,
        },
        expires_at: {
            type: Date,
            required: true,
            index: { expires: 0 }, // TTL index, auto-delete after this time
        },
    },
    { timestamps: true }
);

const AccessToken = mongoose.model("AccessToken", accessTokenSchema);

export default AccessToken;
