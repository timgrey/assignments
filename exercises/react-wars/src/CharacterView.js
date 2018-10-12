import React from 'react';

import { Link, Switch, Route } from "react-router-dom";
import DetailPage from './DetailPage';

function CharacterView({ characters }) {
    const linkElements = characters.map((character, i) => (
        <Link key={i} to={`/characters/${i}`}>{character.name}</Link>
    ))
    return (
        <div>
            <nav>
                {linkElements}
            </nav>
            <Switch>
                <Route
                    path="/characters/:index"
                    render={({ match: { params: { index } } }) => (
                        <DetailPage {...characters[index]} />
                    )} />
            </Switch>
        </div>
    )
}

export default CharacterView
