import React, { Component } from 'react';
import DisplayCards from "./DisplayCards"
import axios from "axios";

const shuffleDeckUrl = `https://vschool-cors.herokuapp.com?url=https://deckofcardsapi.com/api/deck/kx0p5iz97y5n/shuffle/
`
const newDeckUrl = `https://vschool-cors.herokuapp.com?url=https://deckofcardsapi.com/api/deck/kx0p5iz97y5n/draw/?count=52`


export default class getCards extends Component {
    constructor() {
        super();
        this.state = {
            discardPile1: [],
            discardPile2: [],
            discardPile3: [],
            discardPile4: [],
            currentCard: [],
            deck: [],
            playPile1: [],
            playPile2: [],
            playPile3: [],
            playPile4: [],
            playPile5: [],
            playPile6: [],
            playPile7: [],
            loading: true,
            err: null
        }
        this.draw = this.draw.bind(this)
        this.moveCard = this.moveCard.bind(this)
        this.fixCards = this.fixCards.bind(this)
        this.dealCards = this.dealCards.bind(this);
        this.getDeck = this.getDeck.bind(this)
        this.handleNewDeck = this.handleNewDeck.bind(this)
        this.dealDeck = this.dealDeck.bind(this)

    }


    draw(prevState) {
        prevState.deck.unshift(prevState.currentCard.pop())
        prevState.currentCard.push(prevState.deck.pop())
        return prevState
    }

    // handleDiscard (origin, dest){
    //     return (e)=>{
    //         // handle event here
    //     }
    // }

    moveCard(origin, destination, validator) {
        this.setState(prevState => {
            prevState[destination].push(prevState[origin].pop())
            // validate else return original state
        })
    }

    fixCards(deck) {
        return deck.map(function (card) {

            //Assignes Numerical Values to Ace,King,Queen, and Jacks
            if (card.value === "ACE") {
                card.value = "1"
            } else if (card.value === "KING") {
                card.value = "13"
            } else if (card.value === "QUEEN") {
                card.value = "12"
            } else if (card.value === "JACK") {
                card.value = "11"
            }

            //Color Codes Cards
            if (card.suit === "DIAMONDS") {
                card.color = "red"
            } else if (card.suit === "HEARTS") {
                card.color = "red"
            } else if (card.suit === "SPADES") {
                card.color = "black"
            } else if (card.suit === "CLUBS") {
                card.color = "black"
            }

            //Assigns a flipped status of card for displaying purposes.
            card.flipped = false;

            return card
        })
    }

    dealCards(prevState) {

        //Runs function to add color codes to cards and fix values of
        //Kings, Queens, Jack, and Aces
        this.fixCards(prevState.deck)

        //Deals Cards into piles represented by Arrays
        //Flips last card in play piles over

        prevState.playPile1.push(prevState.deck.pop())
        prevState.playPile1[prevState.playPile1.length-1].flipped = true

        while (prevState.playPile2.length < 2) {
            prevState.playPile2.push(prevState.deck.pop())
        }
        prevState.playPile2[prevState.playPile2.length-1].flipped = true

        while (prevState.playPile3.length < 3) {
            prevState.playPile3.push(prevState.deck.pop())
        }
        prevState.playPile3[prevState.playPile3.length-1].flipped = true

        while (prevState.playPile4.length < 4) {
            prevState.playPile4.push(prevState.deck.pop())
        }
        prevState.playPile4[prevState.playPile4.length-1].flipped = true

        while (prevState.playPile5.length < 5) {
            prevState.playPile5.push(prevState.deck.pop())
        }
        prevState.playPile5[prevState.playPile5.length-1].flipped = true

        while (prevState.playPile6.length < 6) {
            prevState.playPile6.push(prevState.deck.pop())
        }
        prevState.playPile6[prevState.playPile6.length-1].flipped = true

        while (prevState.playPile7.length < 7) {
            prevState.playPile7.push(prevState.deck.pop())
        }
        prevState.playPile7[prevState.playPile7.length-1].flipped = true

        prevState.currentCard.push(prevState.deck.pop())

        //Returns updated state
        return prevState
    }



    getDeck() {
        const deckRequest = () => axios.get(newDeckUrl).then(response => response.data.cards);

        return axios.get(shuffleDeckUrl).then(deckRequest)
    }

    handleNewDeck() {
        return this.getDeck().then(deck => this.setState({ deck }))
    }

    dealDeck() {
        return this.handleNewDeck().then(() => this.setState(prevState => this.dealCards({ ...prevState })))
    }

    componentDidMount() {
        this.dealDeck()
            .then (response => {
                this.setState({loading:false, err:null})
            })
            .catch(err => this.setState({loading:false, err: {message: "Error 404: You suck at react"}}))
        // window.addEventListener("hover", this.handleDiscard())
    }

    render() {
        const {loading, err} = this.state
        return (
            <div>
            {loading ?
                    <div>...Loading</div>
                    :
                    err ?
                        <p>{err.message}</p>
                        :
                        <DisplayCards {...this.state} />
                        }
            </div>
        )
    }
}




