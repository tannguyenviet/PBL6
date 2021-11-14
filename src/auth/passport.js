const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const db = require("../utils/db");
const Account = db.account;

passport.use(
    new StrategyJwt({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        },
        function(jwtPayload, done) {
            return Account.findOne({ where: { id: jwtPayload.id } })
                .then((account) => {
                    return done(null, account);
                })
                .catch((err) => {
                    return done(err);
                });
        }
    )
);