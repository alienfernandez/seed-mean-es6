'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function () {
    // Use local strategy
    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        },
        function (username, password, done) {
            //Find user by username or email
            var criteria = {$or: [{username: username.toLowerCase()}, {email: username.toLowerCase()}]};
            //{username: username.toLowerCase()}
            User.findOne(criteria, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user || !user.authenticate(password)) {
                    return done(null, false, {
                        message: 'Invalid username or password'
                    });
                }
                return done(null, user);
            });
        }));
};
