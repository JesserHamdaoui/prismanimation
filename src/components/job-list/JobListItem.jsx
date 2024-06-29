import React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardView from "../../UI/CardView";

export default function JobListItem({
  jobTitle,
  jobDescription,
  jobIcon,
  jobButtonLink = "",
}) {
  return (
    <CardView minHeight="400px" isCentered={true}>
      <FontAwesomeIcon className="text-6xl text-blue-500" icon={jobIcon} />
      <div className="min-h-[16em]">
        <h2 className="text-xl my-5">{jobTitle}</h2>
        <p className="text-sm">{jobDescription}</p>
      </div>
      <a href={jobButtonLink} target="_blank" rel="noopener noreferrer">
        <button className="text-blue-500 border-2 border-blue-500 px-5 py-1 rounded-lg ">
          Learn More
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
        </button>
      </a>
    </CardView>
  );
}
