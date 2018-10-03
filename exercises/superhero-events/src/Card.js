import React from 'react'

import { withToggler } from "./Toggler"

function Card(props) {
    return (
        <div>
            <h3>title</h3>
            <h5>subtitle</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, expedita. Quibusdam laudantium, hic ut ullam aliquid voluptate tempore reprehenderit at facilis maxime tempora sint quam voluptatum praesentium repellendus, earum modi.</p>
            {props.on ? <button onClick={props.toggle}>Star</button>
                :
                <button onClick={props.toggle}>Un Star</button>}
        </div>
    )
}

export default withToggler(Card)