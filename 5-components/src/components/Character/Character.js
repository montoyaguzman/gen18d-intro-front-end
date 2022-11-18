import React from "react";

function Character() {
    const character = {
        display: "block",
		border: "1px solid salmon",
        background: "black",
		height: "340px",
		padding: "10px",
		width: "150px",
        color: "white"
    }
    const character__header = {
        padding: "10px"
    }
    const character__footer = {
        color: "blue"
    }

    return(
        <div style={character}>
            <div style={character__header}>
                <h1>Character</h1>
            </div>
            <div style={character__footer}>
                <h1>footer</h1>
            </div>
        </div>
    )
}

export default Character;