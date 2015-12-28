'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
//LocalStrategy = require('passport-local').Strategy,
    RememberMeStrategy = require('passport-remember-me').Strategy,
    User = require('mongoose').model('User'),
    util = require('../../util/utils'),
    UtilRemember = require('../../util/util.remember_me');

module.exports = function () {
    //console.log("utilRemember", utilRemember);
    var remember = new UtilRemember();
    var issueToken = remember.issueToken;
    // Use local strategy
    passport.use(new RememberMeStrategy(
        function (token, done) {
            remember.consumeRememberMeToken(token, function (err, uid) {
                console.log("Err consume remember: ", err);
                if (err) {
                    return done(err);
                }
                if (!uid) {
                    return done(null, false);
                }

                User.findOne({
                    _id: uid
                }, '-salt -password', function (err, user) {
                    console.log("user user", user);
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false);
                    }
                    return done(null, user);
                });
            });
        },
        issueToken
    ));


};
