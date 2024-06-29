import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarLink({ to, text, icon }) {
  const unactiveLinkStyle = "text-gray-950 hover:text-blue-500 text-sm";
  const activeLinkStyle =
    "text-blue-500 hover:text-blue-500 text-sm text-blue-500 underline";
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? activeLinkStyle : unactiveLinkStyle
        }
      >
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {text}
      </NavLink>
    </div>
  );
}
