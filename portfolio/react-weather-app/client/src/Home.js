import React, { Component, createRef, createContext } from 'react'
import axios from "axios"
import postscribe from 'postscribe';

import Loading from './Loading';
import DisplayWeather from './DisplayWeather'

export const { Provider, Consumer } = createContext();


const geocodeURL = "https://vschool-cors.herokuapp.com?url=https://geocoder.api.here.com/6.2/geocode.json?app_id=HyOzagnhFcmnMR4TSyHe&app_code=Ez1LLz3vg-DWz7GYh-kfpw&searchtext="

const forcastURL = "https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/4a76b89d6955003792dceab10f2b06e2/"

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            homeLat: 40.7626,
            homeLon: -111.88389,
            currentLat: 40.7626,
            currentLon: -111.88389,
            geocodedLoc: [],
            forcast: {},
            currentForcast: {},
            dailyForcast: {},
            hourlyForcast: {},
            searchText: '',
            err: null,
            loading: true
        }
        this.radar = createRef()
        this.formatSearchText = this.formatSearchText.bind(this)
        this.handleSearchText = this.handleSearchText.bind(this)
        this.handleGeocode = this.handleGeocode.bind(this)
        this.geocodeAddress = this.geocodeAddress.bind(this)
        this.organizeWeather = this.organizeWeather.bind(this)
        this.getWeather = this.getWeather.bind(this)
        this.handleWeather = this.handleWeather.bind(this)
        this.weather = this.weather.bind(this)

    }

    formatSearchText(prevState, searchText) {
        while (searchText[0] === " ") {
            searchText = searchText.slice(1)
        }
        prevState.searchText = searchText.replace(/\s\s+/g, '+')
        return prevState
    }

    handleSearchText(searchText) {
        return () => this.setState(prevState => this.formatSearchText({ ...prevState }, searchText))
    }



    geocodeAddress(prevState) {
        return axios.get(`${geocodeURL}${prevState.searchText}`).then(response => response.Response.View.Result[0])

    }

    handleGeocode() {
        return this.geocodeAddress().then(geocodedLoc => this.setState({ geocodedLoc }))
    }

    organizeWeather(prevState) {
        prevState.currentForcast = prevState.forcast.currently
        prevState.dailyForcast = prevState.forcast.daily
        prevState.hourlyForcast = prevState.forcast.hourly
        return prevState;
    }

    getWeather() {
        return axios.get(`${forcastURL}${this.state.currentLat},${this.state.currentLon}`).then(response => response.data);
    }


    handleWeather() {
        return this.getWeather().then(forcast => this.setState({ forcast }))
    }


    weather() {
        return this.handleWeather().then(() => this.setState(prevState => this.organizeWeather({ ...prevState })))
    }
    genRadarScript(src) {
        const script = document.createElement("script");
        script.setAttribute("src", src);
        script.setAttribute("defer", true);
        this.radar.current.appendChild(script)
    }
    componentDidUpdate() {
        const weatherScript = `<script type="text/javascript"src="https://darksky.net/map-embed/@radar,${this.state.currentLat},${this.state.currentLon},8.js?embed=true&timeControl=false&fieldControl=false&defaultField=radar" async></script>`;
        if (this.radar.current) postscribe(this.radar.current, weatherScript)
    }
    componentDidMount() {
        this.weather()
            .then(response => {
                this.setState({ loading: false, err: null })
            })
            .catch(err => this.setState({ loading: false, err: { message: "Error 404" } }))
    }

    render() {
        const { loading, err } = this.state;
        return (
            <Provider value={{...this.state, }}>
                <div className="home-wrapper">
                    {loading ?
                        <Loading />
                        :
                        err ?
                            <p>{err.message}</p>
                            :
                            <DisplayWeather ref={this.radar}{...this.state} />
                    }
                </div>
            </Provider>
        )
    }
}