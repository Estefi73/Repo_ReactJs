import React from "react";
import { useContext } from "react";
import "./CartContainer.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

function CartContainer() {
  const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext);

  return (
    <div className="cartContainer">
      <h1>Carrito de Compras</h1>
      {cart.map((item) => (
        <table className="tableCart" key={item}>
          <tr>
            <td>
              <img className="imgCart" src={item.image}></img>
            </td>
            <td>
              <p>${item.price}</p>
            </td>
            <td>
              <p>Cantidad: {item.count}</p>
            </td>
            <td>
              <button
                className="buttonCart"
                onClick={() => removeItem(item.id)}
              >
                Eliminiar
              </button>
            </td>
          </tr>
        </table>
      ))}

      <div>
        <div className="totalCart">
          <p>TOTAL COMPRA: ${getTotalPriceInCart()}</p>
          <Link to="/checkout"><button>Comprar</button></Link>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
