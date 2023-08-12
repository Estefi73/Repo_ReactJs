import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { id, title, image, price, stock } = props;

  const stockStyle = `card ${stock === 0 ? `card-disable` : ``}`;

  return (
    <div className={stockStyle}>
      <div className="card-img">
        <img src={image} alt="" />
      </div>

      <div className="card-body">
        <h1>{title}</h1>
        <h2>Precio: ${price}</h2>
        <small>Stock: {stock}</small>
        <div>
          <Link to={`/product/${id}`}>
            <button>Ver Producto</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
