import React from 'react';
import Card from "../components/Card";
import ListCard from "../components/ListCard";
import SearchFilters from "../components/SearchFilters";

const trainersArray = [
    {
        name: 'Ash Ketchum',
        img: "/misty.jpeg",
        rank: 2,
        region: 'Kanto',
        tournaments: ['liga naranja', 'alola'],
        team: [
            { name: 'Pikachu', level: 100 },
            { name: 'Greninja', level: 50 },
        ],
        history: 'lalalalalalala',
    },
    {
        name: 'Misty',
        img: "/misty.jpeg",
        rank: 20,
        region: 'Kanto',
        tournaments: ['johto',],
        team: [
            { name: 'Staryu', level: 30 },
            { name: 'Gyarados', level: 60 },
        ],
        history: 'lalalalalalala',
    },
    {
        name: 'Alain',
        img: "/misty.jpeg",
        rank: 8,
        region: 'Kalos',
        tournaments: ['Kalos', 'Teselia'],
        team: [
            { name: 'Charizard', level: 70 },
            { name: 'Naganadel', level: 40 },
        ],
        history: 'lalalalalalala',
    },
    {
        name: 'Cynthia',
        img: "/misty.jpeg",
        rank: 8,
        region: 'Sinnoh',
        tournaments: ['Sinnoh', 'Kalos'],
        team: [
            { name: 'Machamp', level: 60 },
            { name: 'Garchomp', level: 70 },
        ],
        history: 'lalalalalalala',
    }
];

function SearchPage() {

    const [searchedData, setSearchedData] = React.useState({ name: 'lalala', isChampion: 'no' });

    

    return(
        <>
            <SearchFilters searchedData={searchedData} setSearchedData={setSearchedData}/>
            En el papa
            name: {searchedData.name}
            isChampion: {searchedData.isChampion}
            <ListCard>
                {trainersArray.map((trainerInArray, index) => <Card key={index} trainerComponent={trainerInArray}/> )}
            </ListCard>
        </>
    );
}

export default SearchPage;