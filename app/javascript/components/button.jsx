import React from 'react';
import cube from '../utils/cube.js';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    _clickAction() {
        alert(`hi! ${cube(5)}`);
    }

    render() {
        return(
            <button onClick={this._clickAction}>Click me!</button>
        );
    }

}
