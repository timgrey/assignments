import React, { Component } from 'react';

import axios from "axios";

import CharacterView from "./CharacterView";

export default class Characters extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            loading: true,
            err: null
        }
    }
    getCharacterData(url) {
        return axios.get(url).then(response => response.data.results);
    }
    componentDidMount() {
        //shoot GET request here
        this.getCharacterData("https://vschool-cors.herokuapp.com?url=https://swapi.co/api/people")
            .then(characters => this.setState({ characters, loading: false }));
    }
    render() {
        const { loading, err, characters } = this.state;
        return (
            <div>
                {loading ?
                    <div>...Loading character data</div>
                    :
                    err ?
                        <div>Sorry, your data is unavailable</div>
                        :
                        <CharacterView characters={characters} />}
            </div>
        )
    }
}
