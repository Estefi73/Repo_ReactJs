import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";
import Loader from "../Loader/Loader";
import "./OrderConfirm.css";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order);
    });
  }, [id]);

  return (
    <div className="order">
      <h1>¡Gracias por tu compra! </h1>
      {orderData !== null ? (
        <div orderList>
          <p>
            Tus productos comprados:
            {orderData.items.map((item) => {
              return (
                <ul>
                  <li>
                    {item.title} - {item.count} unidades
                  </li>
                </ul>
              );
            })}
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default OrderConfirm;
