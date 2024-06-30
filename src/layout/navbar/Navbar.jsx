import React from "react";
import logo from "../../images/logo.svg";
import NavbarLink from "./NavbarLink";
import {
  faHome,
  faFolder,
  faUser,
  faShoppingCart,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" p-3 bg-slate-50 shadow-md fixed w-full z-50">
      <div className="nav-content max-w-[1200px] flex items-center justify-between m-auto">
        <NavLink to="/">
          <img src={logo} alt="" className="w-12 h-12" />
        </NavLink>
        <ul className="flex space-x-4 gap-3">
          <NavbarLink to="/" text="Home" icon={faHome} />
          <NavbarLink to="/portfolio" text="Portfolio" icon={faFolder} />
          <NavbarLink to="/about" text="About" icon={faUser} />
          <NavbarLink to="/merch" text="Merch" icon={faShoppingCart} />
          <NavbarLink to="/recruitment" text="Recruitment" icon={faUserPlus} />
        </ul>
        <a href="/#call-to-action">
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-sm">
            Get Started
          </button>
        </a>
      </div>
    </nav>
  );
}
