import React from "react"
import backOfCard from "./images/back-of-card.png";
import emptyCard from "./images/empty-card.png";


function displayCards({ playPile1, playPile2, playPile3, playPile4, playPile5, playPile6, playPile7,
    discardPile1, discardPile2, discardPile3, discardPile4, currentCard, deck }) {


    const playPileElements = playPile => {
        if (playPile.length === 0) {
            return <img src={emptyCard} alt="" />
        } else {
            return playPile.map(function (card, index) {
                if (card.flipped) {
                    return <img src={playPile[index].images.png} alt="" />
                } else {
                    return <img src={backOfCard} alt="" />
                }
            })
        }
    }

    const discardElements = discardPile => {
        if (discardPile.length === 0) {
            return <img src={emptyCard} alt="" />
        } else {
            return <img src={discardPile[discardPile.length - 1].images.png} alt="" />
        }
    }


    return (
        <div>

            <div className="top-wrapper">
                <p>Discard Piles</p>
                <div className="discard-piles">
                    <div className="discard-1">
                        {discardElements(discardPile1)}
                    </div>
                    <div className="discard-2">
                        {discardElements(discardPile2)}
                    </div>
                    <div className="discard-3">
                        {discardElements(discardPile3)}
                    </div>
                    <div className="discard-4">
                        {discardElements(discardPile4)}
                    </div>
                </div>

                <div className="draw-piles">
                    <p>Draw Piles  </p>
                    <div className="current-card">
                        <img src={currentCard[currentCard.length - 1].images.png} alt="" />
                    </div>
                    <div className="deck">
                        <img src={backOfCard} alt="" />
                    </div>
                </div>

            </div>

            <div className="play-piles">
                <p>Play Piles  </p>
                <div className="play-pile-1">
                    {playPileElements(playPile1)}
                </div>
                <div className="play-pile-2">
                    {playPileElements(playPile2)}
                </div>
                <div className="play-pile-3">
                    {playPileElements(playPile3)}
                </div>
                <div className="play-pile-4">
                    {playPileElements(playPile4)}
                </div>
                <div className="play-pile-5">
                    {playPileElements(playPile5)}
                </div>
                <div className="play-pile-6">
                    {playPileElements(playPile6)}
                </div>
                <div className="play-pile-7">
                    {playPileElements(playPile7)}
                </div>

            </div>

        </div>
    )
}

export default displayCards