import React from "react";
import Footer from "./components/Footer";
const AddArt = () => {
  return (
    <div>
      <section className="text-gray-800 body-font relative bg-slate-200">
        <div className="container  py-24 mx-auto  ">
          <div className="box-border container w-1/2 text-left  mx-auto mb-12">
            <h1 className=" text-6xl font-bold title-font text-center mb-4 text-gray-900 sm:text-4xl">
              Primary Information
            </h1>
          </div>
          <div className="box-border container py-12 px-6 mx-auto  md:box-content  w-1/2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-slate-100">
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
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="country"
                      className="leading-7 text-3xl text-black font-bold mt-4"
                    >
                      Description of Product
                    </label>
                    <br />
                    <textarea className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="country"
                      className="leading-7 text-3xl text-black font-bold mt-4"
                    >
                      Price
                    </label>
                    <br />
                    <input
                      type="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="country"
                      className="leading-7 text-3xl text-black font-bold mt-4"
                    >
                      Image File
                    </label>
                    <br />
                    <input
                      type="file"
                      placeholder="file"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button className="mt-4 flex mx-auto text-xl text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded ">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AddArt;
