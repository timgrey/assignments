import React from "react"

 // { playPile1 }, { playPile2 }, { playPile3 }, { playPile4 }, { playPile5 }, { playPile6 }, { playPile7 },
    // { discardPile1 }, { discardPile2 }, { discardPile3 }, { discardPile4 },
    // { currentCard }, 

function displayCards( { deck_id } ) {
    return (
        <div>
        <p>test</p>
            {/* <div className="top-wrapper">

                <div className="discard-piles">
                    <div className="discard-1">
                        <img src={discardPile1.length > 0 ? discardPile1[discardPile1.length - 1].images.png : "../images/empty.png"} alt="" />
                    </div>
                    <div className="discard-2">
                        <img src={discardPile1.length > 0 ? discardPile2[discardPile2.length - 1].images.png : "../images/empty.png"} alt="" />
                    </div>
                    <div className="discard-3">
                        <img src={discardPile1.length > 0 ? discardPile3[discardPile3.length - 1].images.png : "../images/empty.png"} alt="" />
                    </div>
                    <div className="discard-4">
                        <img src={discardPile1.length > 0 ? discardPile4[discardPile4.length - 1].images.png : "../images/empty.png"} alt="" />
                    </div>
                </div>

                <div className="draw-piles">
                    <div className="current-card">
                        <img src={currentCard[currentCard.length - 1].images.png} alt="" />
                    </div>
                    <div className="deck">
                        <img src={deck[deck.length - 1].images.png} alt="" />
                    </div>
                </div>

            </div>

            <div className="bottom-wrapper">

                <div className="play-pile-1">
                    <img src={playPile1[playPile1.length - 1].images.png} alt="" />
                </div>
                <div className="play-pile-2">
                    <img src={playPile2[playPile2.length - 1].images.png} alt="" />
                </div>
                <div className="play-pile-3">
                    <img src={playPile3[playPile3.length - 1].images.png} alt="" />
                </div>
                <div className="play-pile-4">
                    <img src={playPile4[playPile4.length - 1].images.png} alt="" />
                </div>
                <div className="play-pile-5">
                    <img src={playPile5[playPile5.length - 1].images.png} alt="" />
                </div>
                <div className="play-pile-6">
                    <img src={playPile6[playPile6.length - 1].images.png} alt="" />
                </div>
                <div className="play-pile-7">
                    <img src={playPile7[playPile7.length - 1].images.png} alt="" />
                </div>

            </div> */}

        </div>
    )
}

export default displayCards