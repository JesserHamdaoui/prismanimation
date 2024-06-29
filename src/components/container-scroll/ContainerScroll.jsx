import React from "react";
import { ContainerScroll } from "../../UI/ConatinerScroll";
import logo from "../../images/logo.svg";
import video from "../../videos/animation-production.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden py-16">
      <ContainerScroll
        titleComponent={
          <>
            <img src={logo} alt="logo" className="w-16 h-16 m-auto mb-4" />
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Prismanimation
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-4 leading-none">
                Bringing Animation to Life
              </span>
            </h1>
            <p className="text-center text-wrap max-w-[1000px] m-auto my-8">
              At our animation production company, we specialize in creating
              captivating 2D and 3D animation videos that bring your ideas to
              life. With our team of talented animators and cutting-edge
              technology, we deliver high-quality animations that engage and
              inspire your audience.
            </p>
            <div className="btns flex gap-3 justify-center items-center mb-8">
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 border-2 border-blue-500 rounded">
                Learn More
              </button>
              <button className="text-blue-500 px-4 py-2 mt-4 border-2 border-blue-500 rounded">
                Contact us
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="text-blue-500 ml-2 "
                />
              </button>
            </div>
          </>
        }
      >
        <video
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </ContainerScroll>
    </div>
  );
}
