/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Customize = () => {
  return (
    <section className="mt-4 mb-4 text-black body-font bg-[#8edbf5]">
      <div className="mx-auto flex px-2 pt-10 items-center justify-center flex-col">
        <div className="text-left lg:w-2/3 w-full">
          <div className="flex">
            <h1 className="text-5xl mb-4 text-black font-bold">
              Customize in your own way
            </h1>
            <div className="ml-[550px]">
              <Link to="/Home/Customization">
                <button className=" hover:bg-black mb-4 text-white bg-gray-600 text-3xl cursor-pointer">
                  Customize now
                </button>
              </Link>
            </div>
          </div>
          <p className="mb-4 text-4xl text-justify leading-relaxed">
            Welcome to Artistic, the ultimate destination for customizable
            clothing online!! We understand that fashion is a reflection of
            individuality and personal expression, which is why we offer a vast
            range of customization options for both men and women. From choosing
            your own fabrics and colors, to adding unique prints, our
            easy-to-use customization process allows you to create your own
            one-of-a-kind clothing that's as unique as you are. With fast and
            affordable shipping options, hassle-free returns, and exceptional
            customer service, Artistic is your go-to destination for
            personalized fashion that stands out from the crowd.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Customize;
