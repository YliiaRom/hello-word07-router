import Header from "../src/components/Header/Header";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import CustomCursor from "./components/CustomCursor/CustomCursor";
// import ButtonSection from "./components/ButtonSection/ButtonSection";
import Discount from "./components/Discounts/Discounts";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NawBar from "./components/NavBar/NawBar";
import Contacts from "./pages/Contacts";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <>
      {/* <NawBar /> */}
      <AppRoutes />
      {/* <Header />
      <HeroSection />
      <CustomCursor />
      <Discount /> */}
    </>
  );
}

export default App;
