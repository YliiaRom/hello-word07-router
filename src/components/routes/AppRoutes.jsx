import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";
import Page404 from "../../pages/Page404";
import Products from "../../pages/Products";
import ProductsList from "../ProductsList/ProductsList";
import Product from "../Product/Products";
import ProductPage from "../../pages/ProductPage";
// import Dashboard from "../../pages/dasboard/Dashboard";
// import Settings from "../../pages/dasboard/components/settings";
// import Profile from "../../pages/dasboard/components/Profile";
import ProductsBkList from "../ProductsBk/ProductBkList";
import frontRoutes from "./frontRoutes.js";
import ProductDetails from "../../pages/ProductDetails.jsx";
import ProductBkDetails from "../ProductsBk/ProductBkDetail.jsx";
import ProductForm from "../ProductsBk/ProductBkForm.jsx";
import ProductNew from "../ProductsBk/ProductNew.jsx";
import Layout from "../Layout.jsx";
import ProductEditOrNew from "../../pages/ProductEditOrNew.jsx";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/api/products" element={<ProductsBkList />} />
          <Route
            path={frontRoutes.pages.products.detail}
            element={<ProductDetails />}
          />
          <Route
            path={frontRoutes.pages.products.edit}
            element={<ProductEditOrNew />}
          />
          <Route
            path={frontRoutes.pages.products.add}
            element={<ProductEditOrNew />}
          />

          {/* <Route path="/products/:id" element={<ProductPage />} /> */}
          <Route path="/products/:category/:id" element={<ProductPage />} />

          {/* outlet */}
          {/* <Route path="/dashboard" element={<Dashboard />}>
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route> */}

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}
export default AppRoutes;
