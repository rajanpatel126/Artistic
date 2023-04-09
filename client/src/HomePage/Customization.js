/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { fetchFromTag } from "../api/admin";
import { getArtDesigns } from "../api/artist";
import { combineImage } from "../api/user";
import { Button } from "react-bootstrap";
const Customization = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [mergedImage, setMergedImage] = useState([]);
  const [cart, setCartState] = useState([]);

  const [tshirts, setTshirts] = useState([]);
  const [artDesign, setArtDesign] = useState([]);

  let imageSrc, artSrc;
  const handleProducts = async () => {
    setTshirts([]);
    const data = await fetchFromTag("T-Shirt");
    setTshirts(data);
  };

  const handleArts = async () => {
    setArtDesign([]);
    const arts = await getArtDesigns();
    setArtDesign(arts);
  };

  const handleClick = async () => {
    console.log(".................");
  };
  let myArr = new Array();
  const mergeImages = async (image1, image2) => {
    combineImage({ img1: image1, img2: image2 }).then((response) => {
      myArr.push(response.combineImg);
      setMergedImage(myArr);
    });
  };

  const addToCart = (product) => {
    setCartState((prev) => [...prev, product]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleClick1 = (event) => {
    const data = event.target;
    imageSrc = data.src;
  };
  const handleClick2 = (event) => {
    const data = event.target;
    artSrc = data.src;
  };

  useEffect(() => {
    handleArts();
    handleProducts();
  }, []);

  useEffect(() => {
    tshirts.forEach((item) => {
      mergeImages(item?.productImg, artDesign[0]?.patternImg);
    });
  }, [tshirts]);

  return (
    <>
      <div className="bg-[#fdb365] mb-2 flex-col ">
        <h2 className="flex justify-center text-black">T-Shirts</h2>
        <div className=" flex flex-row justify-center items-start">
          {tshirts.map((item) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 hover:scale-110 hover:bg-[#d1edb6] hover:shadow-2xl">
              <img
                onClick={handleClick1}
                src={item?.productImg}
                alt="ecommerce"
                className=" object-center h-[250px] block  hover:cursor-pointer transform "
              />
            </div>
          ))}
        </div>
        <h2 className="flex justify-center mt-2 text-black">Art Designs</h2>
        <div className=" flex flex-row justify-center items-center">
          {artDesign.map !== undefined &&
            artDesign.map((item) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 hover:scale-110">
                <img
                  onClick={handleClick2}
                  src={item?.patternImg}
                  alt="ecommerce"
                  className="object-cover w-[250px] object-center block  hover:cursor-pointer transform "
                />
              </div>
            ))}
        </div>
        <button
          onClick={handleClick}
          className="w-fit p-3 flex mx-auto text-4xl rounded-lg hover:text-black hover:scale-110 hover:bg-[#f186e9] justify-center border-0 border-none text-black bg-[#a5cbf0]"
        >
          Customise
        </button>
        <h2 className="mt-2 text-black">Customised Products</h2>
        <div className=" flex flex-row justify-center items-start">
          {mergedImage.map((item, idx) => {
            return (
              <>
                <div className="lg:w-1/4 md:w-1/2 p-4 hover:scale-110 hover:bg-[#d1edb6] hover:shadow-2xl">
                  <img
                    src={item}
                    alt="ecommerce"
                    className=" object-center h-[250px] block  hover:cursor-pointer transform "
                  />
                  <Button
                    className="bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl"
                    onClick={() =>
                      addToCart({ name: "Customized Tshirts", price: 1500 })
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Customization;
