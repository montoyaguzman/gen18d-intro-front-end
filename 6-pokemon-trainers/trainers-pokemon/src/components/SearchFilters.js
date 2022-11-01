function SearchFilters({searchedData, setSearchedData}) {


    const handleSubmitForm = (event) => {
        event.preventDefault();
        
        const formElement = event.target;
        const formData = new FormData(formElement);
        
        const nameValue = formData.get('searchedTrainer');
        const isChampionValue = formData.get('isChampion');
        
        const copyData = { ...searchedData };
        
        copyData.name = nameValue;
        copyData.isChampion = isChampionValue;
        
        setSearchedData(copyData);
    }

    return (
        <>
            <form onSubmit={handleSubmitForm}>
                <input type="text" id="searchedTrainer" name="searchedTrainer" placeholder="nombre entrenador..."/>
                <label for="searchedTrainer"></label>

                <p>Ha sido campeon?:</p>
                <input type="radio" id="isChampion1" name="isChampion" value="Si"/>
                <label for="isChampion1">Si</label>
                <br/>
                <input type="radio" id="isChampion2" name="isChampion" value="No"/>
                <label for="isChampion2">No</label>
                <br/>

                <input type="submit" value="Buscar" />

            </form>

        </>

        
    );
}
  
export default SearchFilters;
  