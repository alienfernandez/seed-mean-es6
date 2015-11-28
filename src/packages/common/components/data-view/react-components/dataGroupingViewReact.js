export default class DataGroupingView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {collapse: false};
    }

    getInitialState() {
        return {collapse: false};
    }

    getDefaultProps() {
        return {};
    }

    /**
     * Render component
     * @returns {*|Long|Timestamp}
     */
    render() {
        //Class items
        let classItemCollapse = classNames({
            'dv-collapse': this.state.collapse
        });
        let classItemIcon = classNames({
            'fa fa-minus-circle': !this.state.collapse,
            'fa fa-plus-circle': this.state.collapse,
        });
        return React.DOM.div({className: 'dv-grouping'},
            React.DOM.div({
                    className: 'dv-header-grouping',
                    onClick: (function (event) {
                        this.setState({collapse: !this.state.collapse});
                    }).bind(this)
                },
                React.DOM.span({},
                    React.DOM.span({className: this.props.iconCls}),
                    React.DOM.span({}, " " + this.props.name),
                    React.DOM.span({
                            className: 'dv-collapse-btn',
                            onClick: (function (event) {
                                this.setState({collapse: !this.state.collapse});
                            }).bind(this)
                        },
                        React.DOM.span({className: classItemIcon})
                    )
                )
            ),
            React.DOM.div({className: classItemCollapse},
                this.props.items
            ),
            React.DOM.div({style: {clear: 'left'}})
        );
    }
}
