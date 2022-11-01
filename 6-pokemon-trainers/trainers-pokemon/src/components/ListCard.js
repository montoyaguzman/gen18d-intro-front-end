function ListCard(props) { // props: { children: {lo que venga entrre las tags } }
    return(
        <>
            INICIO
            <div class="cards-container container-80">
                {props.children}
            </div>
            FIN
        </>
    );
}

export default ListCard;