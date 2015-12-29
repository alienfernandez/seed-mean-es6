var util = require('../util/utils');

module.exports = function () {

    this.tokens = {};

    this.consumeRememberMeToken = function (token, fn) {
        var uid = this.tokens[token];
        // invalidate the single-use token
        //delete tokens[token];
        return fn(null, uid);
    };

    this.saveRememberMeToken = function (token, uid, fn) {
        this.tokens[token] = uid;
        return fn();
    }

    this.issueToken = function (user, done) {
        var token = util.randomString(64);
        console.log("token", token)
        this.saveRememberMeToken(token, user.id, function (err) {
            if (err) {
                return done(err);
            }
            return done(null, token);
        });
    }

}

