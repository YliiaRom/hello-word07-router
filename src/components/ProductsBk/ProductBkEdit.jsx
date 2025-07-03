import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import apiRoutes from "../../api/apiRoutes.js";
import frontRoutes from "../../components/routes/frontRoutes.js";
import styles from "./ProductsBk.module.css";
function ProductForm() {
  const [product, setProduct] = useState({ name: "", price: "", imageUrl: "" });
  console.log(`-----ProductForm`);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  useEffect(() => {
    if (id) {
      async function fetchData() {
        const res = await fetch(apiRoutes.getProductById(id));
        const data = await res.json();
        if (data) setProduct(data);
        else navigate(frontRoutes.navigate.products.list);
      }
      fetchData();
    }
  }, [id]);
  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? apiRoutes.getUpdateProductLink(id)
      : apiRoutes.addProduct;
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    navigate("/products");
  };
  const isLoading = id && !product.id;
  return isLoading ? (
    <div>Завантаження ....</div>
  ) : (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{isEditing ? "Редагувати продукт" : "Новий продукт"}</h2>
      <input
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Назва"
      />
      <input
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Ціна"
      />
      <input
        name="imageUrl"
        value={product.imageUrl}
        onChange={handleChange}
        placeholder="Зображення"
      />

      <button type="submit">Зберегти</button>
    </form>
  );
}
export default ProductForm;
