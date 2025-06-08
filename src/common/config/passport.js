import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { JWT } from "../constants/constant";
import AccessToken from "../../../models/accessToken";

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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

            return done(null, { userId: jwtPayload.id, jti: jwtPayload.jti });
        } catch (err) {
            return done(err, false);
        }
    })
);

export default passport;
