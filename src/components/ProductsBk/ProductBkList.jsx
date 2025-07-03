import { useEffect, useState } from "react";
import { Link } from "react-router";
import apiRoutes from "../../api/apiRoutes";
import frontRoutes from "../../components/routes/frontRoutes.js";

import ProductBk from "./ProductBk.jsx";
import styles from "./ProductsBk.module.css";

function ProductsBkList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(apiRoutes.productsList);
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  if (isLoading) return <div>Завантаження ... </div>;
  if (error) return <div>Помилка завантаження </div>;
  // console.log(products);
  return (
    <div className="productsListBox">
      <div className="topPanel">
        <Link to={frontRoutes.navigate.products.add} className="newProduct">
          ➕ Новий продукт
        </Link>
      </div>

      <ul className={styles.list}>
        {products.map((prod) => (
          <li key={prod.id}>
            <ProductBk {...prod} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsBkList;
