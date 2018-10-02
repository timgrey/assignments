import React from 'react';
import { Component } from "react"


class App extends Component {
    constructor() {
        super();
        this.state = {
            s1: "yellow",
            s2: "red",
            s3: "blue",
            s4: "green"
        }
        this.handleB1 = this.handleB1.bind(this);
        this.handleB2 = this.handleB2.bind(this);
        this.handleB3 = this.handleB3.bind(this);
        this.handleB4 = this.handleB4.bind(this);

    }
    handleB1() {
        this.setState({
            s1: "black",
            s2: "black",
            s3: "black",
            s4: "black"
        })
    }
    handleB2() {
        this.setState({
            s1: "purple",
            s2: "purple"
        })
    }
    handleB3() {
        this.setState({ s3: "blue" })
    }
    handleB4() {
        this.setState({ s4: "blue" })
    }

    render() {
        const {s1, s2, s3, s4} = this.state;

        return (
            <div className="djcontainer">
                <div className="boxes">
                    <div className="b1" style={{ backgroundColor: s1 }}></div>
                    <div className="b2" style={{ backgroundColor: s2 }}></div>
                    <div className="b3" style={{ backgroundColor: s3 }}></div>
                    <div className="b4" style={{ backgroundColor: s4 }}></div>
                </div>
                <div>
                    <button onClick={this.handleB1}>Button 1</button>
                    <button onClick={this.handleB2}>Button 2</button>
                    <button onClick={this.handleB3}>Button 3</button>
                    <button onClick={this.handleB4}>Button 4</button>
                </div>
            </div>
        )
    }
}

export default App