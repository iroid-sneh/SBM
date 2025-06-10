import passport from "../config/passport.js";
import { HttpStatus } from "../utils/errorException";
// import User from "../models/user.model.js";
import BMadmin from "../../../models/BMAdmin/BMadmin.js";
import AccessToken from "../../../models/accessToken.js";

export default (req, res, next) => {
    passport.authenticate("jwt", { session: false }, async (err, user) => {
        if (!user) {
            return res
                .status(HttpStatus.UNAUTHORIZED)
                .json({ message: "Unauthorized" });
        }

        const validToken = await AccessToken.findOne({
            token: user.jti,
            userId: user.userId,
            isRevoked: false,
        });

        if (!validToken) {
            return res
                .status(HttpStatus.UNAUTHORIZED)
                .json({ message: "Invalid access token" });
        }

        const today = new Date();
        const start = new Date(today.setHours(0, 0, 0, 0));
        const end = new Date(today.setHours(23, 59, 59, 999));

        const lastLogin = await User.findOne({
            _id: user.userId,
            lastLoginAt: { $gte: start, $lte: end },
        });

        if (!lastLogin) {
            await User.findByIdAndUpdate(user.userId, {
                lastLoginAt: new Date(),
            });
        }

        req.user = user;
        return next();
    })(req, res, next);
};
