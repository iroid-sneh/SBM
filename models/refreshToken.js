import mongoose from "mongoose";

const refreshTokenSchema = mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
            unique: true,
        },
        jti: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        isRevoked: {
            type: Boolean,
            default: false,
        },
        expires_at: {
            type: Date,
            required: true,
            index: { expires: 0 }, // TTL index
        },
    },
    { timestamps: true }
);

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

export default RefreshToken;
