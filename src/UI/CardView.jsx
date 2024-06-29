import React from "react";

export default function CardView({
  children,
  bgColor = "bg-white",
  color = "text-black",
  isCentered = false,
  minHeight = "",
}) {
  return (
    <div
      className={
        "rounded-lg shadow-md p-8 " +
        bgColor +
        " " +
        color +
        (isCentered
          ? "flex justify-center flex-col items-center text-center "
          : " ") +
        (minHeight ? `min-h-[${minHeight}]` : "")
      }
    >
      {children}
    </div>
  );
}
