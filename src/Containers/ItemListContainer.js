import React, { useState } from "react";
import ItemCount from "../Components/ItemCount";
import maquinas from "../Data/MockData";
import ItemList from "../Components/ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ saludo }, props) => {
  const [productList, setProductList] = useState([]);

  const productPromise = (time, task) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(task);
      }, time);
    });
  }

  productPromise(2000, maquinas)
    .then(datos => {setProductList(datos)})

  return (
    <>
      <div className="ItemListContainer">{saludo}</div>
      <ItemCount stock="5" initial="1" />
      <div className="products">
        <ItemList items={productList} />
      </div>
    </>
  );
};

export default ItemListContainer;