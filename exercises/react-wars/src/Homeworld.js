import React, { Component } from 'react'
import { axios } from 'axios';

export default class Homeworld extends Component {
    constructor() {
        this.state = {
            homeworldData: null,
            loading: true,
            err: null
        }
    }

    getHomeWorldData(url) {
        return axios.get(url).then(response => response.data)

    }
    componentDidMount() {
        this.getHomeWorldData(`https://vschool-cors.herokuapp.com?url=${this.props.url}`)
            .then(homeworldData => this.setState({ homeworldData, loading: false }))
    }
    componentDidUpdate() {
        this.getHomeWorldData
    }
    render() {
        const { loading, homeworldData } = this.state;
        return (
            <div>
                {loading
                    ? <div> ...Loading planet data</div> }
                : err
                        ? <div>Sorry, your data is unvailable</div>
                : <div>
                    <
                        </div>
            </div>
                )
            }
        }
