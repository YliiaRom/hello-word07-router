import { useParams } from "react-router";
import Product from "../components/Product/Products";

function Products() {
  const { category, id } = useParams();
  return (
    <>
      <div>
        <h2>Products id = {id}</h2>
        <p>category = {category}</p>
        <Product />
      </div>
    </>
  );
}
export default Products;
