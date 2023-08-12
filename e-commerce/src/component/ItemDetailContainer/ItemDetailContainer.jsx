import { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";
import { getProductData } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { addToCard } = useContext(cartContext);

  function handleOnAdd(count) {
    addToCard(product, count);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `Se agregaron ${count} productos a su carrito.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  useEffect(() => {
    async function requestProducts() {
      let responde = await getProductData(id);
      setProduct(responde);
    }

    requestProducts();
  }, [id]);

  return (
    <>
      {product.length === 0 ? (
        <Loader />
      ) : (
        <div class="card-detail">
          <div class="card-body-detail">
            <h1>{product.title}</h1>
            <img
              class="card-img-top"
              src={product.image}
              alt="Card image cap"
            ></img>
            <h1>Precio: ${product.price}</h1>
            <p>{product.description}</p>
            <ItemCount onConfirm={handleOnAdd} />
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
