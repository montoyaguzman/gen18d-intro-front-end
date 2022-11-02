import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


export const useFetch = (name) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      getCharacter(name);
    }, [name]);

    const getCharacter = async (name) =>{
        setLoading(true)
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    
            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `${name} no exist`,
                    icon: "error",
                });
            }
            const data = await res.json();
            console.log([...data.results]);
            setCharacters([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Server Error`,
                icon: "error",
            });
        } finally {
            setLoading(false)
        }
    }
    
    return [characters, loading]
};
