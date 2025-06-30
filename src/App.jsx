import { useState } from "react";
import Header from "../src/components/Header/Header";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import CustomCursor from "./components/CustomCursor/CustomCursor";
// import ButtonSection from "./components/ButtonSection/ButtonSection";
import Discount from "./components/Discounts/Discounts";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <Discount />
    </>
  );
}

export default App;
