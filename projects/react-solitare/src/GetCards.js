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

    draw() {
        this.setState(prevState => {
            prevState.deck.unshift(prevState.currentCard.pop())
            prevState.currentCard.push(prevState.deck.pop())
        })
    }

    moveCard(origin, destination) {
        this.setState(prevState => {
            prevState[destination].push(prevState[origin].pop())
        })
    }

    fixCards(deck) {
        deck.map(function (card) {
            if (card.value === "ACE") {
                card.value = "1"
            } else if (card.value === "KING") {
                card.value = "13"
            } else if (card.value === "QUEEN") {
                card.value = "12"
            } else if (card.value === "JACK") {
                card.value = "11"
            }
            if (card.suit === "DIAMONDS") {
                card.color = "red"
            } else if (card.suit === "HEARTS") {
                card.color = "red"
            } else if (card.suit === "SPADES") {
                card.color = "black"
            } else if (card.suit === "CLUBS") {
                card.color = "black"
            }
            return card
        })
        return deck
    }

    dealCards(prevState) {

        //Runs function to add color codes to cards and fix values of
        //Kings, Queens, Jack, and Aces
        this.fixCards(prevState.deck)

        //Deals Cards into piles represented by Arrays
        prevState.playPile1.push(prevState.deck.pop())
        while (prevState.playPile2.length < 2) {
            prevState.playPile2.push(prevState.deck.pop())
        }
        while (prevState.playPile3.length < 3) {
            prevState.playPile3.push(prevState.deck.pop())
        }
        while (prevState.playPile4.length < 4) {
            prevState.playPile4.push(prevState.deck.pop())
        }
        while (prevState.playPile5.length < 5) {
            prevState.playPile5.push(prevState.deck.pop())
        }
        while (prevState.playPile6.length < 6) {
            prevState.playPile6.push(prevState.deck.pop())
        }
        while (prevState.playPile7.length < 7) {
            prevState.playPile7.push(prevState.deck.pop())
        }
        prevState.currentCard.push(prevState.deck.pop())

        //Returns updated state
        return prevState
    }



    getDeck(url) {
        const DeckRequest = () => axios.get(url).then(response => response.data.cards);

        return axios.get(shuffleDeckUrl).then(DeckRequest())
    }

    handleNewDeck() {
        return this.getDeck(newDeckUrl).then(deck => this.setState({ deck }))
    }

    dealDeck() {
        this.handleNewDeck().then(this.setState(prevState => this.dealCards(prevState)))

    }

    componentDidMount() {
        this.dealDeck()
    }

    render() {

        return (
            <div>
                <DisplayCards {...this.state} />
            </div>
        )
    }
}




