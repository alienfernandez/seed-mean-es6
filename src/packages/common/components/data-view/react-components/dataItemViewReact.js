export default class DataItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getDefaultProps() {
        return {
            selectItemCls: 'dv-view-item-focused',
            overItemCls: 'dv-view-item-focused',
        };
    }

    render() {
        let mouseOverClass = (true === this.state.mouseOver) ? 'dv-view-over' : '';
        this.props.className += mouseOverClass;
        return React.DOM.div({
                className: 'dv-thumb-wrap ' + this.props.className,

                onClick: (function (index, event) {
                    this.props.dataView.setState({active: index});
                    this.props.onClick(this.props.item, this.props.dataView, index, event);
                }).bind(this, this.props.index),

                onMouseOver: (function (event) {
                    //this.setState({mouseOver: true});
                }).bind(this),

                onMouseOut: (function (event) {
                    //this.setState({mouseOver: false});
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
