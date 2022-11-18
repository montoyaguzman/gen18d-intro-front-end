import Character from "./Character";

import React from 'react'
import Loading from "../../styled-components/Loading";
import { useFetch } from "../../hooks/useFecth";

const ShowCharacter = ({name}) => {
    const [characters, loading] = useFetch(name);

    if (loading) {
        return <Loading/>
    }
  return (
    <div className="row mt-2">
        {characters.map((item) => (
            <Character key={item.id} character={item} />
        ))}
    </div>
  )
}

export default ShowCharacter