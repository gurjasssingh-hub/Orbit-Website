import React from "react";

const Button2 = ({
  text = "Login",
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center

        px-4 sm:px-5
        py-2.5 sm:py-3

        min-w-[110px]
        sm:min-w-[128px]

        rounded-full

        text-sm sm:text-base
        font-medium

        transition-all duration-200
        cursor-pointer

        whitespace-nowrap

        hover:-translate-y-0.5
        active:scale-95

        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button2;