export default class ItemAppPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getDefaultProps() {
        return {
            selectItemCls: 'dv-view-item-focused',
            overItemCls: 'dv-view-over'
        };
    }

    render() {
        //Get class item
        let _classItem = {
            'dv-thumb-wrap': true,
            'col-md-4': true
        };
        //_classItem[this.props.selectItemCls] = this.props.selected;
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
            React.DOM.div({},
                React.DOM.img(
                    {src: 'http://placehold.it/60x60', alt: this.props.name}
                )
            ),
            React.DOM.span({
                children: this.props.name
            })
        );
    }
}
