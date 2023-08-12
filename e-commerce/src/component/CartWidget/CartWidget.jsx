import carrito from './assents/carrito.png';
import { cartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const contextCart = useContext(cartContext);

    return (
        <div>
            <Link style={{textDecoration: 'none', color: 'black'}} to='/cart'>
                <img style={{ width: 40 }} src={carrito} alt="" />
                <span style={{ marginRight: 5 }}>{contextCart.countCart()}</span>
            </Link>

        </div>
    );
}

export default CartWidget;