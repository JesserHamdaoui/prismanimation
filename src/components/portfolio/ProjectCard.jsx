import React from "react";
import CardView from "../../UI/CardView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({
  mainImage,
  images,
  title,
  description,
  technologies,
  date,
  link,
}) {
  return (
    <CardView>
      <div className="flex gap-16">
        <div className="grid grid-3 w-1/3 gap-x-10 gap-y-5">
          <img className="col-span-3" src={mainImage} alt="portfolio" />
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-[100px] h-[100px] object-cover rounded ${
                index === 1
                  ? "grayscale"
                  : index === 2
                  ? "object-left-bottom"
                  : "object-left-top"
              }`}
              src={image}
              alt="portfolio"
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 w-2/3">
          <h1 className="text-5xl">{title}</h1>
          <p className="text-sm">{description}</p>
          <ul>
            {technologies.map((technology, index) => (
              <li key={index}>
                <FontAwesomeIcon
                  icon={technology.icon || faCheckCircle}
                  className="text-blue-500 mr-2"
                />{" "}
                {technology.name}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">{date}</p>
          <a href={link} className="">
            <button className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              See More
              <FontAwesomeIcon icon={faArrowRightToBracket} className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </CardView>
  );
}
