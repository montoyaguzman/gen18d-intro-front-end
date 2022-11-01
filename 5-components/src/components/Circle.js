import React from "react";
import styles from "../utilities/styles/styles-circle.css"
import types from "../utilities/types/types-circle.css"


function Circle() {
    return(
        <div className={styles['.div']}>
            <p className={types.big}> grande </p>
            <p className={types.small}> pequeño</p>
        </div>
    )
}

export default Circle;