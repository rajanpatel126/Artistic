import React from "react";
import { NavLink } from "react-router-dom";
import { MdGridView } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

export default function viewArt() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container h-full px-5 py-10 mx-auto">
          {/* <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
                    </div> */}
          <div className=" w-full mx-auto overflow-auto box-border shadow-lg">
            <table className="table-auto w-full text-left ">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-3xl title-font tracking-wider font-medium text-black bg-gray-300 rounded-tl rounded-bl">
                    ID
                  </th>
                  <th className="px-1 py-3 text-3xl title-font  font-medium text-black bg-gray-300">
                    Name
                  </th>
                  <th className="px-1 py-3 text-3xl title-font  font-medium text-black bg-gray-300">
                    Price
                  </th>
                  <th className="px-3 py-3 text-3xl title-font  font-medium text-black  bg-gray-300">
                    Date
                  </th>
                  <th className="pl-20  py-3 text-3xl title-font font-medium text-black  bg-gray-300 rounded-r-md">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="mt-5">
                <tr className="box-border shadow-md border-t-8">
                  <td className="px-3 py-3 text-2xl text-black ">a101</td>
                  <td className="px-1 py-3 text-2xl text-black ">
                    Majestic Man
                  </td>
                  <td className="px-1 py-3 text-2xl text-black ">$250</td>
                  <td className="px-1 py-3 text-2xl text-black ">12-02-2022</td>
                  <td className="w-10 text-center text-2xl text-black px-2">
                    <div className="flex ">
                      <div className="flex -mt-15 px-1 ml-1 text-2xl text-blue-500 hover:cursor-pointer">
                        <MdGridView className="w-6 h-6 mt-1 text-2xl"></MdGridView>
                        View
                      </div>
                      <div className="flex -mt-15 px-1 ml-2  text-2xl text-green-500 hover:cursor-pointer">
                        <BiEdit className=" w-6 h-6  mt-1 text-2xl"></BiEdit>
                        Edit
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-red-500 hover:cursor-pointer">
                        <MdDeleteOutline className=" w-6 h-6  mt-1 text-2xl" />
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="box-border shadow-md border-t-8">
                  <td className=" border-gray-200 px-3 py-3 text-2xl text-black">
                    a102
                  </td>
                  <td className="border-t-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    Park Avenue
                  </td>
                  <td className="border-t-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    $155
                  </td>
                  <td className="border-t-2 border-gray-200 px-1 py-3 text-2xl text-black">
                    10-01-2023
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center px-2  text-2xl text-black">
                    <div className="flex ">
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-blue-500 hover:cursor-pointer">
                        <MdGridView className="w-6 h-6 mt-1 text-2xl"></MdGridView>
                        View
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-green-500 hover:cursor-pointer">
                        <BiEdit className=" w-6 h-6  mt-1 text-2xl"></BiEdit>
                        Edit
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-red-500 hover:cursor-pointer">
                        <MdDeleteOutline className=" w-6 h-6  mt-1 text-2xl" />
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="box-border shadow-md border-t-8">
                  <td className="border-t-2 border-gray-200 px-3 py-3  text-2xl text-black">
                    a103
                  </td>
                  <td className="border-t-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    Anni Design
                  </td>
                  <td className="border-t-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    $200
                  </td>
                  <td className="border-t-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    11-02-2022
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center  px-2 text-2xl text-black">
                    <div className="flex ">
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-blue-500 hover:cursor-pointer">
                        <MdGridView className="w-6 h-6 mt-1 text-2xl"></MdGridView>
                        View
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-green-500 hover:cursor-pointer">
                        <BiEdit className=" w-6 h-6  mt-1 text-2xl"></BiEdit>
                        Edit
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-red-500 hover:cursor-pointer">
                        <MdDeleteOutline className=" w-6 h-6  mt-1 text-2xl" />
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="box-border shadow-md border-t-8">
                  <td className="border-t-2 border-b-2 border-gray-200 px-3 py-3  text-2xl text-black">
                    a104
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    XPIOR
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    $300
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    26-09-2022
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10  px-2 text-center  text-2xl text-black">
                    <div className="flex ">
                      <div className="flex -mt-15 px-1 ml-2  text-2xl text-blue-500 hover:cursor-pointer">
                        <MdGridView className="w-6 h-6 mt-1 text-2xl"></MdGridView>
                        View
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-green-500 hover:cursor-pointer">
                        <BiEdit className=" w-6 h-6  mt-1 text-2xl"></BiEdit>
                        Edit
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-red-500 hover:cursor-pointer">
                        <MdDeleteOutline className=" w-6 h-6  mt-1 text-2xl" />
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="box-border shadow-md border-t-8">
                  <td className="border-t-2 border-b-2 border-gray-200 px-3 py-3  text-2xl text-black">
                    a105
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    Diommell
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    $350
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    22-01-2023
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10  px-2 text-center  text-2xl text-black ">
                    <div className="flex ">
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-blue-500 hover:cursor-pointer">
                        <MdGridView className="w-6 h-6 mt-1 text-2xl"></MdGridView>
                        View
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-green-500 hover:cursor-pointer">
                        <BiEdit className=" w-6 h-6  mt-1 text-2xl"></BiEdit>
                        Edit
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-red-500 hover:cursor-pointer">
                        <MdDeleteOutline className=" w-6 h-6  mt-1 text-2xl" />
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="box-border shadow-md border-t-8">
                  <td className="border-t-2 border-b-2 border-gray-200 px-3 py-3  text-2xl text-black">
                    a106
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    Jump Cuts
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    $400
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    21-09-2022
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10  px-2 text-center  text-2xl text-black">
                    <div className="flex ">
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-blue-500 hover:cursor-pointer">
                        <MdGridView className="w-6 h-6 mt-1 text-2xl"></MdGridView>
                        View
                      </div>
                      <div className="flex -mt-15 ml-2 px-1 text-2xl text-green-500 hover:cursor-pointer">
                        <BiEdit className=" w-6 h-6  mt-1 text-2xl"></BiEdit>
                        Edit
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-red-500 hover:cursor-pointer">
                        <MdDeleteOutline className=" w-6 h-6  mt-1 text-2xl" />
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="box-border shadow-md border-t-8">
                  <td className="border-t-2 border-b-2 border-gray-200 px-3 py-3  text-2xl text-black">
                    a107
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    SXV Style
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    $400
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-1 py-3  text-2xl text-black">
                    16-01-2023
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10  px-2 text-center  text-2xl text-black ">
                    <div className="flex ">
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-blue-500 hover:cursor-pointer">
                        <MdGridView className="w-6 h-6 mt-1 text-2xl"></MdGridView>
                        View
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-green-500 hover:cursor-pointer">
                        <BiEdit className=" w-6 h-6  mt-1 text-2xl"></BiEdit>
                        Edit
                      </div>
                      <div className="flex -mt-15 px-1 ml-2 text-2xl text-red-500 hover:cursor-pointer">
                        <MdDeleteOutline className=" w-6 h-6  mt-1 text-2xl" />
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4  w-full mx-auto">
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
