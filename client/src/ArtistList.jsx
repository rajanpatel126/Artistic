import React from "react";
import Selller from "./AddArt";
import { NavLink } from "react-router-dom";

export default function artistList() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container  py-24 mx-auto mb-16">
          <div className="flex flex-wrap w-full mb-8">
            <div className=" w-full  -mt-16 -mb-28">
              <h1 className="text-4xl sm:text-4xl  font-bold w-full title-font justify-center text-center  text-gray-900">
                Popular Artists
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4  -my-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img src="./images/prof1.jpg" alt="content" />
                <h3 className=" text-indigo-500 text-xl font-bold mt-3 title-font">
                  Joyce Hill
                </h3>
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2> */}
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img src="./images/prof2.jpg" alt="content" />
                <h3 className=" text-indigo-500 text-xl font-bold mt-3 title-font">
                  Michael Wood
                </h3>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img src="./images/prof3.jpg" alt="content" />
                <h3 className=" text-indigo-500 text-xl font-bold mt-3 title-font">
                  David Phelps
                </h3>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img src="./images/prof4.jpg" alt="content" />
                <h3 className=" text-indigo-500 text-xl font-bold mt-3 title-font">
                  Kathy Park
                </h3>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img src="./images/prof5.jpg" alt="content" />
                <h3 className=" text-indigo-500 text-xl font-bold mt-3 title-font">
                  Justin Kim
                </h3>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img src="./images/prof6.jpg" alt="content" />
                <h3 className=" text-indigo-500 text-xl font-bold mt-3 title-font">
                  Penny Collins
                </h3>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img src="./images/prof7.jpeg" alt="content" />
                <h3 className=" text-indigo-500 text-xl font-bold mt-3 title-font">
                  Brandin Baron
                </h3>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img src="./images/prof8.jpeg" alt="content" />
                <h3 className=" text-indigo-500 text-xl font-bold mt-3 title-font">
                  Steven Levin
                </h3>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
