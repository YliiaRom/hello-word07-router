import { NavLink } from "react-router";

function HeaderMobileNav({ list }) {
  return (
    <>
      <nav className="flex flex-col space-y-3">
        {list.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className="text-gray-300 font-medium py-2"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
export default HeaderMobileNav;
