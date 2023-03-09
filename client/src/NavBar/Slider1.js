// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./sliders.css"
// import { Button } from 'react-bootstrap';

// function SampleNextArrow(props) {

//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }

// const Slider1 = () => {

//     const settings = {
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         speed: 400,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,

//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 2,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ],
//         // appendDots: dots => (
//         //     <ul style={{ marginleft: "0px", paddingLeft: "0px" }}>
//         //         {dots.map((dot, index) => (
//         //             <li key={index} style={{ display: "inline-block", marginRight: "10px" }}>
//         //                 {dot}
//         //             </li>
//         //         ))}
//         //     </ul>
//         // ),
//         customPaging: i => (
//             <div
//                 style={{
//                     // marginLeft: "50px",
//                     // marginRight: "50px",
//                     alignItems: "center",
//                     width: "10px",
//                     height: "10px",
//                     borderRadius: "50%",
//                     backgroundColor: i === settings.currentSlide ? "#ffffff" : "#a3a3a3"
//                 }}
//             />
//         )
//     }


//   return (
//     <div>
//           <Slider {...settings}>
//               <div className="p-4  lg:w-1/4 md:w-1/2" >
//                   <div className="h-full flex flex-col items-center text-center">
//                       <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-96 object-center mb-4 border border-purple-700" src="./images/Kurti1.png" />
//                       <div className="">
//                           {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
//                           <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
//                               8% OFF
//                           </label>
//                           <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
//                               Deal Of The Day
//                           </label>
//                           <h2 className="text-black title-font font-bold text-3xl">
//                               A line Kurtis
//                           </h2>
//                           <span className="mt-1 line-through text-2xl">₹320</span>
//                           <span className="mx-3 text-2xl font-bold">₹250</span>
//                       </div>
//                       <Button className='bg-orange-300 text-black text-xl rounded-xl'>Add to Cart</Button>
//                   </div>
//               </div>



//               <div className="p-4 gap-0 lg:w-1/4 md:w-1/2" >
//                   <div className="h-full flex flex-col items-center text-center">
//                       <img alt="team" className="flex-shrink-0 rounded-lg w-96 h-96  object-center mb-4 border border-purple-700" src="./images/Kurti2.png" />
//                       <div className="">
//                           {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
//                           <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
//                               8% OFF
//                           </label>
//                           <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
//                               Deal Of The Day
//                           </label>
//                           <h2 className="text-black title-font font-bold text-3xl">
//                               A line Kurtis
//                           </h2>
//                           <span className="mt-1 line-through text-2xl">₹320</span>
//                           <span className="mx-3 text-2xl font-bold">₹250</span>
                        
//                       </div>
//                       <Button className='bg-orange-300 text-black text-xl rounded-xl'>Add to Cart</Button>
//                   </div>
//               </div>
//               <div className="p-4 lg:w-1/4 md:w-1/2" >
//                   <div className="h-full flex flex-col items-center text-center">
//                       <img alt="team" className="flex-shrink-0 rounded-lg w-96 h-96  object-center mb-4 border border-purple-700" src="./images/Kurti3.png" />
//                       <div className="">
//                           {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
//                           <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
//                               8% OFF
//                           </label>
//                           <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
//                               Deal Of The Day
//                           </label>
//                           <h2 className="text-black title-font font-bold text-3xl">
//                               A line Kurtis
//                           </h2>
//                           <span className="mt-1 line-through text-2xl">₹320</span>
//                           <span className="mx-3 text-2xl font-bold">₹250</span>
                        
