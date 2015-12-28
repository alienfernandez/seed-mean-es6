'use strict';

module.exports = {
    app: {
        title: 'MEANRR.ES6',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, Node.js, React.js and Redis',
        keywords: 'MongoDB, Express, AngularJS, Node.js, React.js, Redis',
        googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
    },
    port: process.env.PORT || 8000,
    templateEngine: 'swig',
    // Session Cookie settings
    sessionCookie: {
        // session expiration is set by default to 24 hours
        maxAge: 24 * (60 * 60 * 1000),
        // httpOnly flag makes sure the cookie is only accessed
        // through the HTTP protocol and not JS/browser
        httpOnly: true,
        // secure cookie should be turned to true to provide additional
        // layer of security so that the cookie is set only when working
        // in HTTPS mode.
        secure: false
    },
    landingPageState: 'home',
    // sessionSecret should be changed for security measures and concerns
    sessionSecret: '214e4a8c46d1bb2cb35a6bdb7ff41752a77ceccd',
    secret: '3ef08f6cec91fd33a050c61955de86c86ca44ada',
    // sessionKey is set to the generic sessionId key used by PHP applications for obsecurity reasons
    sessionKey: 'sessionId',
    redisSessionSecret: 'eVCbCFxUUG1kq3x5U9tuzUOkg',
    sessionCollection: 'sessions',
    logo: 'public/app/packages/core/web/assets/img/brand/logo.png',
    favicon: 'public/app/packages/core/web/assets/img/brand/favicon.ico',
    staticFiles: 'public/assets/static/',
    uploads: {
        profileUpload: {
            dest: './public/assets/img/profile/uploads/', // Profile upload destination path
            dirStore: 'assets/img/profile/uploads/', // Dir store
            limits: {
                fileSize: 2 * 1024 * 1024 // Max file size in bytes (2 MB)
            }
        }
    }
};
