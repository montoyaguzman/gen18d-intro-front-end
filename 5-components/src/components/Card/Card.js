import React from "react";
import './style.css'

function Card() {
    return(
        <div className="card">
            <div className="card--header"><h1>Titulo</h1></div>
            <div className="card--body"><p>Este es el contenido de la tarjeta</p></div>
            <div className="card--footer"><p>Pie de tarjeta</p></div>
        </div>
    )
}

export default Card;