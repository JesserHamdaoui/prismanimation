import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const footerSectionStyles = "flex flex-col space-y-2";
  return (
    <footer className="footer bg-gray-800 text-sm min-h-[400px] pt-20 px-10">
      <div className="footer-content grid grid-cols-4 gap-4 py-8 px-4">
        <div className={footerSectionStyles}>
          <img src={logo} alt="" className="invert grayscale w-24 mb-3" />
          <h3 className="text-white text-lg font-semibold">Prismanimation</h3>
          <p className="text-gray-400 text-wrap w-64">
            Bringing Animation to Life with Creativity and Expertise
          </p>
          <p className="text-sm text-wrap w-52 text-gray-400">
            All right are resireved &copy; 2021 Prismanimation
          </p>
        </div>

        <div className={footerSectionStyles}>
          <h3 className="text-white text-lg font-semibold">Our Pages</h3>
          <ul className="flex flex-col space-y-2">
            <Link to="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link to="/portfolio" className="text-gray-400 hover:text-white">
              Portfolio
            </Link>
            <Link to="/merch" className="text-gray-400 hover:text-white">
              Merch
            </Link>
            <Link to="/recruitment" className="text-gray-400 hover:text-white">
              Recruitment
            </Link>
          </ul>
        </div>

        <div className={footerSectionStyles}>
          <h3 className="text-white text-lg font-semibold">Contact</h3>
          <p className="text-gray-400">Email: info@perismanimation.com</p>
          <p className="text-gray-400 ">Phone: +216 52 399 071</p>
        </div>

        <div className={footerSectionStyles}>
          <h3 className="text-white text-lg font-semibold">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="www.facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="www.x.com"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="www.instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
            </li>
          </ul>
          <form className={footerSectionStyles}>
            <h3 className="text-white text-sm font-semibold mt-5">
              Subscribe to our Newsletter
            </h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white py-2 px-3 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
