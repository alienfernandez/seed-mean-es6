export default class DataItem extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    getDefaultProps() {
        return {
            selectItemCls: 'dv-item-selected',
            overItemCls: 'dv-view-over'
        };
    }

    /**
     * Render component
     * @returns {*|Long|Timestamp}
     */
    render() {
        //Get class item
        let _classItem = {'dv-thumb-wrap': true};
        _classItem[this.props.selectItemCls] = this.props.selected;
        _classItem[this.props.overItemCls] = this.state.mouseOver;
        var classItem = classNames(_classItem);
        return React.DOM.div({
                className: classItem,
                onClick: (function (index, event) {
                    this.props.dataView.setState({selected: index});
                    this.props.onClick(this.props.item, this.props.dataView, index, event);
                }).bind(this, this.props.index),

                onMouseOver: (function (event) {
                    this.setState({mouseOver: true});
                }).bind(this),

                onMouseOut: (function (event) {
                    this.setState({mouseOver: false});
                }).bind(this)
            },
            React.DOM.div({className: 'dv-thumb'},
                React.DOM.img(
                    {src: 'http://placehold.it/150x150', alt: this.props.name}
                )
            ),
            React.DOM.span({
                children: 'Hello ' + this.props.name
            })
        );
    }
}