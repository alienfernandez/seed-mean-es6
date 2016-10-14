
SEED-MEANRR.ES6 is a full-stack JavaScript open-source solution based in new version of javascript, which provides a solid starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), [React.js](https://facebook.github.io/react/), [Redis](http://redis.io/) and [AngularJS](http://angularjs.org/) based applications. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components.

## Before You Begin
Before you begin we recommend you read about the basic building blocks that assemble a MEANRR.ES6 application:
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS Guide](http://expressjs.com/guide/error-handling.html) guide for general express topics. You can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.
* React.js - A javascript library for building user interfaces [React.js Official Website](https://facebook.github.io/react/).
* Redis - In-memory data structure store [Redis Official Website](http://redis.io/), used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

## Prerequisite Technologies
Make sure you have installed all of the following prerequisites on your development machine:

### Linux
* *Node.js* - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js. 
* *MongoDB* - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* *Redis* - [Download & Install Redis](http://redis.io/), and make sure it's running on the default port (6379).
* *Git* - Get git using a package manager or [download](http://git-scm.com/downloads/) it.

If you're using ubuntu, this is the preferred repository to use...

```bash
$ curl -sL https://deb.nodesource.com/setup | sudo bash -
$ sudo apt-get update
$ sudo apt-get install nodejs
```

### Windows
* *Node.js* - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js. 
* *MongoDB* - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* *Git* - The easiest way to install git and then run the rest of the commands through the *git bash* application (via command prompt) is by downloading and installing [Git for Windows](http://git-scm.com/download/win/)
* *Redis* - [Download & Install Redis](http://redis.io/), and make sure it's running on the default port (6379).

### OSX
* *Node.js* -  [Download](http://nodejs.org/download/) and Install Node.js or use the packages within brew or macports.
* *MongoDB* - Follow the tutorial here - [Install mongodb on OSX](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
* *git* - Get git [from here](http://git-scm.com/download/mac/).

You should have a MongoDB and Redis servers running. The default address for these in `config/env/development.json` is set to `localhost`

## Prerequisite packages

* MEANRR.ES6 currently uses Gulp as a build tool and Jspm to manage frontend packages.

* Gulp - You're going to use the [Automate and enhance your workflow](http://gulpjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install gulp globally using npm:

```bash
$ npm install -g gulp
```

* Jspm - You're going to use the [Frictionless browser package management (Jspm)](http://jspm.io/) to automate your development process. Make sure you've installed Node.js and npm first, then install jspm globally using npm:

```bash
$ npm install -g jspm
```

## Create a new project based on the seed-meanrr-es6

Clone this repo into new project folder (e.g., `my-new-project`).
```bash
git clone https://github.com/alienfernandez/seed-mean-es6  my-new-project
cd my-new-project
```

We have no intention of updating the source on `alienfernandez/seed-mean-es6`.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-new-project.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```

## Quick Install
Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop your MEAN application.

The first thing you should do is install the Node.js dependencies. The boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application. To learn more about the modules installed visit the NPM & Package.json section.

To install Node.js dependencies you're going to use npm again. In the application folder run this in the command-line:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.
```bash
$ npm install
```

> If the `jspm_packages` folder doesn't show up after `npm install` please install them manually with:

> `jspm install`

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* Finally, when the install process is over, npm will initiate a jspm install command to install all the front-end modules needed for the application

## Install OpenFire
* *OpenFire* - [Download & Install Openfire](https://www.igniterealtime.org/downloads/) and choose your platform.
 If you are using ubuntu here is an example how you can install it 
 [Install Oenfire in Ubuntu](https://www.thefanclub.co.za/how-to/how-setup-im-voip-server-using-openfire-ubuntu-1404) 
 We are going to use OpenFire in the chat module

## Running Your Application
After the install process is over, you'll be able to run your application using npm, just run:

```
$ npm start
```

Your application should run on port 8000 with the *development* environment configuration, so in your browser just go to [http://localhost:8000](http://localhost:8000)

That's it! Your application should be running. To proceed with your development, check the other sections in this documentation.

* explore `config/env/development.js` for development environment configuration options

### Running in Production mode
To run your application with *production* environment configuration, execute npm as follows:

```bash
$ npm run prod
```

* explore `config/env/production.js` for production environment configuration options

### Running with TLS (SSL)
Application will start by default with secure configuration (SSL mode) turned on and listen on port 8443.
To run your application in a secure manner you'll need to use OpenSSL and generate a set of self-signed certificates. Unix-based users can use the following command:

```bash
$ sh ./scripts/generate-ssl-certs.sh
```

Windows users can follow instructions found [here](http://www.websense.com/support/article/kbarticle/How-to-use-OpenSSL-and-Microsoft-Certification-Authority).
After you've generated the key and certificate, place them in the *config/sslcerts* folder.

Finally, execute gulp's prod task `gulp prod`
* enable/disable SSL mode in production environment change the `secure` option in `config/env/production.js`


### Troubleshooting
During installation depending on your os and prerequisite versions you may encounter some issues.

Most issues can be solved by one of the following tips, but if you are unable to find a solution feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Jspm or Gulp
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*. Usually updating those tools to the latest version solves the issue.

* Updating NPM:
```bash
$ npm update -g npm
```

* Updating Gulp:
```bash
$ npm update -g gulp
```

* Updating Jspm:
```bash
$ npm update -g jspm
```

#### Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

* NPM Clean Cache:
```bash
$ npm cache clean
```

* Jspm Clean Cache:
```bash
$ jspm cache-clear
```

## Sample Application
 
The sample application is a simple Articles create, read, update and destroy (CRUD) web site.

## Client-side

* [AngularJS](http://angularjs.org/) -  Single Page Applications (SPAs), declarative templates with data-binding, MVW, MVVM, MVC.
* [Bootstrap 3](http://getbootstrap.com/) - Powerful mobile first front-end framework for faster and easier web development.
* [React.js](https://facebook.github.io/react/) - Building user interfaces, use React as the V in MVC.

## Server-side

* [Express](http://expressjs.com/) Fast, unopinionated, minimalist web framework server-side for Node.js.
* [Passport](http://passportjs.org/) Authentication middleware for Node.js, extremely flexible and modular.

## Data Storage

* [MongoDB](http://www.mongodb.org/) - Data storage, next-generation database that lets you create applications never before possible.
* [Redis](http://redis.io/) - Session storage, In-memory data structure store used as database.

## Tools

* [Gulp](http://gulpjs.com/) - Build system automating tasks: minification and copying of all JavaScript files, static images, etc.
* [Jspm](http://jspm.io/) - Package manager for the SystemJS universal module loader.
* [Babel](https://babeljs.io/) - Transpiler for JavaScript best known for its ability to turn ES6.

## Credits

## License
