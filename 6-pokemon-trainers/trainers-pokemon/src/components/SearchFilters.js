function SearchFilters() {
    return (
        <div>
            <form>
                <input type="text" id="searchedTrainer" name="searchedTrainer" placeholder="nombre entrenador..."/>
                <label for="searchedTrainer"></label>

                <p>Ha sido campeon?:</p>
                <input type="radio" id="isChampion1" name="isChampion1" value="Si"/>
                <label for="isChampion1">Si</label>
                <br/>
                <input type="radio" id="isChampion2" name="isChampion2" value="No"/>
                <label for="isChampion2">No</label>
                <br/>

            </form>
        </div>
    );
}
  
export default SearchFilters;
  