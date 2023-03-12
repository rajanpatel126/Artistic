/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";

import { MdGridView } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import client from "./api/client";

export default function ViewArt() {
  const [artData, setArtData] = useState([]);
  const handleArt = async () => {
    const { data } = await client.get(
      `/artist/getArtDesigns/${localStorage.getItem("ArtistId")}`
    );
    setArtData(data);
    console.log(artData);
  };

  useEffect(() => {
    console.log(artData);
  }, [artData]);
  useEffect(() => {
    handleArt();
  }, []);
  return (
    <div className="flex">
      <section className="w-full text-gray-600 body-font">
        <div className="container h-full px-5 py-10 mx-auto">
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
                  <th className="px-1 py-3 text-4xl title-font  font-medium text-black bg-gray-300">
                    Name
                  </th>
                  <th className="px-1 py-3 text-4xl title-font  font-medium text-black bg-gray-300">
                    Price
                  </th>
                  <th className="px-3 py-3 text-4xl title-font  font-medium text-black  bg-gray-300">
                    Date
                  </th>
                  <th className="pl-20  py-3 text-4xl title-font font-medium text-black  bg-gray-300 rounded-r-md">
                    Action
                  </th>
                </tr>
              </thead>

              {artData.map((item) => (
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
                      <div className="flex ">
                        <div className="flex -mt-15 px-1 ml-1 text-3xl text-blue-500 hover:cursor-pointer">
                          <MdGridView className="w-6 h-6 mt-1 text-3xl"></MdGridView>
                          View
                        </div>
                        <div className="flex -mt-15 px-1 ml-2  text-3xl text-green-500 hover:cursor-pointer">
                          <BiEdit className=" w-6 h-6  mt-1 text-3xl"></BiEdit>
                          Edit
                        </div>
                        <div className="flex -mt-15 px-1 ml-2 text-3xl text-red-500 hover:cursor-pointer">
                          <MdDeleteOutline className=" w-6 h-6  mt-1 text-3xl" />
                          Delete
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="flex pl-4 mt-4  w-full mx-auto">
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
