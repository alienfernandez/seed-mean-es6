'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
    db: {
        uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + 'localhost/mean',
        options: {
            user: '',
            pass: ''
        },
        // Enable mongoose debug mode
        debug: process.env.MONGODB_DEBUG || false
    },
    redis: {
        "ip": "127.0.0.1",
        "port": 6379
    },
    log: {
        // logging with Morgan - https://github.com/expressjs/morgan
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'dev',
        options: {
            // Stream defaults to process.stdout
            // Uncomment/comment to toggle the logging to a log on the file system
            //stream: {
            //  directoryPath: process.cwd(),
            //  fileName: 'access.log',
            //  rotatingLogs: { // for more info on rotating logs - https://github.com/holidayextras/file-stream-rotator#usage
            //    active: false, // activate to use rotating logs
            //    fileName: 'access-%DATE%.log', // if rotating logs are active, this fileName setting will be used
            //    frequency: 'daily',
            //    verbose: false
            //  }
            //}
        }
    },
    app: {
        title: defaultEnvConfig.app.title + ' - Development Environment'
    },
    facebook: {
        clientID: process.env.FACEBOOK_ID || 'APP_ID',
        clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/facebook/callback'
    },
    twitter: {
        clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
        clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
        callbackURL: '/api/auth/twitter/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID || 'APP_ID',
        clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/google/callback'
    },
    linkedin: {
        clientID: process.env.LINKEDIN_ID || 'APP_ID',
        clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/linkedin/callback'
    },
    github: {
        clientID: process.env.GITHUB_ID || 'APP_ID',
        clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/github/callback'
    },
    paypal: {
        clientID: process.env.PAYPAL_ID || 'CLIENT_ID',
        clientSecret: process.env.PAYPAL_SECRET || 'CLIENT_SECRET',
        callbackURL: '/api/auth/paypal/callback',
        sandbox: true
    },
    mailer: {
        from: process.env.MAILER_FROM || 'alienfernandez85@gmail.com', // sender address like ABC <abc@example.com>
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail', // Gmail, SMTP
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'alienfernandez85@gmail.com',
                pass: process.env.MAILER_PASSWORD || '******'
            }
        }
    },
    livereload: true,
    seedDB: process.env.MONGO_SEED || false
};
