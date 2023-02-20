import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
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
      <Services />
      <Trusted />
      <Footer />
    </div>
  );
};

export default Home;
