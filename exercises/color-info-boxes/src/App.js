import React from "react";

function Box({backgroundColor, title, subtitle, width, height}) {
    return (
        <div style={{ backgroundColor:backgroundColor, width:width, height:height }}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p>INFO</p>
            <hr />
        </div>
    )
}

const boxesInfo = [
    {
        backgroundColor: "pink",
        width: "200px",
        height: "200px",
        title: "intro to react",
        subtitle: "react is hirable and rad"
    }, {
        backgroundColor: "lightblue",
        width: "200px",
        height: "200px",
        title: "intro to redux",
        subtitle: "redux is clunky and lame"
    }, {
        backgroundColor: "lightgreen",
        width: "200px",
        height: "200px",
        title: "intro to mongoose",
        subtitle: "databases are cool"
    },  {
        backgroundColor: "azure",
        width: "200px",
        height: "200px",
        title: "intro to react",
        subtitle: "react is hirable and rad"
    }, {
        backgroundColor: "slategrey",
        width: "200px",
        height: "200px",
        title: "intro to redux",
        subtitle: "redux is clunky and lame"
    }, {
        backgroundColor: "brown",
        width: "200px",
        height: "200px",
        title: "intro to mongoose",
        subtitle: "databases are cool"
    },  {
        backgroundColor: "orange",
        width: "200px",
        height: "200px",
        title: "intro to react",
        subtitle: "react is hirable and rad"
    }, {
        backgroundColor: "lightblue",
        width: "200px",
        height: "200px",
        title: "intro to redux",
        subtitle: "redux is clunky and lame"
    }, {
        backgroundColor: "lightgreen",
        width: "200px",
        height: "200px",
        title: "intro to mongoose",
        subtitle: "databases are cool"
    }
]


function App() {
    const boxComponents = boxesInfo.map(box => <Box {...box} />)
    return (
        <div>
          {boxComponents}
        </div>
    )
}


export default App