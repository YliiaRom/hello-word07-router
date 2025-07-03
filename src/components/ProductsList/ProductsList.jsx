import { Link, useNavigate } from "react-router";
import Product from "../Product/Products";
import styles from "./ProductsList.module.css";
import productsList from "../../helpers/productsList.js";
// const products = [
//   { id: 1, title: "Смартфон", model: "Samsung Galaxy A54" },
//   { id: 2, title: "Ноутбук", model: "Apple MacBook Air M2" },
//   { id: 3, title: "Планшет", model: "Xiaomi Pad 6" },
//   { id: 4, title: "Телевізор", model: "LG OLED55C3" },
//   { id: 5, title: "Навушники", model: "Sony WH-1000XM5" },
// ];
function ProductsList() {
  const navigate = useNavigate();
  function info(prod) {
    navigate(`/products/${prod.id}`);
  }

  return (
    <>
      <div className="productsListBox">
        <div className={styles.list}>
          {productsList.map((prod) => (
            <div key={prod.id} onClick={() => info(prod)}>
              <Product {...prod} />
            </div>
          ))}
          {/* </div>
          {products.map((prod) => (
            <Link key={prod.id} to=`/products/:${prod.id}`>
              <Product id={prod.id} title={prod.title} model={prod.model} />
            </Link>
          ))}
        </div> */}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
