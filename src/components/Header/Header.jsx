import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// import { a } from "framer-motion/client";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

import { headerNav } from "../../helpers/headerNav.js";
import HeaderNavDesktop from "./NavDesktop/HeaderNavDesktop";
import HeaderSocIcon from "./HeaderSocIcon/HeaderSocIcon.jsx";
import HeaderModalButton from "./HeaderModalButton/HeaderModalButton.jsx";
import HeaderMobileNavBtn from "./HeaderMobileNavBtn/HeaderMobileNavBtn.jsx";
import HeaderMobileMenu from "./HeaderMobileMenu/HeaderMobileMenu.jsx";
import ContactFormWrap from "./ContactFormWrap/ContactFormWrap.jsx";
import ContactInputForm from "./ContactInputForm/ContactInputForm.jsx";
import LogoHeader from "./LogoHeader/LogoHeader.jsx";
const listNav = [
  {
    path: "/",
    label: "Home",
  },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/api/products", label: "ProductsBk" },
];

function Header() {
  //Toggle menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const [contactFormIsOpen, setContactFormIsOpen] = useState(false);

  //--toggle
  function toggleMenu() {
    setIsOpen((v) => !v);
  }

  //--contact Form open/close
  const openContactForm = () => setContactFormIsOpen(true);
  const closeContactForm = () => setContactFormIsOpen(false);
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
      >
        {/* logo-header */}
        <LogoHeader logoContent={"W"} logoTitle="Hello World" />

        {/* Desctop Navigation */}
        <HeaderNavDesktop list={listNav} />

        {/* social-icons */}
        <HeaderSocIcon />

        {/* header button = OPEN MODAL*/}
        <HeaderModalButton
          btnText={"contact"}
          openContactForm={openContactForm}
        />

        {/* mobile-menu-btn */}
        <HeaderMobileNavBtn toggleMenu={toggleMenu}>
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </HeaderMobileNavBtn>
      </motion.div>

      {/* mobile-menu */}
      <HeaderMobileMenu
        isOpen={isOpen}
        list={listNav}
        toggleMenu={toggleMenu}
        openContactForm={openContactForm}
      />

      {contactFormIsOpen && (
        <ContactFormWrap
          titleContent="Get in Touch"
          closeContactForm={closeContactForm}
        >
          <ContactInputForm />
        </ContactFormWrap>
      )}
    </header>
  );
}
export default Header;
