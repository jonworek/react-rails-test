import React from "react";
import counterStore from "stores/counterStore";

export default class CounterDisplay extends React.Component {
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

    reset() {
        counterStore.dispatch({ type: 'RESET' })
    }

    render() {
        return(
            <div>
                <h2>Counter display / reset</h2>
                <p>Counter value: {this.state.counter}</p>
                <button onClick={this.reset}>RESET</button>
            </div>
        );
    }
}
