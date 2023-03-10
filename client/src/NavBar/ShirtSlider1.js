import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders.css"
import { Button } from 'react-bootstrap';


function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

const ShirtSlider1 = () => {

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 400,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        customPaging: i => (
            <div
                style={{
                    // marginLeft: "50px",
                    // marginRight: "50px",
                    alignItems: "center",
                    width: "10px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: i === settings.currentSlide ? "#ffffff" : "#a3a3a3"
                }}
            />
        )
    }


    return (
        <div>
            <Slider {...settings}>
                <div className="p-4  lg:w-1/4 md:w-1/2" >
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700" src="./images/shirt1.png" />
                        <div className="">


                            <h2 className="text-black title-font font-bold text-2xl mb-2">
                                Shirts by Biba
                            </h2>

                            <span className="mt-1 line-through text-3xl mb-3">₹320</span>
                            <span className="mx-3 text-3xl font-bold mb-3">₹250</span>
                        </div>
                        <Button className='bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl'>Add to Cart</Button>
                    </div>
                </div>
                <div className="p-4  lg:w-1/4 md:w-1/2" >
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700" src="./images/shirt2.png" />
                        <div className="">


                            <h2 className="text-black title-font font-bold text-2xl mb-2">
                                Jansya Tunic Shirts
                            </h2>

                            <span className="mt-1 line-through text-3xl mb-3">₹320</span>
                            <span className="mx-3 text-3xl font-bold mb-3">₹250</span>
                        </div>
                        <Button className='bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl'>Add to Cart</Button>
                    </div>
                </div>

                <div className="p-4  lg:w-1/4 md:w-1/2" >
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700" src="./images/shirt3.png" />
                        <div className="">


                            <h2 className="text-black title-font font-bold text-2xl mb-2">
                                Fashion with Varanga
                            </h2>

                            <span className="mt-1 line-through text-3xl mb-3">₹320</span>
                            <span className="mx-3 text-3xl font-bold mb-3">₹250</span>
                        </div>
                        <Button className='bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl'>Add to Cart</Button>
                    </div>
                </div>
                <div className="p-4  lg:w-1/4 md:w-1/2" >
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700" src="./images/shirt4.png" />
                        <div className="">


                            <h2 className="text-black title-font font-bold text-2xl mb-2">
                                Aurelia Pure Cotton
                            </h2>
                            <span className="mt-1 line-through text-3xl mb-3">₹320</span>
                            <span className="mx-3 text-3xl font-bold mb-3">₹250</span>
                        </div>
                        <Button className='bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl'>Add to Cart</Button>
                    </div>
                </div>
                <div className="p-4  lg:w-1/4 md:w-1/2" >
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700" src="./images/shirt5.png" />
                        <div className="">


                            <h2 className="text-black title-font font-bold text-2xl mb-2">
                                Rangritri Casual Shirts
                            </h2>

                            <span className="mt-1 line-through text-3xl mb-3">₹320</span>
                            <span className="mx-3 text-3xl font-bold mb-3">₹250</span>
                        </div>
                        <Button className='bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl'>Add to Cart</Button>
                    </div>
                </div>
                <div className="p-4  lg:w-1/4 md:w-1/2" >
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700" src="./images/shirt6.png" />
                        <div className="">


                            <h2 className="text-black title-font font-bold text-2xl mb-2">
                                Shirts by Biba
                            </h2>

                            <span className="mt-1 line-through text-3xl mb-3">₹320</span>
                            <span className="mx-3 text-3xl font-bold mb-3">₹250</span>
                        </div>
                        <Button className='bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl'>Add to Cart</Button>
                    </div>
                </div>

                <div className="p-4  lg:w-1/4 md:w-1/2" >
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700" src="./images/shirt7.png" />
                        <div className="">


                            <h2 className="text-black title-font font-bold text-2xl mb-2">
                                Jansya Tunic Shirts
                            </h2>

                            <span className="mt-1 line-through text-3xl mb-3">₹320</span>
                            <span className="mx-3 text-3xl font-bold mb-3">₹250</span>
                        </div>
                        <Button className='bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl'>Add to Cart</Button>
                    </div>
                </div>

                <div className="p-4  lg:w-1/4 md:w-1/2" >
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg viol w-96 h-[350px] object-center mb-4 border border-purple-700" src="./images/shirt8.png" />
                        <div className="">


                            <h2 className="text-black title-font font-bold text-2xl mb-2">
                                Fashion with Varanga
                            </h2>

                            <span className="mt-1 line-through text-3xl mb-3">₹320</span>
                            <span className="mx-3 text-3xl font-bold mb-3">₹250</span>
                        </div>
                        <Button className='bg-orange-200 text-black font-bold font-serif border-2 mt-2 text-2xl rounded-xl'>Add to Cart</Button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ShirtSlider1
