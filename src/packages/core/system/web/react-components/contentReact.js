import _ from 'lodash';

export default class ContentView extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    getInitialState() {
        return {};
    }

    getDefaultProps() {
        return {};
    }

    /**
     * Render component
     * @returns {*|Long|Timestamp}
     */
    render() {
        return (
            <div>
                <div>
                    <h2>Congrats! You've configured and run the sample application.</h2>

                    <p>MEANRR.JS is a web application boilerplate, which means you should start changing everything
                        :-)</p>

                    <p>This sample application tracks users and articles.</p>
                    <ul>
                        <li>
                            Click
                            <em>Sign Up</em> to get started.
                        </li>
                        <li>
                            Configure your app to work with your social accounts, by editing the
                            <em></em> files.
                        </li>
                        <li>
                            Edit your security module.
                        </li>
                        <li>
                            Add new CRUD modules.
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h2><strong>M</strong>ongoDB</h2>

                        <p><a target="_blank" href="http://mongodb.org/">MongoDB</a> is a NoSQL database. MongoDB's <a
                            target="_blank" href="http://docs.mongodb.org/manual/">great manual</a> is the place to get
                            started
                            with NoSQL and MongoDB.</p>
                    </div>
                    <div className="col-md-4">
                        <h2><strong>E</strong>xpress</h2>

                        <p><a target="_blank" href="http://expressjs.com/"> Express</a> is a NodeJS server-side
                            application web
                            framework. Check out <a target="_blank" href="http://expressjs.com/4x/api.html">The
                                ExpressJS API
                                reference for more information</a> or
                            <a target="_blank"
                               href="http://stackoverflow.com/questions/8144214/learning-express-for-node-js">StackOverflow</a>
                            for more info.</p>
                    </div>
                    <div className="col-md-4">
                        <h2><strong>A</strong>ngularJS</h2>

                        <p><a target="_blank" href="http://angularjs.org/">AngularJS</a> is client-side web application
                            framework.
                            The <a target="_blank" href="http://www.thinkster.io/">Thinkster Popular Guide</a> and <a
                                target="_blank" href="https://egghead.io/">Egghead Videos</a> are great resources.</p>
                    </div>
                    <div className="col-md-4">
                        <h2><strong>N</strong>ode.js</h2>

                        <p><a target="_blank" href="http://nodejs.org/">Node.js</a> is a JavaScript run-time, popular
                            for being
                            a web server platform. Node's website and this
                            <a target="_blank"
                               href="http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js">stackOverflow
                                thread</a> offer excellent starting points to get to grasps with node.</p>
                    </div>
                    <div className="col-md-4">
                        <h2><strong>R</strong>eact.js</h2>

                        <p><a target="_blank" href="https://facebook.github.io/react/">React.js</a> is a javascript
                            library for
                            building user interfaces. Lots of people use React as the <strong>V</strong> in MVC. React
                            abstracts
                            away the DOM from you, giving a simpler programming model and better performance. React
                            implements one-way reactive data flow which reduces boilerplate and is easier to reason
                            about than
                            traditional data binding.</p>
                    </div>
                    <div className="col-md-4">
                        <h2><strong>R</strong>edis</h2>

                        <p><a target="_blank" href="http://redis.io/">Redis</a> In-memory data structure store used as
                            database,
                            cache and message broker. It supports data structures such as strings, hashes, lists, sets,
                            sorted
                            sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}
