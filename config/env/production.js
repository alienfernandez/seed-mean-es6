'use strict';

module.exports = {
    secure: {
        ssl: true,
        privateKey: './config/sslcerts/key.pem',
        certificate: './config/sslcerts/cert.pem'
    },
    port: process.env.PORT || 443,
    db: {
        uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
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
    xmpp: {
        "domain": "localhost",
        "boshHttpService": "http://localhost/http-bind/",
        "adminHttpService": "http://localhost:9090/",
        "api": {
            "secretKey": "pXnyrebF5ys8Suv3",
            "path": {
                "users": "plugins/restapi/v1/users"
            }
        }
    },
    log: {
        // logging with Morgan - https://github.com/expressjs/morgan
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: process.env.LOG_FORMAT || 'combined',
        options: {
            // Stream defaults to process.stdout
            // Uncomment/comment to toggle the logging to a log on the file system
            stream: {
                directoryPath: process.env.LOG_DIR_PATH || process.cwd(),
                fileName: process.env.LOG_FILE || 'access.log',
                rotatingLogs: { // for more info on rotating logs - https://github.com/holidayextras/file-stream-rotator#usage
                    active: process.env.LOG_ROTATING_ACTIVE === 'true' ? true : false, // activate to use rotating logs
                    fileName: process.env.LOG_ROTATING_FILE || 'access-%DATE%.log', // if rotating logs are active, this fileName setting will be used
                    frequency: process.env.LOG_ROTATING_FREQUENCY || 'daily',
                    verbose: process.env.LOG_ROTATING_VERBOSE === 'true' ? true : false
                }
            }
        }
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
        sandbox: false
    },
    mailer: {
        from: process.env.MAILER_FROM || 'alienfernandez85@gmail.com', // sender address like ABC <abc@example.com>
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail', // Gmail, SMTP
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'alienfernandez85@gmail.com',
                pass: process.env.MAILER_PASSWORD || '*******'
            }
        }
    },
    seedDB: process.env.MONGO_SEED || false
};
