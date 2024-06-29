import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FAQItem({ active, question, answer, handdler }) {
  return (
    <li onClick={handdler} className="text-sm mb-3">
      <h3
        className={`flex items-center justify-between p-5 rounded-lg shadow-md ${
          active ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        {question}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-2 ${active ? "hidden" : ""}`}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`ml-2 ${active ? "" : "hidden"}`}
        />
      </h3>
      <p
        className={`mt-2 ${
          active ? "bg-slate-50 shadow-md p-5 rounded-lg" : "hidden"
        }`}
      >
        {answer}
      </p>
    </li>
  );
}
