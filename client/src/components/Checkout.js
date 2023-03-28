/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import client from "../api/client";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Checkout = () => {
  const [cart, setCartState] = useState([]);
  const [total, setTotal] = useState(0);

  const [orderData, setOrderData] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    city: "",
    products: [],
    total: 0,
  });

  const handleChange = async (e) => {
    setOrderData({ ...orderData, total: total + 40 });
    setOrderData({ ...orderData, products: cart });

    setOrderData({ ...orderData, [e.target.name]: [e.target.value] });
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    let ttl = 0;
    cartData.map((item) => {
      ttl += item.price;
    });
    setTotal(ttl);
    if (cartData) {
      setCartState(cartData);
    }
  }, []);
  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Unable to load Payment gateway. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_giq1IMMWeasz25", // Enter the Key ID generated from the Dashboard
      amount: total * 100,
      currency: "INR",
      name: "Artisitic",
      description: "Proceed To Payment",
      image:
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35633090.jpg",
      handler: async function (response) {
        const { data } = await client.post(
          `/user/orders?userEmail=${localStorage.getItem("userEmail")}`,
          orderData
        );
        if (data?.success) {
          alert(data.message);
        }
      },

      theme: {
        color: "teal",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    displayRazorpay();
  };

  return (
    <>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-14 font-bold md:text-5xl text-center text-5xl text-heading ">
              Customer Info
            </h2>
            <form className="justify-center w-full mx-auto">
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      className="block mb-3 text-3xl font-semibold text-black"
                    >
                      First Name
                    </label>
                    <input
                      name="fname"
                      onChange={handleChange}
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 normal-case border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      className="block mb-3 text-3xl font-semibold text-black"
                    >
                      Last Name
                    </label>
                    <input
                      name="lname"
                      type="text"
                      placeholder="Last Name"
                      onChange={handleChange}
                      className="w-full px-4 normal-case py-3 text-sm border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      for="Email"
                      className="block mb-1 text-3xl font-semibold text-black"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="text"
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 normal-case py-3 text-sm border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full">
                    <label
                      for="Address"
                      className="block mb-1 text-3xl font-semibold text-black"
                    >
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-3 mb-12 normal-case text-xs border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="address"
                      cols="20"
                      rows="4"
                      onChange={handleChange}
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="city"
                      className="block mb-3 text-3xl font-semibold text-black"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full px-4 normal-case py-3 text-sm border border-gray-300 rounded lg:text-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-fit px-6 py-2 text-white font-bold bg-blue-600 hover:bg-blue-900"
                  >
                    Payment
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" flex flex-col w-full h-2/3 py-3 px-8 mt-28 border-2 border-gray-300 ml-40 lg:ml-28 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-4xl font-bold text-center">Current Cart</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  {cart.map((item) => (
                    <div className="flex space-x-4">
                      <div className="w-full mb-7">
                        <h2 className="text-2xl font-bold text-red-500">
                          {item.name}
                        </h2>
                      </div>
                      <div className="text-2xl font-bold">
                        <span> ₹{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center w-full py-4 mt-28 text-2xl font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal
                <div className="ml-52 flex ">
                  <BiRupee></BiRupee>
                  {total}
                </div>
              </div>
              <div className="flex items-center w-full py-4 text-2xl font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax
                <div className="ml-40 flex ">
                  <BiRupee></BiRupee>
                  40.00
                </div>
              </div>
              <div className="flex items-center w-full py-4 text-2xl font-semibold  lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total
                <div className="ml-64 flex ">
                  <BiRupee></BiRupee>
                  {total + 40}
                </div>
              </div>
              <div className="flex items-center w-full py-4 text-2xl font-semibold  lg:py-5 lg:px-3 text-heading  last:text-base last:pb-0">
                <div className="ml-40 flex ">{/* <BiRupee></BiRupee> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
