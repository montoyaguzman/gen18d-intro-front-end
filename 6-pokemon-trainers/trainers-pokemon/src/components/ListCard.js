function ListCard(props) { // props: { children: {lo que venga entrre las tags } }
    return(
        <>
            <div className="cards-container container-80">
                {props.children}
            </div>
        </>
    );
}

export default ListCard;