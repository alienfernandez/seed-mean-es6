'use strict';

var config = require('../config'),
    //logger = require('./log'),
    redis = require('redis');

var redisClient = redis.createClient(
    config.redis.port,
    config.redis.ip
);

redisClient
    .on('ready', function () {
        console.info('REDIS ready');
        //logger.info('REDIS ready');
    })
    .on('error', function (err) {
        console.error('REDIS ' + err.message);
        //logger.error('REDIS ' + err.message);
    })
    .on('end', function () {
        console.info('REDIS disconnect');
        //logger.info('REDIS disconnect');
    });

module.exports = redisClient;