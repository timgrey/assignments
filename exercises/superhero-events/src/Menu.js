import React from 'react'

import { withToggler } from "./Toggler"

function Menu(props) {
    return (
        <div>
            {props.on ?
             <button onClick={props.toggle}>Close</button>
             :
             <button onClick={props.toggle}>Open</button>
            }
            {props.on &&
                <nav>
                    <h5>Choose a mood!</h5>
                    <a href='/'>Happy</a>
                    <a href='/'>Enviesous</a>v
                    <a href='/'>Sad</a>
                    <a href='/'>Pumped</a>
                    <a href='/'>Meh</a>
                </nav>
            }
        </div>
    )
}

export default withToggler(Menu)