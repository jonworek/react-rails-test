import React from "react";
import counterStore from "stores/counterStore";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        counterStore.subscribe(() => {
            this.setState({
                counter: counterStore.getState()
            });
        });

        this.state = {
            counter: 0
        };
    }

    increment() {
        counterStore.dispatch({ type: 'INCREMENT' })
    }

    decrement() {
        counterStore.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return(
            <div className="counter">
                <h2>Counter</h2>
                <p>Counter value: {this.state.counter}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}
