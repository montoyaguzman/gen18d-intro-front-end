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
                <div id="searchbar-container">
                    <input type="text" id="searchedTrainer" name="searchedTrainer" placeholder="nombre entrenador..."/>
                    <svg id="searchbar-svg" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.6094 24.6094L31.1719 31.1719" stroke="#9E9E9E" strokeWidth="2.8125" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.4062 26.7969C22.1448 26.7969 26.7969 22.1448 26.7969 16.4062C26.7969 10.6677 22.1448 6.01562 16.4062 6.01562C10.6677 6.01562 6.01562 10.6677 6.01562 16.4062C6.01562 22.1448 10.6677 26.7969 16.4062 26.7969Z" stroke="#9E9E9E" strokeWidth="2.8125" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="filters-container">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 6.25H8.75M26.25 6.25H13.75M3.75 15H18.75M26.25 15H23.75M3.75 23.75H6.25M26.25 23.75H11.25" stroke="#9E9E9E" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M11.25 8.75C12.6307 8.75 13.75 7.63071 13.75 6.25C13.75 4.86929 12.6307 3.75 11.25 3.75C9.86929 3.75 8.75 4.86929 8.75 6.25C8.75 7.63071 9.86929 8.75 11.25 8.75Z" stroke="#9E9E9E" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M21.25 17.5C22.6307 17.5 23.75 16.3807 23.75 15C23.75 13.6193 22.6307 12.5 21.25 12.5C19.8693 12.5 18.75 13.6193 18.75 15C18.75 16.3807 19.8693 17.5 21.25 17.5Z" stroke="#9E9E9E" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M8.75 26.25C10.1307 26.25 11.25 25.1307 11.25 23.75C11.25 22.3693 10.1307 21.25 8.75 21.25C7.36929 21.25 6.25 22.3693 6.25 23.75C6.25 25.1307 7.36929 26.25 8.75 26.25Z" stroke="#9E9E9E" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>

                    <p className="form-label">Ha sido campeon?:</p>
                    <input type="radio" id="isChampion1" name="isChampion" value="Si"/>
                    <label htmlFor="isChampion1">Si</label>
                    <br/>
                    <input type="radio" id="isChampion2" name="isChampion" value="No"/>
                    <label htmlFor="isChampion2">No</label>
                    <br/>

                    <input type="submit" value="Buscar" />
                </div>
            </form>

        </>

        
    );
}
  
export default SearchFilters;
  