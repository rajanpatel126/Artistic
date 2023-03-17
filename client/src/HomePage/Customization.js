/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { fetchFromTag } from "../api/admin";
import { getArtDesigns } from "../api/artist";
import { combineImage } from "../api/user";
const Customization = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [mergedImage, setMergedImage] = useState("");

  const [tshirts, setTshirts] = useState([]);
  const [artDesign, setArtDesign] = useState([]);

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
  const mergeImages = async () => {
    const data = await combineImage({ img1: image1, img2: image2 });
    setMergedImage(data.combineImg);
    console.log(data);
  };
  let imageSrc;
  let artSrc;

  const handleClick1 = (event) => {
    const data = event.target;
    imageSrc = data.src;
    console.log(data, imageSrc);
    console.log("image clicked");
  };
  const handleClick2 = (event) => {
    const data = event.target;
    artSrc = data.src;
    console.log(data, artSrc);
    console.log("art clicked");
  };

  useEffect(() => {
    handleArts();
    handleProducts();
  }, []);

  useEffect(() => {
    setImage1(tshirts[7]?.productImg);
    console.log(image1);
  }, [tshirts]);
  useEffect(() => {
    setImage2(artDesign[0]?.patternImg);
    console.log(image2);
  }, [artDesign]);

  useEffect(() => {
    mergeImages();
  }, [image1, image2]);

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
          {artDesign.map((item) => (
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
        <div className="lg:w-1/4 md:w-1/2 p-4 hover:scale-110">
          <img
            src={mergedImage}
            alt="customisedImage"
            className="flex flex-row justify-center object-cover object-center w-96 h-[350px]  hover:cursor-pointer transform "
          />
        </div>
      </div>
    </>
  );
};

export default Customization;
