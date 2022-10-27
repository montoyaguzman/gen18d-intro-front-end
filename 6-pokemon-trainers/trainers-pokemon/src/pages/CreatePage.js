import Card from "../components/Card";
import SearchFilters from "../components/SearchFilters";

function CreatePage() {
    return(
        <>
            <SearchFilters></SearchFilters>
            <Card/>
            <Card/>
            <Card/>
        </>
    );
}

export default CreatePage;