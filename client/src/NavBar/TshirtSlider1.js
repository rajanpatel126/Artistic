/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders.css";
import { Button } from "react-bootstrap";
import { fetchFromTag } from "../api/admin";
import { getImageInfo } from "../api/user";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const TshirtSlider1 = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        style={{
          // marginLeft: "50px",
          // marginRight: "50px",
          alignItems: "center",
          width: "10px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: i === settings.currentSlide ? "#ffffff" : "#a3a3a3",
        }}
      />
    ),
  };

  const [tshirts, setTshirts] = useState([]);

  const handleProducts = async () => {
    setTshirts([]);
    const data = await fetchFromTag("T-Shirt");
    setTshirts(data);
  };

  const [cart, setCartState] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")?.length > 0) {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      if (cartData) {
        setCartState(cartData);
      }
    }
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCartState(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCartState(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {tshirts.map((item) => (
          <div className="p-4  lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700"
                src={item?.productImg}
              />
              <div className="">
                <h2 className="text-black title-font font-bold text-2xl mb-2">
                  {item?.name}
                </h2>
                <span className="mx-3 text-3xl font-bold mb-3">
                  ₹ {item?.price}
                </span>
              </div>
              <Button
                onClick={() =>
                  addToCart({ name: item?.name, price: item?.price })
                }
                className="bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TshirtSlider1;
