import React from "react";

function CuadroHijo(props) {
    const character = {
		border: "15px solid salmon",
        background: "cyan",
		height: "100px",
		width: "100px",
        color: "black"
    }

    return(
        <div style={character}>
            {props.info}
        </div>
    )
}

export default CuadroHijo;