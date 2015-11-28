
export default class DataGroupingView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getInitialState() {
        return {};
    }

    getDefaultProps() {
        return {
        };
    }

    render() {
        return React.DOM.div({className: 'dv-grouping'}, this.props.items);
    }
}
