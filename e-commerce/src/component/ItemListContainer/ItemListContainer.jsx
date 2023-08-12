import getData, { getCategoryData } from "../../services/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    async function requestProducts() {
      let responde = categoryId
        ? await getCategoryData(categoryId)
        : await getData();
      setProducts(responde);
      setLoading(false);
    }
    requestProducts();
  }, [categoryId]);

  if (loading) {
    return <Loader />;
  } else {
    return products.length === 0 ? (
      <p>No hay productos disponibles para esa consulta.</p>
    ) : (
      <ItemList products={products} /> 
    );
  }
};

export default ItemListContainer;
