function ListCard(props) { // props: { children: {lo que venga entrre las tags } }
    return(
        <>
            INICIO
            {props.children}
            FIN
        </>
    );
}

export default ListCard;