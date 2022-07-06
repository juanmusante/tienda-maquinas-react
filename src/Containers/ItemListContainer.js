
import React from "react";
import ItemCount from "../Components/ItemCount";

const ItemListContainer = ({saludo}) => {

    return (
        <>
        <div className="ItemListContainer">{saludo}</div>
        <ItemCount stock="5" initial="1" />
        </>
    );
}

export default ItemListContainer;