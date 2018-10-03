import React, { Component } from 'react'

export default class Toggler extends Component {
    constructor() {
        super();
        this.state = {
            on: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            on: !prevState.on
        }))
    }

    render() {
        const GenericComponent = this.props.component;

        const props = {
            toggle: this.toggle,
            on: this.state.on
        }
        return (
                <GenericComponent {...props}{...this.props} />
            
        )
    }
}

export const withToggler = C => props => <Toggler component={C}{...props} />