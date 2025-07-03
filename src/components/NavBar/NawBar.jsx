import { NavLink } from "react-router";

function NawBar() {
  return (
    <div className="navBar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        Home
      </NavLink>
      |
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        About
      </NavLink>{" "}
      |
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        Contacts
      </NavLink>{" "}
      |
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        Products |
      </NavLink>
      <NavLink
        to="/api/products"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        ProductsBk |
      </NavLink>
      {/* <NavLink
          to="/products/:id"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Product
        </NavLink> */}
    </div>
  );
}
export default NawBar;
