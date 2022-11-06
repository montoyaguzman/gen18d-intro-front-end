function Card({ trainerComponent }) { // props: { trainerComponent: {}, children: {lo que venga entrre las tags } }

    const imgStyles = {
        width: '100%',
        height: '100%',
    }

    return(
        <>
        <div className="card">
            <div className="image-container">
                <img src={trainerComponent.img} alt="imagen del entrendor" style={imgStyles}/>
            </div>
            <div className="card-content">
                <div className="stats">
                    <p className="region-tag">{trainerComponent.name}</p>
                    <div className="rank">
                        <p className="rank-label">rango</p>
                        <p className="rank-tag">{trainerComponent.rank}</p>
                    </div>
                </div>
                <h2 className="trainer-name">{trainerComponent.region}</h2>


                

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