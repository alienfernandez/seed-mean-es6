
MEANRR.ES6 is a full-stack JavaScript open-source solution based in new version of javascript, which provides a solid starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), [React.js](https://facebook.github.io/react/), [Redis](http://redis.io/) and [AngularJS](http://angularjs.org/) based applications. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components.

## Before You Begin
Before you begin we recommend you read about the basic building blocks that assemble a MEAN.ES6 application:
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS Guide](http://expressjs.com/guide/error-handling.html) guide for general express topics. You can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.
* React.js - A javascript library for building user interfaces [React.js Official Website](https://facebook.github.io/react/).
* Redis - In-memory data structure store [Redis Official Website](http://redis.io/), used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js. 
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:
* Redis - [Download & Install Redis](http://redis.io/)

You should have a MongoDB and Redis servers running. The default address for these in `config/env/development.json` is set to `localhost`

```bash
$ npm install -g bower
```

* Gulp - You're going to use the [Automate and enhance your workflow](http://gulpjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install gulp globally using npm:

```bash
$ npm install -g gulp
```

### Cloning The Repository
The recommended way to get MEAN.ES6 is to use git to directly clone the MEAN.ES6 repository:

```bash
$ https://alienfernandez@bitbucket.org/alienfernandez/seed-mean-es6.git meanes6
```
### Yo Generator
-Another way would be to use the [Official Yo Generator](http://url), which generates a copy of the MEAN.ES6 0.0.0  

## Quick Install
Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop your MEAN application.

The first thing you should do is install the Node.js dependencies. The boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application. To learn more about the modules installed visit the NPM & Package.json section.

To install Node.js dependencies you're going to use npm again. In the application folder run this in the command-line:

```bash
$ npm install
```

To install jspm packages you're going to use jspm. In the application folder run this in the command-line:

```bash
$ jspm install
```

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* Finally, when the install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application

## Running Your Application
After the install process is over, you'll be able to run your application using npm, just run:

```
$ npm start
```

Your application should run on port 9000 with the *development* environment configuration, so in your browser just go to [http://localhost:9000](http://localhost:9000)

That's it! Your application should be running. To proceed with your development, check the other sections in this documentation.

* explore `config/env/development.js` for development environment configuration options

### Running in Production mode
To run your application with *production* environment configuration, execute npm as follows:

```bash
$ npm run prod
```

* explore `config/env/production.js` for production environment configuration options

The sample application is a simple Articles create, read, update and destroy (CRUD) web site.
## Client-side

* [AngularJS](http://angularjs.org/)
* [Bootstrap 3](http://getbootstrap.com/)
* [React.js](https://facebook.github.io/react/)

## Server-side

* [Express](http://expressjs.com/) JSON API
* [Passport](http://passportjs.org/) Authentication middleware

## Data Storage

* [MongoDB](http://www.mongodb.org/) - Data storage
* [Redis](http://redis.io/) Session storage

## Tools

* [Gulp](http://gulpjs.com/) Automate and enhance your workflow
* [Jspm](http://jspm.io//) Frictionless browser package management

## Credits

## License
