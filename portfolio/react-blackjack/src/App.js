import React, { Component } from 'react'
import GetCards from "./GetCards";
import Home from "./Home"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            loading: true,
            err: null
        }

        this.click = this.click.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    click(prevState) {
        prevState.clicked = true;
        return prevState
    }

    handleClick() {
        this.setState(prevState => this.click({ ...prevState }))
    }

    render() {
        const {clicked} = this.state
        return (
            <div className="body-wrapper" onClick={this.handleClick}>
                { clicked ? <GetCards />
                : <Home />}
            </div>
        )
    }
}