//                       </div>
//                       <Button className='bg-orange-300 text-black text-xl rounded-xl'>Add to Cart</Button>
//                   </div>
//               </div>
//               <div className="p-4 lg:w-1/4 md:w-1/2" >
//                   <div className="h-full flex flex-col items-center text-center">
//                       <img alt="team" className="flex-shrink-0 rounded-lg w-96 h-96  object-center mb-4 border border-purple-700" src="./images/Kurti4.png" />
//                       <div className="">
//                           {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
//                           <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
//                               8% OFF
//                           </label>
//                           <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
//                               Deal Of The Day
//                           </label>
//                           <h2 className="text-black title-font font-bold text-3xl">
//                               A line Kurtis
//                           </h2>
//                           <span className="mt-1 line-through text-2xl">₹320</span>
//                           <span className="mx-3 text-2xl font-bold">₹250</span>
//                       </div>
//                       <Button className='bg-orange-300 text-black text-xl rounded-xl'>Add to Cart</Button>
//                   </div>
//               </div>
//               <div className="p-4 lg:w-1/4 md:w-1/2" >
//                   <div className="h-full flex flex-col items-center text-center">
//                       <img alt="team" className="flex-shrink-0 rounded-lg w-96 h-96  object-center mb-4 border border-purple-700" src="./images/Kurti5.png" />
//                       <div className="">
//                           {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
//                           <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
//                               8% OFF
//                           </label>
//                           <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
//                               Deal Of The Day
//                           </label>
//                           <h2 className="text-black title-font font-bold text-3xl">
//                               A line Kurtis
//                           </h2>
                        
//                           <span className="mt-1 line-through text-2xl">₹320</span>
//                           <span className="mx-3 text-2xl font-bold">₹250</span>
//                       </div>
//                       <Button className='bg-orange-300 text-black text-xl rounded-xl'>Add to Cart</Button>
//                   </div>
//               </div>
//               <div className="p-4 lg:w-1/4 md:w-1/2" >
//                   <div className="h-full flex flex-col items-center text-center">
//                       <img alt="team" className="flex-shrink-0 rounded-lg w-96 h-96  object-center mb-4 border border-purple-700" src="./images/Kurti6.png" />
//                       <div className="">
//                           {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
//                           <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
//                               8% OFF
//                           </label>
//                           <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
//                               Deal Of The Day
//                           </label>
//                           <h2 className="text-black title-font font-bold text-3xl">
//                               A line Kurtis
//                           </h2>
                         
//                           <span className="mt-1 line-through text-2xl">₹320</span>
//                           <span className="mx-3 text-2xl font-bold">₹250</span>
//                       </div>
//                       <Button className='bg-orange-300 text-black text-xl rounded-xl'>Add to Cart</Button>
//                   </div>
//               </div>

//               <div className="p-4 lg:w-1/4 md:w-1/2" >
//                   <div className="h-full flex flex-col items-center text-center">
//                       <img alt="team" className="flex-shrink-0 rounded-lg w-96 h-96  object-center mb-4 border border-purple-700" src="./images/Kurti7.png" />
//                       <div className="">
//                           {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
//                           <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
//                               8% OFF
//                           </label>
//                           <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
//                               Deal Of The Day
//                           </label>
//                           <h2 className="text-black title-font font-bold text-3xl">
//                               A line Kurtis
//                           </h2>
                         
//                           <span className="mt-1 line-through text-2xl">₹320</span>
//                           <span className="mx-3 text-2xl font-bold">₹250</span>
//                       </div>
//                       <Button className='bg-orange-300 text-black text-xl rounded-xl'>Add to Cart</Button>
//                   </div>
//               </div>

//               <div className="p-4 lg:w-1/4 md:w-1/2" >
//                   <div className="h-full flex flex-col items-center text-center">
//                       <img alt="team" className="flex-shrink-0 rounded-lg w-96 h-96  object-center mb-4 border border-purple-700" src="./images/Kurti8.png" />
//                       <div className="">
//                           {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
//                           <label className="bg-blue-500 text-2xl p-2 text-white font-semibold">
//                               8% OFF
//                           </label>
//                           <label className="bg-orange-500 text-2xl p-2 text-white font-semibold">
//                               Deal Of The Day
//                           </label>
//                           <h2 className="text-black title-font font-bold text-3xl">
//                               A line Kurtis
//                           </h2>
                         
//                           <span className="mt-1 line-through text-2xl">₹320</span>
//                           <span className="mx-3 text-2xl font-bold">₹250</span>
//                       </div>
//                       <Button className='bg-orange-300 text-black text-xl rounded-xl'>Add to Cart</Button>
//                   </div>
//               </div>
//           </Slider>
//     </div>
//   )
// }

// export default Slider1
