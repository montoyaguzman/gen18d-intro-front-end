function ListCard(props) { // props: { children: {lo que venga entrre las tags } }
    return(
        <>
            INICIO
            <div className="cards-container container-80">
                {props.children}
            </div>
            FIN
        </>
    );
}

export default ListCard;