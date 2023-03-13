/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdGridView } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import client from "../api/client";
import { DeleteProducts, serchingFunction } from "../api/admin";

export default function Product() {
  const [prodData, setProdData] = useState([]);

  const handleProducts = async () => {
    const { data } = await client.get("/product/fetchAllProducts");
    setProdData(data);
  };

  const handleChange = async (name) => {
    setProdData([]);
    const data = await serchingFunction(name);
    setProdData(data);
  };
  
  const handleDelete = async (id) => {
    const deletedData = await DeleteProducts(id);
    let proData = prodData;
    const a = proData.splice(
      proData.findIndex((e) => e._id === id),
      1
    );
    setProdData(proData);
  };
  useEffect(() => {
    handleProducts();
  }, []);
  return (
    <div className="flex">
      <section className="w-full text-gray-600 body-font">
        <div className="container h-full py-10 mx-auto">
          <form className="w-full -mb-14 justify-end text-right">
            <div className="relative flex w-full justify-end text-right">
              <input
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                type="text"
                placeholder="Search"
                className="w-full mr-2 py-3 normal-case text-3xl text-black border-2 rounded-md outline-none focus:border-indigo-600"
              ></input>
              <button className="bg-transparent mr-5 -mt-40">
                <AiOutlineSearch className="cursor-pointer absolute mt-2 mr-4  w-14 h-14 text-black" />
              </button>
            </div>
          </form>
          <div className="w-full mx-auto overflow-auto box-border shadow-lg">
            <table className="table-auto w-full text-left ">
              <thead>
                <tr className="h-24  transform ">
                  <th className="px-1 py-3 text-4xl title-font  font-medium text-black bg-gray-300">
                    Brand Name
                  </th>
                  <th className="px-1 py-3 text-4xl title-font  font-medium text-black bg-gray-300">
                    Description
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
              {prodData?.map((item) => (
                <tbody className="mt-5">
                  <tr className="box-border cursor-pointer border-t-8 h-24 transform hover:bg-[#c0e698] hover:shadow-xl">
                    <td className="px-1 py-3 text-3xl text-black ">
                      {item?.name}
                    </td>
                    <td className="px-1 py-1 text-3xl text-black ">
                      {item?.description}
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
                        <div
                          onClick={(e) => {
                            handleDelete(item._id);
                          }}
                          className="flex -mt-15 px-1 ml-2 text-3xl text-red-500 hover:cursor-pointer"
                        >
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
          {/* <div className="flex pl-4 mt-4  w-full mx-auto">
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Next
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
