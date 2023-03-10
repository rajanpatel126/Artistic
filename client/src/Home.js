/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./HomePage/HeroSection";
import Footer from "./components/Footer";
import Sliders from "./components/Sliders";
import ProductCollections from "./HomePage/ProductCollections";
import Customize from "./HomePage/Custoimze";

const Home = () => {
  const data = {
    name: "Arttistic",
  };

  return (
    <div className="bg-slate-100">
      <Sliders />
      <HeroSection myData={data} />;
      <ProductCollections />
      <Customize></Customize>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
