class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    _clickAction() {
        alert("hi!");
    }

    render() {
        return(
            <button onClick={this._clickAction}>Click me!</button>
        );
    }

}
