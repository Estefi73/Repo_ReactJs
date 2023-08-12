import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList(props) {
  const {products} = props;

  return (
    <div className="flex-container">
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList;
