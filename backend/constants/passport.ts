import { ExtractJwt, StrategyOptions } from "passport-jwt"

export const options: StrategyOptions = {
    secretOrKey : process.env.JWT_SECRET,
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
}