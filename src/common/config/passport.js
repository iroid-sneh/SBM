import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { JWT } from "../constants/constant.js";
import AccessToken from "../../../models/accessToken.js";

const cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["accessToken"];
    }
    return token;
};

const options = {
    jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(), // For mobile
        cookieExtractor, // For web
    ]),
    secretOrKey: JWT.SECRET,
};

passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
        try {
            const accessToken = await AccessToken.findOne({
                userId: jwtPayload.id,
                token: jwtPayload.jti,
                isRevoked: false,
            });

            if (!accessToken) return done(null, false);

            return done(null, {
                userId: jwtPayload.id,
                jti: jwtPayload.jti,
                role: jwtPayload.role,
                panel: jwtPayload.panel,
            });
        } catch (err) {
            return done(err, false);
        }
    })
);

export default passport;
