import DataItem from './dataItemViewReact';
import ItemTemplateReact from './itemTemplateReact';
import DataGroupingViewReact from './dataGroupingViewReact';

export default class DataView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {active: 0};
    }

    getInitialState() {
        return {active: 0};
    }

    getDefaultProps() {
        return {
            selectItemCls: 'dv-view-item-focused', //dv-item-selected
            overItemCls: 'dv-view-item-focused',
        };
    }

    activeItem(active) {
        return (active == this.props.active) ? "dv-item-selected" : "";
    }

    onClick(item, dataView, index, event) {
        dataView.state.active = index;
        //event.preventDefault();
    }

    render() {
        var self = this;
        var items = [];
        this.props.store.forEach((dataItem, index) => {
            let className = (index == this.state.active) ? this.props.selectItemCls : '';
            //Create data item
            DataItem.propTypes = {active: React.PropTypes.number};
            DataItem.defaultProps = {active: 0};
            var item;
            if (this.props.template) {
                var optionsTpl = this.props.template.options;
                optionsTpl.className = className;
                optionsTpl.index = index;
                optionsTpl.dataView = self;
                optionsTpl.item = dataItem;
                for (let data in dataItem) {
                    optionsTpl[data] = dataItem[data];
                }
                //optionsTpl.onClick = this.onClick.bind(this);
                item = React.createElement(DataItem, optionsTpl);
            }
            items.push(item);
        });
        if (this.props.groupBy) {

        }
        return React.DOM.div({className: 'dv-main'}, items);
    }
}
