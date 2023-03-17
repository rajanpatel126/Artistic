import React from "react";

const Kurti = () => {
  return (
    <div className="bg-[#e19ce8]">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/3 lg:h-auto object-cover object-center rounded"
              src="./images/kurti.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 ml-5 lg:mt-0">
              <h2 className="text-4xl font-extrabold title-font text-black ">
                OPTIMIST PRIME
              </h2>
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <p className="leading-relaxed text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, vero nobis. Voluptatum corporis illum dolorem quis iusto ipsa minima sed atque modi quas soluta eos in voluptatem sunt, cum consequuntur nam ipsum sapiente sit similique nobis obcaecati repudiandae? Quam, recusandae ducimus voluptatum assumenda culpa obcaecati hic mollitia unde rem magnam.
              </p>
              <div className="flex mt-12">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹649
                </span>
                <button className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kurti;
