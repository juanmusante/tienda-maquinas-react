import 'bootstrap/dist/css/bootstrap.min.css';
import IconoCarrito from './IconoCarrito.js';

const CartWidget = () => {
    return (
        <button type="button" class="btn btn-primary">
            <IconoCarrito />
            <span class="badge  badge-light">7</span>
        </button>
    );
}

export default CartWidget;