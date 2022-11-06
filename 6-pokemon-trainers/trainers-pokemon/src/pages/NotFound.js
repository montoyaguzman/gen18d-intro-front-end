function NotFound() {
    return(
        <>
            <div class="container-80">
                <div class="image-container-404">
                    <img src="/image-404.png" alt="Error - Página no encontrada"/>
                </div>
                <p class="error-pageNotFound">
                    <span class="clr-dark-pink">Ooopsss! </span>
                    Un Snorlax salvaje ha bloqueado tu camino.
                </p>
                <a href="#" class="btn-default">regresa al inicio</a>
            </div>
        </>
    );
}

export default NotFound;