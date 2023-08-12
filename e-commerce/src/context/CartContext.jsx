import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCard(product, count) {
    const newCart = cart.map((item) => item);
    const newItemInCart = { count, ...product };
    newCart.push(newItemInCart);
    setCart(newCart);
  }

  function countCart() {
    let totalCount = 0;
    cart.forEach((item) => {
      totalCount += item.count;
    });
    return totalCount;
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function getTotalPriceInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.price;
    });
    return total;
  }

  return (
    <cartContext.Provider value={{ cart, addToCard, countCart, removeItem, getTotalPriceInCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartProvider };
