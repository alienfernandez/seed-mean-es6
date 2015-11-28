export default class ItemTemplateReact extends React.Component {
    render() {
        console.log("this.props.template", this.props.template);
        return (
            this.props.template
        );
    }
}
