import React from 'react';
import App from '../App';
import { Table } from '../components/Table/Table';

function CreatePage() {

    const [ trainer, setTrainer ] = React.useState({
        trainerName: '',
        rankTrainer: 9999,
        region: '',
        // ligas: [],
        // pokemons: [],
    });

    const handleChangeForm = (event) => {
        // console.log(event);
        // console.log(event.target); // componente html
        // console.log(event.target.id); // id componente
        // console.log(event.target.value); // value que envia el componente
        const id = event.target.id;
        const value = event.target.value;

        console.log(id, value);

        let newTrainer = { ...trainer };
        newTrainer[id] = value;

        
        console.log(newTrainer);
        // if (id === 'trainerName') {
        //     // newTrainer.name = value
        //     newTrainer['name'] = value
        // }
        // if (id === 'rankTrainer') {
        //     // newTrainer.rank = value
        //     newTrainer['rank'] = value
        // }
        

        setTrainer(newTrainer);
        console.log('trainer', trainer);

    }

    return(
        <>
            <App/>
            <div className="main-container">
                <h1 className="form-title">Registro</h1>
                <form className="add-trainer-form">

                    <div className="container-trainer">
                        <div className="form-group">
                            <p className="form-label">Datos del entrenador</p>
                            <label htmlFor="fname">Nombre:</label>
                            <input type="text" id="trainerName" name="trainerName" onChange={handleChangeForm}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rankTrainer">Rango:</label>
                            <input type="text" id="rankTrainer" name="rankTrainer" onChange={handleChangeForm}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="region">De que región es?</label>
                            <select name="region" id="region" onChange={handleChangeForm}>
                                <option value="kanto">kanto</option>
                                <option value="alola">alola</option>
                                <option value="johto">johto</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <p className="form-label">Indicar que ligas ha ganado: </p>
                            <div className="options-container">
                                <label htmlFor="orre">
                                    <input type="checkbox" name="tournaments"  id="tournaments-n"/> 
                                    Orre
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="container-pokemons">

                        <div className="form-group">
                            <p className="form-label">Equipo</p>
                            <label htmlFor="pokemon-name">Nombre del Pokémon</label>
                            <input type="text" name="pokemon-name" id="pokemon-name"/>
                            <label htmlFor="pokemon-level">Nivel</label>
                            <input type="text" name="pokemon-level" id="pokemon-level"/>
                        </div>
                        <button className="btn-add-new">
                            <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1006 2.5C24.7295 2.5 30.9135 8.09625 30.9135 15C30.9135 21.9037 24.7295 27.5 17.1006 27.5C9.47176 27.5 3.28772 21.9037 3.28772 15C3.28772 8.09625 9.47176 2.5 17.1006 2.5ZM17.1006 4.375C13.9867 4.375 11.0004 5.49442 8.79851 7.48699C6.59665 9.47956 5.35966 12.1821 5.35966 15C5.35966 17.8179 6.59665 20.5204 8.79851 22.513C11.0004 24.5056 13.9867 25.625 17.1006 25.625C20.2145 25.625 23.2009 24.5056 25.4028 22.513C27.6046 20.5204 28.8416 17.8179 28.8416 15C28.8416 12.1821 27.6046 9.47956 25.4028 7.48699C23.2009 5.49442 20.2145 4.375 17.1006 4.375V4.375ZM17.1006 8.75C17.3754 8.75 17.6389 8.84877 17.8332 9.02459C18.0275 9.2004 18.1366 9.43886 18.1366 9.6875V14.0625H22.9711C23.2459 14.0625 23.5094 14.1613 23.7037 14.3371C23.8979 14.5129 24.0071 14.7514 24.0071 15C24.0071 15.2486 23.8979 15.4871 23.7037 15.6629C23.5094 15.8387 23.2459 15.9375 22.9711 15.9375H18.1366V20.3125C18.1366 20.5611 18.0275 20.7996 17.8332 20.9754C17.6389 21.1512 17.3754 21.25 17.1006 21.25C16.8259 21.25 16.5624 21.1512 16.3681 20.9754C16.1738 20.7996 16.0647 20.5611 16.0647 20.3125V15.9375H11.2301C10.9554 15.9375 10.6919 15.8387 10.4976 15.6629C10.3033 15.4871 10.1942 15.2486 10.1942 15C10.1942 14.7514 10.3033 14.5129 10.4976 14.3371C10.6919 14.1613 10.9554 14.0625 11.2301 14.0625H16.0647V9.6875C16.0647 9.43886 16.1738 9.2004 16.3681 9.02459C16.5624 8.84877 16.8259 8.75 17.1006 8.75V8.75Z" fill="#F5B43E"/>
                            </svg>
                            Agregar pokémon al equipo
                        </button>

                    </div>

                    <div className="container-table">
                        <Table/>
                    </div>

                </form>
            </div>
        </>
    );
}

export default CreatePage;