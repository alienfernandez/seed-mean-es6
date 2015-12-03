import _ from 'lodash';

export default class HeaderView extends React.Component {

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
            <div className="jumbotron text-center">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
                        <img alt="MEANRR.ES6" className="img-responsive text-center" src="assets/img/logo.png"/>
                    </div>
                </div>
                <br/>

                <div className="row">
                    <p className="lead">
                        Open-Source Full-Stack Solution For MEAN Applications
                    </p>
                </div>
                <div className="row">
                    <p>
                        <a className="btn btn-primary btn-lg" href="#" target="_blank">Learn more</a>
                    </p>
                </div>
            </div>
        );
    }

}
