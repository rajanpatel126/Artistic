/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { getAllArtDesigns } from "../api/artist";

export default function Artists() {
  const [artDesigns, setArtDesigns] = useState([]);

  const handleArts = async () => {
    setArtDesigns([]);
    const arts = await getAllArtDesigns();
    setArtDesigns(arts);
  };
  useEffect(() => {
    handleArts();
  }, []);

  return (
    <div className="flex">
      <section className="w-full text-gray-600 body-font">
        <div className="container h-full w-full px-5 py-10 mx-auto">
          <form className="w-full -mb-14 justify-end text-right">
            <div className="relative flex w-full justify-end text-right">
              <input
                type="text"
                placeholder="Search"
                className="w-full mr-2 py-3 normal-case text-3xl  text-black border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
              ></input>
              <button className="bg-transparent mr-5 -mt-40">
                <AiOutlineSearch className="cursor-pointer absolute mt-2 mr-3  w-14 h-14 text-black" />
              </button>
            </div>
          </form>
          <div className="w-full mx-auto overflow-auto box-border shadow-lg">
            <table className="table-auto w-full text-left ">
              <thead>
                <tr>
                  <th className="px-1 mx-8 py-3 text-4xl title-font  font-medium text-black bg-gray-300">
                    Art Name
                  </th>
                  <th className="px-1 py-3 text-4xl title-font  font-medium text-black bg-gray-300">
                    Price
                  </th>
                  <th className="px-3 py-3 text-4xl title-font  font-medium text-black  bg-gray-300">
                    Date
                  </th>
                  <th className="pl-0  py-3 text-4xl title-font font-medium text-black  bg-gray-300 rounded-r-md">
                    Status
                  </th>
                </tr>
              </thead>
              {artDesigns?.map((item) => (
                <tbody className="mt-5">
                  <tr className="box-border border-t-8 h-24  transform hover:bg-gray-100 hover:shadow-lg">
                    <td className="px-1 py-3 text-3xl text-black ">
                      {item?.name}
                    </td>
                    <td className="px-1 py-3 text-3xl text-black ">
                      <div className="flex">
                        <BiRupee className="-mr-2" />
                        {item?.price}
                      </div>
                    </td>
                    <td className="px-1 py-3 text-3xl text-black ">
                      {item?.date}
                    </td>
                    <td className="w-10 text-center text-3xl text-black px-2">
                      <div className="flex mr-10">
                        <button className="w-32 h-14 border-2 rounded-lg py-2 bg-green-600 hover:bg-green-700 ">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
