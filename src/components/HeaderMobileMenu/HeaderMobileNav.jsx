function HeaderMobileNav({ list, toggleMenu }) {
  return (
    <>
      <nav className="flex flex-col space-e-3">
        {list.map((item) => (
          <a
            onClick={toggleMenu}
            key={item}
            href="#"
            className="text-gray-300 font-medium py-2"
          >
            {item}
          </a>
        ))}
      </nav>
    </>
  );
}
export default HeaderMobileNav;
