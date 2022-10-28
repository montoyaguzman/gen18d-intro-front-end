function Card() {
    return(
        <>
        <div className="card">
            <div className="image-container"></div>
            <div className="card-content">
                <div className="stats">
                    <p className="region-tag">kanto</p>
                    <div className="rank">
                        <p className="rank-label">rango</p>
                        <p className="rank-tag">10,704</p>
                    </div>
                </div>
                <h2 className="trainer-name">Ash Ketchum</h2>
                <div className="team">
                    <h3 className="team-label">Equipo</h3>
                    <div className="team-members">
                        <div className="pokemon-tag">
                            <p className="pokemon-tag--name">Charmander</p>
                            <p className="pokemon-tag--level">Nivel: 24</p>
                        </div>
                        <div className="pokemon-tag">
                            <p className="pokemon-tag--name">Bulbasaur</p>
                            <p className="pokemon-tag--level">Nivel: 31</p>
                        </div>
                        <div className="pokemon-tag">
                            <p className="pokemon-tag--name">Pikachu</p>
                            <p className="pokemon-tag--level">Nivel: 26</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="more-info">más información</a>
            </div>
        </div>
        </>
    );
}

export default Card;