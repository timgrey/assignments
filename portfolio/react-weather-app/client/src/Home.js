import React, { Component } from 'react'
import axios from "axios"

const geocodeURL = "https://geocoder.api.here.com/6.2/geocode.json?app_id=HyOzagnhFcmnMR4TSyHe&app_code=Ez1LLz3vg-DWz7GYh-kfpw&searchtext="

const forcastURL = "https://api.darksky.net/forecast/4a76b89d6955003792dceab10f2b06e2/"

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            homeLat: 40.7626,
            homeLon: -111.88389,
            currentLat: null,
            currentLon: null,
            geocodedLoc: [],
            forcast: {},
            currentForcast: {},
            dailyForcast: {},
            searchText: '',
            err: null,
            loading:true
        }
    }

    formatSearchText(prevState, searchText) {
        prevState.searchText = searchText.replace( /\s\s+/g, '+')
        return prevState
    }

    handleSearchText(searchText) {
        return () => this.setState(prevState => this.formatSearchText({ ...prevState }, searchText))
    }

    organizeWeather(prevState) {
        prevState.currentForcast = prevState.forcast.currently
        prevState.dailyForcast = prevState.forcast.daily
        prevState.hourlyForcast = prevState.forcast.hourly

    }

    geocodeAddress(prevState) {
        return axios.get(`${geocodeURL}${prevState.searchText}`).then(response => response.Response.View.Result[0])

    }

    handleGeocode() {
        return this.geocodeAddress().then(geocodedLoc => this.setState( { geocodedLoc }))
    }

    getWeather(prevState) {
        return axios.get(`${forcastURL}${prevState.currentLat},${prevState.currentLon} `).then(response => response);
    }


    handleWeather() {
        return this.getWeather().then(forcast => this.setState({ forcast }))
    }


    weather() {
        return this.handleWeather().then(() => this.setState(prevState => this.organizeWeather({ ...prevState })))
    }


    componentDidMount() {
        this.weather()
            .then(response => {
                this.setState({ loading: false, err: null })
            })
            .catch(err => this.setState({ loading: false, err: { message: "Error 404" } }))
    }
    
    render () {
        const {loading, err} = this.state
        return (
            <div>
            {loading ?
                        <Home />
                        :
                        err ?
                            <p>{err.message}</p>
                            :
                            <div></div>
                    }
            </div>
        )
    }

}