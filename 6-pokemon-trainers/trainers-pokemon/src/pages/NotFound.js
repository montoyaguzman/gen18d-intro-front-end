import { Link } from "react-router-dom";
import App from "../App";

function NotFound() {
    return(
        <>
            <div className="container-80">
                <div className="image-container-404">
                    <img src="/image-404.png" alt="Error - Página no encontrada"/>
                </div>
                <p className="error-pageNotFound">
                    <span className="clr-dark-pink">Ooopsss! </span>
                    Un Snorlax salvaje ha bloqueado tu camino.
                </p>
                <Link className="btn-default" to="/">regresa al inicio</Link>
            </div>
        </>
    );
}

export default NotFound;