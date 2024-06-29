import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div>
      <div className="flex flex-col items-center text-left border-2 border-blue-500 p-5 rounded-xl">
        <FontAwesomeIcon
          icon={icon}
          className="text-4xl text-blue-500 self-start"
        />
        <h2 className="text-xl font-bold mt-4 self-start">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm min-h-24">{description}</p>
        <Link
          to={"/portfolio#" + link}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded self-start"
        >
          See Portfolio{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-3" />
        </Link>
      </div>
    </div>
  );
}
