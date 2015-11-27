import commonModule from '../../../commonModule';

/**
 * @ngdoc directive
 * @name dataView
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Directive data view
 *
 */
class DataViewDirective {

    constructor() {
        let templateDataView = `
          <div class="dv-thumb-wrap dv-item-selected dv-view-item-focused" role="option" tabindex="-1" >
            <div class="thumb">
                <img src="icons/kiva.png">
            </div>
            <span>Kiva app</span>
          </div>
        `;

        let directive = {
            restrict: 'E',
            replace: true,
            //controller: DataViewController,
            template: '<div data-role="transclude" class="dv-main">' +
            '<span id="testt" data-role="test"></span>' +
            '</div>',
            scope: {
                options: '='
            },
            link: ($scope, $element, $attrs, ngModel, transclude) => {
                //let container = element[0].children[0];
                //$compile(container)($scope);
                var ReactDataItem = React.createClass({
                    propTypes: {
                        name: React.PropTypes.string.isRequired
                    },
                    render: function () {
                        //dv-view-item-focused dv-item-selected
                        return React.DOM.div({
                                className: 'dv-thumb-wrap ' + this.props.className,
                                onClick: (function (event, key) {
                                    this.props.dataView.setState({active: this.props.index});
                                    this.props.clickHandler(event, key, this.props.index);
                                }).bind(this)
                            },
                            React.DOM.div({className: 'dv-thumb'},
                                React.DOM.img(
                                    {src: 'http://placehold.it/50x50', alt: this.props.name}
                                )
                            ),
                            React.DOM.span({
                                children: 'Hello ' + this.props.name
                            })
                        );
                    }
                });

                var ReactDataView = React.createClass({
                    propTypes: {
                        store: React.PropTypes.array.isRequired,
                        activeItem: React.PropTypes.number.isRequired
                    },
                    getInitialState: function () {
                        return { active: 0 };
                    },
                    activeItem: function (active) {
                        return (active == this.props.active) ? "dv-item-selected" : "";
                    },
                    handleClick: function (event, key, index) {
                        this.setState({activeItem: index});
                        console.log("key", key);
                        console.log("index", index);
                        console.log("event", event);
                        //event.preventDefault();
                    },
                    render: function () {
                        var self = this;
                        var items = [];
                        for (var i = 0; i < this.props.store.length; i++) {
                            let className = (i == this.state.active) ? 'dv-item-selected' : '';
                            //Create item
                            var item = React.createElement(ReactDataItem, {
                                name: 'Alien' + i,
                                className: className,
                                clickHandler: this.handleClick,
                                key: i,
                                dataView: self
                            });
                            items.push(item);
                        }
                        return React.DOM.div({className: 'dv-main'}, items);
                    }
                });
                console.log("$element.find')", $element.find('#testt'));
                React.render(
                    React.createElement(ReactDataView, {store: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}), $element.find('#testt')[0]
                );
                //React.renderComponent(ReactDataView({name: "Alien"}), document.getElementById("testt"));
                //React.render(React.createElement(ReactDataView, {name: "Alien!!!"}), document.getElementById("testt"));
                //ReactDOM.render(<ReactDataView name="Alien" />, $element.find('div.data-view'));
            }
        };

        return directive;
    }
}

commonModule.directive('dataview', () => new DataViewDirective());

export default commonModule;
