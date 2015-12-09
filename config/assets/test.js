'use strict';

module.exports = {
    tests: {
        client: ['src/packages/*/tests/web/**/*.js'],
        clientPublic: ['public/app/packages/*/tests/web/**/*.js'],
        server: ['src/packages/*/tests/server/**/*.js'],
        e2e: ['src/packages/*/tests/e2e/**/*.js']
    }
};
