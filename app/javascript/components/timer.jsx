import React from 'react';
import Button from "./button.jsx";

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Hello from React!</h2>
                <Button/>
            </div>
        );
    }

}
