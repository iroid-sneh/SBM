import passport from "../config/passport.js";
import { HttpStatus } from "../utils/errorException";
import { getModelByRole } from "../middleware/getModelByRole.js";
import AccessToken from "../../../models/accessToken.js";

export default (req, res, next) => {
    passport.authenticate(
        "jwt",
        { session: false },
        async (err, user, info) => {
            if (err) {
                console.error("Passport error:", err);
                req.flash("error", "Internal authentication error");
                return res.redirect("/bmadmin/login");
            }

            // Token expired or not present
            if (!user) {
                if (info?.name === "TokenExpiredError") {
                    req.flash("error", "Session expired. Please login again.");
                } else {
                    req.flash("error", "Unauthorized access.");
                }
                return res.redirect("/bmadmin/login");
            }

            const validToken = await AccessToken.findOne({
                token: user.jti,
                userId: user.userId,
                isRevoked: false,
            }).lean();

            if (!validToken) {
                req.flash("error", "Session invalid or revoked.");
                return res.redirect("/bmadmin/login");
            }

            try {
                req.user = user;
                return next();
            } catch (err) {
                console.error("Auth error:", err.message);
                req.flash("error", "Something went wrong. Try again.");
                return res.redirect("/bmadmin/login");
            }
        }
    )(req, res, next);
};
