import React from "react";

const Button1 = ({
  text = "",
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
        py-2 sm:py-3

        min-w-[120px]
        rounded-full

        text-sm sm:text-base
        font-medium
        text-white

        bg-gradient-to-r
        from-violet-500
        via-purple-500
        to-indigo-500

        shadow-md shadow-purple-500/20

        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:shadow-xl hover:shadow-purple-500/40
        hover:brightness-110

        active:scale-95 active:shadow-sm

        relative overflow-hidden
        whitespace-nowrap

        before:content-['']
        before:absolute
        before:inset-0
        before:bg-white/20
        before:translate-x-[-100%]
        hover:before:translate-x-[100%]
        before:transition-transform
        before:duration-500

        ${className}
      `}
    >
      <span className="relative z-10">
        {text}
      </span>
    </button>
  );
};

export default Button1;