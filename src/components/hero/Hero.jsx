import React from "react";
import image from "../../assets/images/scroll-animation-image.jpg";

export default function Hero() {
  return (
    <div>
      <header className="hero">
        <div className="hero-body pt-12 pb-12">
          <div className="container mx-auto max-w-[1200px]">
            <div className="flex items-center justify-between ">
              <div className="w-1/2 text-wrap flex flex-col gap-5">
                <h1 className="text-5xl text-gray-950 font-bold w-[300px]">
                  Prismanimation
                </h1>
                <h2 className="text-xl text-gray-800 w-[400px]">
                  Bringing Animation to Life with Creativity and Expertise
                </h2>
                <a href="#call-to-action">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white w-56 font-bold py-2 px-4 rounded">
                    Get Started
                  </button>
                </a>
              </div>
              <div className="w-1/2 bg-cover">
                <img src={image} alt="Hero" className="masked" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
