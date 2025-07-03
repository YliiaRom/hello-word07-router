import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import apiRoutes from "../../api/apiRoutes.js";
import frontRoutes from "../../components/routes/frontRoutes.js";
import styles from "./ProductsBk.module.css";

function ProductBkDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(apiRoutes.getProductById(id));
      const data = await res.json();

      if (data) setProduct(data);
      else navigate(frontRoutes.navigate.products.list);
    }
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    await fetch(apiRoutes.getDeleteProductLink(id), {
      method: "DELETE",
    });
    navigate(frontRoutes.navigate.products.list);
  };
  if (!product) return <p>Завантаження...</p>;
  return (
    <div className={styles.detailCard}>
      <h2>{product.name}</h2>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "200px" }}
      />
      <p>Ціна: {product.price} грн</p>
      <div>
        <button
          onClick={() =>
            navigate(frontRoutes.navigate.products.getEditLink(id))
          }
        >
          <span> Редагувати</span>
        </button>
        <button onClick={handleDelete}>
          <span>Видалити</span>
        </button>
      </div>
    </div>
  );
}
export default ProductBkDetails;
