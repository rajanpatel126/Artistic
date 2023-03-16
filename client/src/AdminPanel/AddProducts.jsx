/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addProductDetails } from "../api/admin";
let config = {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
};
const AddProducts = () => {
  const [productDetails, setProductDetails] = useState({});
  const navigation = useNavigate();
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    return base64;
  };

  const handleChange = async (e) => {
    if (e.target.name === "productImg") {
      let imgBase64 = await handleFileUpload(e);
      return setProductDetails({
        ...productDetails,
        [e.target.name]: imgBase64,
      });
    }
    setProductDetails({ ...productDetails, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addProductDetails(productDetails, config);

    // navigation("/Admin");
    console.log(data);
  };
  return (
    <div className="rounded-2xl normal-case">
      <section className="text-gray-800  body-font relative bg-slate-200">
        <div className="container py-24 mx-auto">
          <div className=" container w-1/2 text-left mx-auto mb-8">
            <h1 className=" text-6xl font-bold text-center mb-12 text-gray-900">
              Primary Information
            </h1>
          </div>
          <div className="box-border border-red-800 border-4 container py-12 px-6 mx-auto  md:box-content  w-1/2 shadow-2xl bg-slate-100 rounded-md">
            <div className="lg:w-5/6 md:w-2/3 mx-auto ">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-3xl text-black font-bold"
                    >
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="name"
                      name="name"
                      className="normal-case w-full p-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-3xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="country"
                      className="leading-7 text-3xl text-black font-bold"
                    >
                      Description of Product
                    </label>
                    <br />
                    <textarea
                      onChange={handleChange}
                      name="description"
                      className="normal-case w-full p-3 text-3xl bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="tag"
                      className="leading-7 text-3xl text-black font-bold mt-2"
                    >
                      Tag
                    </label>
                    <br />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="tag"
                      className="normal-case w-full p-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-3xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="country"
                      className="leading-7 text-3xl text-black font-bold mt-2"
                    >
                      Price
                    </label>
                    <br />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="price"
                      className="normal-case w-full p-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-3xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="image name"
                      className="leading-7 text-3xl text-black font-bold"
                    >
                      Image File
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      type="file"
                      placeholder="file"
                      name="productImg"
                      className="normal-case w-full p-3  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-2xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    onClick={handleSubmit}
                    className=" flex mx-auto text-3xl text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProducts;
