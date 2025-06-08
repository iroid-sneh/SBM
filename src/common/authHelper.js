import jwt from "jsonwebtoken";
import moment from "moment";
import argon2 from "argon2";
import crypto from "crypto";
import AccessToken from "../../models/accessToken";
import RefreshToken from "../../models/refreshToken";
import { JWT, TOKEN_EXPIRY_HOURS } from "../common/constants/constant";

class AuthHelper {
    /**
     * Securely match hashed password using Argon2
     * @param {string} plainPassword
     * @param {string} hashedPassword
     * @returns {Promise<boolean>}
     */
    static async matchHashedPassword(plainPassword, hashedPassword) {
        try {
            return await argon2.verify(hashedPassword, plainPassword);
        } catch (err) {
            return false;
        }
    }

    /**
     * Hash password using Argon2
     * @param {string} password
     * @returns {Promise<string>} hashed password
     */
    static async hashPassword(password) {
        return await argon2.hash(password);
    }

    /**
     * Generate JWT access token
     * @param {string} userId
     * @param {string} jti
     * @returns {string} access token
     */
    static async accessTokenGenerator(userId, jti, payloadExtras = {}) {
        await this.storeAccessToken(userId, jti);

        return jwt.sign(
            {
                id: userId,
                jti,
                ...payloadExtras,
            },
            JWT.SECRET,
            {
                expiresIn: JWT.EXPIRES_IN || "15m",
            }
        );
    }

    /**
     * Generate a refresh token (random string)
     * @param {string} userId
     * @param {string} jti (unique identifier shared with access token)
     * @returns {string} refresh token
     */
    static async refreshTokenGenerator(userId, jti) {
        const token = crypto.randomBytes(64).toString("hex");
        await this.storeRefreshToken(userId, token, jti);
        return token;
    }

    /**
     * Generate both access and refresh tokens
     * @param {string} userId
     * @param {object} payloadExtras - additional JWT payload like role, panel, etc.
     * @returns {object} tokens
     */
    static async tokensGenerator(userId, payloadExtras = {}) {
        const jti = crypto.randomBytes(16).toString("hex");

        const accessToken = await this.accessTokenGenerator(
            userId,
            jti,
            payloadExtras
        );
        const refreshToken = await this.refreshTokenGenerator(userId, jti);

        return {
            accessToken,
            refreshToken,
            expiresIn: JWT.EXPIRES_IN || "15m",
        };
    }

    /**
     * Get data from a JWT token
     * @param {string} token
     * @returns {object} decoded payload
     */
    static async getDataFromToken(token) {
        return jwt.verify(token, JWT.SECRET);
    }

    /**
     * Store access token in DB (by jti)
     * @param {string} userId
     * @param {string} jti
     * @returns {Promise<void>}
     */
    static async storeAccessToken(userId, jti) {
        const expiredAt = moment()
            .add(TOKEN_EXPIRY_HOURS.ACCESS, "hours")
            .toDate();
        await AccessToken.create({ token: jti, userId, expires_at: expiredAt });
    }

    /**
     * Store refresh token in DB
     * @param {string} userId
     * @param {string} token
     * @param {string} jti
     * @returns {Promise<void>}
     */
    static async storeRefreshToken(userId, token, jti) {
        const expiredAt = moment()
            .add(TOKEN_EXPIRY_HOURS.REFRESH, "hours")
            .toDate();
        await RefreshToken.create({
            token,
            userId,
            jti,
            expires_at: expiredAt,
        });
    }
}

module.exports = AuthHelper;
