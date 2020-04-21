var passport = require('passport')
var Strategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
        clientID: 512005503038693,
        clientSecret: '0472a7b4231583eefac669d27a04215c',
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOrCreate(..., function(err, user) {
            if (err) { return done(err); }
            done(null, user);
        });
    }
));