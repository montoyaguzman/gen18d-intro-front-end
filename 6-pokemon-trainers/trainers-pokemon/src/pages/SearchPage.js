import React, { useEffect } from 'react';
import Card from "../components/Card";
import ListCard from "../components/ListCard";
import SearchFilters from "../components/SearchFilters";

const URL = 'http://localhost:4000';

function SearchPage() {

    const [searchedData, setSearchedData] = React.useState({ name: 'lalala', isChampion: 'no' });
    const [trainersArray, setTrainersArray] = React.useState([]);

    React.useEffect(() => {
        console.log('en el use effect')
        getTrainers();
    }, []);

    const getTrainers = async () => {
        const response = await fetch(`${URL}/trainers`);
        const trainers = await response.json();
        console.log(trainers)
        setTrainersArray(trainers)
    }

    // if (!trainersArray?.length) {
    //     return <div>No hay info</div>
    // }

    return(
        <>
            <SearchFilters searchedData={searchedData} setSearchedData={setSearchedData}/>
            En el papa
            name: {searchedData.name}
            isChampion: {searchedData.isChampion}

            {
                trainersArray?.length 
                    && <ListCard>
                        {trainersArray.map((trainerInArray, index) => <Card key={index} trainerComponent={trainerInArray}/> )}
                        </ListCard> 
            }
             <div>No hay info</div>
        </>
    );
}

export default SearchPage;