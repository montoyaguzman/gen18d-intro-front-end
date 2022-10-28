function SearchFilters() {
    return (
        <div>
            <form>
                <input type="text" id="trainerName" name="trainerName" placeholder="nombre entrenador..."/>
                <label for="trainerName"></label>

                <p>Ha sido campeon?:</p>
                <input type="radio" id="isChampion1" name="isChampion" value="Si"/>
                <label for="isChampion1">Si</label>
                <br/>
                <input type="radio" id="isChampion2" name="isChampion" value="No"/>
                <label for="isChampion2">No</label>
                <br/>

            </form>
        </div>
    );
}
  
export default SearchFilters;
  