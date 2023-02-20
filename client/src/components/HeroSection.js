//  import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    //         <Wrapper>
    //             <div className="container">
    //                 <div className="grid grid-two-column">
    //                     <div className="hero-section-data">
    //                         <p className="intro-data">Welcome to</p>
    //                         <h1>{name }</h1>
    //                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ut, totam repudiandae nostrum qui nobis consequatur expedita, veniam nihil modi nesciunt quos unde tenetur fuga?Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, provident.
    //                         </p>
    //                         <Button>Shop Now</Button>
    //                     </div>
    //                     {/*HomePage img  */}
    //                     <div className='hero-section-image'>
    //                         <figure>
    //                             <img src="images/homepage.jpg" alt="hero-section-photo"
    //                             className='img-style'/>
    //                         </figure>
    //                     </div>
    //                 </div>
    //             </div>
    //         </Wrapper>
    //     )
    // };

    // const Wrapper = styled.section`
    //   padding: 12rem 0;
    //   img {
    //     min-width: 10rem;
    //     height: 10rem;
    //   }
    //   .hero-section-data {
    //     p {
    //       margin: 2rem 0;
    //     }
    //     h1 {
    //       text-transform: capitalize;
    //       font-weight: bold;
    //     }
    //     .intro-data {
    //       margin-bottom: 0;
    //     }
    //   }
    //   .hero-section-image {
    //     width: 100%;
    //     height: auto;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //   }
    //   figure {
    //     position: relative;
    //     &::after {
    //       content: "";
    //       width: 60%;
    //       height: 80%;
    //       background-color: rgba(81, 56, 238, 0.4);
    //       position: absolute;
    //       left: 50%;
    //       top: -5rem;
    //       z-index: -1;
    //     }
    //   }
    //   .img-style {
    //     width: 100%;
    //     height: auto;
    //   }
    //   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    //     .grid {
    //       gap: 10rem;
    //     }
    //     figure::after {
    //       content: "";
    //       width: 50%;
    //       height: 100%;
    //       left: 0;
    //       top: 10%;
    //       /* bottom: 10%; */
    //       background-color: rgba(81, 56, 238, 0.4);
    //     }
    //   }
    // `;
    <section className="text-gray-600 body-font bg-slate-100">
      <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
        {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></img> */}
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font  text-5xl mb-4 text-black font-bold">
            Trending Products
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
