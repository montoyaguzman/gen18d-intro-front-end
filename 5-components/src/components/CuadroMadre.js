import React from "react";
import CuadroHijo from "./CuadroHijo"

function CuadroMadre() {
    const character = {
        margin: "50px",
        background: "black",
		height: "340px",
		width: "340px",
        color:"white"
    }


    return(
        <div style={character}>
            <CuadroHijo info="Este es un ejemplo de props numero 2"/>
        </div>
    )
}

export default CuadroMadre;