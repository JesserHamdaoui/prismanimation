import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faBox,
  faCode,
  faCamera,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import JobListItem from "./JobListItem";

export default function JobList() {
  return (
    <div className="max-w-[1200px] m-auto">
      <h1 className="text-4xl mb-12 w-2/3 text-center m-auto">
        You Can Join us if you acquire one of these skills
      </h1>
      <ul className="grid grid-cols-4 gap-10">
        <li>
          <JobListItem
            jobTitle="2D Artist"
            jobIcon={faBrush}
            jobDescription="We're seeking a skilled 2D Artist to enrich our projects with imaginative illustrations and digital artwork."
          />
        </li>

        <li>
          <JobListItem
            jobTitle="3D Artist"
            jobIcon={faBox}
            jobDescription="We're looking for a talented 3D Artist to join our team and help us create stunning 3D models and animations for our clients."
          />
        </li>
        <li>
          <JobListItem
            jobTitle="Front-End Developer"
            jobIcon={faCode}
            jobDescription="We're seeking an experienced Front-End Developer to help us build responsive websites that deliver an exceptional user experience."
          />
        </li>
        <li>
          <JobListItem
            jobTitle="Photographer"
            jobIcon={faCamera}
            jobDescription="We're looking for a talented Photographer to capture and edit stunning images for our clients. "
          />
        </li>
      </ul>
      <p className="text-sm w-2/3 text-center m-auto mt-10">
        Explore exciting opportunities with our dynamic creative team. We're
        passionate about pushing boundaries and delivering exceptional visual
        experiences across various industries. Whether you're a skilled 3D
        Artist, 2D Artist, Web Developer, or Photographer, we invite you to
        bring your talents and creativity to our collaborative environment.
      </p>
      <div className="btns flex gap-3 justify-center items-center mb-8 mt-5">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          Learn More
        </button>
        <button className="text-blue-500 px-4 py-2 mt-4 rounded">
          Contact us
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className="text-blue-500 ml-2 "
          />
        </button>
      </div>
    </div>
  );
}
