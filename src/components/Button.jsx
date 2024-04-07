import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-sycamore-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
          className={`inline-block px-6 py-2 duration-200 rounded-full
       ${bgColor} ${textColor} ${className} cursor-pointer hover:bg-sycamore-700`}
          {...props}
    >
      {children}
    </button>
  );
}

export default Button;
