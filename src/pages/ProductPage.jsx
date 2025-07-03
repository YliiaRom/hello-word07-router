import { useParams } from "react-router";
import Product from "../components/Product/Products";

function ProductPage() {
  const { id } = useParams();
  return (
    <>
      <div>
        <Product id={id} />
      </div>
    </>
  );
}
export default ProductPage;
