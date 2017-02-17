import React from 'react';
import Button from "./button.jsx";
import _ from 'lodash';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
    }

    print(value) {
        return(
            <li key={value}> 
                  {value} 
            </li>
        );
    }

    render() {
        return(
            <div>
                <h2>Hello from React! {this.props.message}</h2>
                <ul>
                    { _.map([1,2], this.print) }
                </ul>
                <Button/>
            </div>
        );
    }

}
