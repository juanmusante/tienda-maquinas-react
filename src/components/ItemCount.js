import React, {useState} from 'react'

export function ItemCount({stock, initial}) {
    const [number, setNumber] = useState (parseInt(initial));
    
    const incraese = () => {
        while (stock > number)
        if (stock > 0){
            setNumber(number + 1)
            break;
        }
    }
    const decrease = () => {
        while (number <= stock && number > 0)
        if (stock > 0){
            setNumber(number - 1)
            break;
        }
    }
    const onAdd = () => {
        stock = (stock - number);
        if(number === 0){
            alert('No hay cantidad seleccionada')
        } else {
            alert(`Se agregaron al carrito ${number} unidades`);
        }
        console.log(stock)
    }

    return (
        <nav className='counter'>
            <div className='view'>
                <button className='button' onClick={incraese}> + </button><p className='text'>{number}</p><button className='button' onClick={decrease}> - </button>
            </div>
            <button className='buttonShop' onClick={onAdd}>Agregar Al Carrito</button>
        </nav>
    );
}

export default ItemCount;