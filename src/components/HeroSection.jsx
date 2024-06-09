import React from 'react'

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
         <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-gray-700">
         Build AI Calling Agent That Can Do 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-gray-700 ">
              {" "}
              Sales Call
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center my-10">
  <a
    href="#"
    className="py-3 px-4 mx-3 mb-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 shadow-md"
    style={{ 
      backgroundImage: "linear-gradient(94.93deg, #FFA96B 32.4%, #995B2E 208.58%)",
      boxShadow: "0px 4px 4px 0px #00000040"
    }}
  >
    <span style={{ color: "#FFFFFF" }}>Build your own Voice Agent</span> 
    <span style={{ color: "#000000" }}>'it's free!'</span>
  </a>

  <a href="#" className="py-3 px-4 mx-3 rounded-md border">
    Hear it in action
  </a>
</div>


          
        </div>
      );
    };
    
export default HeroSection