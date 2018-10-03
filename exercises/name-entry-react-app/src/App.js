import React, { Component } from 'react';

import Form from "./Form"
import List from "./List"

class App extends Component {
    constructor() {
        super();
        this.state = {
            names: []
        }
        this.addName = this.addName.bind(this);
    }
    handleChange(event) {
        const { target } = event;
        this.setState({
            [target.name]: target.value
        })
    }
    addName(event) {
        this.setState()
    }

    render() {
        const nameListItems = this.state.names.map((name, i) => <li key={i}>{name}</li>)
        return (
            <div>
                <h1>{this.state.addName}</h1>
                <Form submit={inputs => this.addName(inputs.name)} />
                {nameListItems}
            </div>
        )
    }
}

export default App;