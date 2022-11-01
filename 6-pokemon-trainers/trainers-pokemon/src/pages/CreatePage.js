import React from 'react';

function CreatePage() {

    const [ trainer, setTrainer ] = React.useState({
        trainerName: '',
        rankTrainer: 9999,
        region: '',
        // ligas: [],
        // pokemons: [],
    });

    const handleInput = (event) => {
        // console.log(event);
        // console.log(event.target); // componente html
        // console.log(event.target.id); // id componente
        // console.log(event.target.value); // value que envia el componente
        const id = event.target.id;
        const value = event.target.value;

        let newTrainer = { ...trainer };

        // if (id === 'trainerName') {
        //     // newTrainer.name = value
        //     newTrainer['name'] = value
        // }
        // if (id === 'rankTrainer') {
        //     // newTrainer.rank = value
        //     newTrainer['rank'] = value
        // }
        newTrainer[id] = value;

        setTrainer(newTrainer);
        console.log('trainer', trainer);

    }

    const handleSelect = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        console.log(id, value);
        let newTrainer = { ...trainer };
        newTrainer[id] = value;
        console.log('newTrainer', newTrainer)
        setTrainer(newTrainer);
        console.log('trainer', trainer);
    }

    return(
        <>
            <form>

                <span>Entrenador </span>
                <br/>
                <label for="fname">Nombre:</label>
                <input type="text" id="trainerName" name="trainerName" onChange={handleInput}/>
                <br/>
                <br/>
                <label for="rankTrainer">Rango:</label>
                <input type="text" id="rankTrainer" name="rankTrainer" onChange={handleInput}/>

                <label for="region">Region:</label>
                <select name="region" id="region" onChange={handleSelect}>
                    <option value="kanto">kanto</option>
                    <option value="alola">alola</option>
                    <option value="johto">johto</option>
                </select>

                {/* <input type="checkbox" id="liga1" name="liga1" value="liga1"/>
                <label for="liga1">liga 1</label><br/>
                <input type="checkbox" id="liga2" name="liga2" value="liga2"/>
                <label for="liga2">liga 2</label><br/>

                <span>Equipo </span>
                <br/>
                <label for="pokemonName">Pokemon:</label>
                <input type="text" id="pokemonName" name="pokemonName" onChange={handleInput}/>
                <br/>
                <br/>
                <label for="pokemonLevel">Nivel:</label>
                <input type="text" id="pokemonLevel" name="pokemonLevel" onChange={handleInput}/>
                <br/>
                <br/>
                <br/> */}

            </form>
        </>
    );
}

export default CreatePage;