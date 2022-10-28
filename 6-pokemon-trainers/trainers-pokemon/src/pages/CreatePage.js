function CreatePage() {

    const handleInput = (event) => {
        console.log(event.target.id);
        console.log(event.target.value);
    }

    return(
        <>
            <form>

                <label for="cars">Choose a car:</label>
                <select name="cars" id="cars">
                    <option value="volvo">liga 1</option>
                    <option value="saab">liga 2</option>
                </select>

                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> I have a bike</label><br/>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                <label for="vehicle2"> I have a car</label><br/>

                <span>Equipo: </span>
                <label for="fname">First name:</label>
                <input type="text" id="patitoInput" name="patitoInput" onChange={handleInput}/>
                <br/>
                <br/>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/>
                <br/>
                <br/>
                <br/>

            </form>
        </>
    );
}

export default CreatePage;