const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');
const container = require('./di');
const config = require('config');

module.exports = passport => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        container.UsersRepository.getById(id).then((user) => {
            done(null, user);
        }, done);
    });

    passport.use(
        new GoogleStrategy({
                clientID: config.get('google.clientID'),
                clientSecret: config.get('google.clientSecret'),
                callbackURL: 'http://cm.availability.ua/api/v1/auth/google/callback'
            },
            (accessToken, refreshToken, profile, done) => {
                const user = container.UsersRepository.getByEmail(profile.emails[0].value)
                return user
                    .then(user => done(null, user))
                    .catch(done);
            }
        ));


    passport.use(
        new JwtStrategy({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: config.get('secret.cookieKey')
            },
            (jwt_payload, done) => {
                container.UsersRepository.getById(jwt_payload.sub)
                    .then((user) => done(null, user))
                    .catch(done);
            }))

};
