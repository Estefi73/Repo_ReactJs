import { useState } from "react";
import './ItemCount.css';

const ItemCount = (props) => {
  const [clickCount, setClickCount] = useState(1);

  const handleCountAdd = () => {
    if (clickCount === props.stock) {
    } else {
      setClickCount(clickCount + 1);
    }
  }

  const handleCountSub = () => {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }

  return (
    <>
      <div className="count">
        <button className="item-count-button" onClick={handleCountSub}> - </button>
        <h2 className="count-name">{clickCount}</h2>
        <button className="item-count-button" onClick={handleCountAdd}> + </button>
      </div>
      <div className="button-añadir">
        <button onClick={() => props.onConfirm(clickCount)}> <h4>Añadir al carrito</h4> </button>
      </div >
    </>
  );
}

export default ItemCount;