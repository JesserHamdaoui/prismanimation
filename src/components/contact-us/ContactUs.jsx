import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-gray-200 py-48 z-40">
      <div className="container mx-auto">
        <div className="text-center flex gap-4 flex-col">
          <h1 className="text-2xl font-bold">Prismanimation</h1>
          <h2 className="text-5xl font-semibold">Get in Touch</h2>
          <p className="text-lg w-[27em] m-auto">
            We'd love to hear from you. Contact us for any inquiries or project
            requests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="flex items-center text-xl font-semibold">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
            </h4>
            <p className="mt-2">info@prismanimation.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="flex items-center text-xl font-semibold">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> Phone
            </h4>
            <p className="mt-2">+216 52 399 071</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="flex items-center text-xl font-semibold">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Address
            </h4>
            <p className="mt-2">123 Main Street, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
