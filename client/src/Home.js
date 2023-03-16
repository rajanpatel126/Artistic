/* eslint-disable no-unused-vars */
import React from "react";
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
      <ProductCollections />
      <Customize></Customize>
    </div>
  );
};

export default Home;
