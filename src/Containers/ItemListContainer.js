import React, { useState } from "react";
import ItemCount from "../Components/ItemCount";
import maquinas from "../Data/MockData";
import ItemList from "../Components/ItemList";
import Loading from "../Components/Loading";


const ItemListContainer = ({ saludo }, props) => {
  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);

  function loadingChange(){
    setLoading(false);
  }
  setTimeout(loadingChange, 2000);

  const productPromise = (task) => {
    return new Promise((resolve, reject) => {
        resolve(task);
      });
  }

  if(loading){
    return(
      <Loading />
    )
  }else{
  productPromise(maquinas)
    .then(datos => {setProductList(datos)})

  return (
    <>
      <div className="ItemListContainer">{saludo}</div>
      <ItemCount stock="5" initial="1" />
      <div className="products">
        <ItemList items={productList} />
      </div>
    </>
  );}
};

export default ItemListContainer;