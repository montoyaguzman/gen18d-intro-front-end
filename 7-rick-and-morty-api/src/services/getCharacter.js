

const getCharacter = async (name) =>{
    setLoading(true)
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character/?name=rick');

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
        setCharacter([...data.results]);
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