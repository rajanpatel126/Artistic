/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Sliders from "./components/Sliders";
import ProductCollections from "./components/ProductCollections";

const Home = () => {
  const data = {
    name: "Arttistic",
  };

  return (
    <div className="bg-slate-100">
      <Sliders />
      <HeroSection myData={data} />;
      <ProductCollections />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
