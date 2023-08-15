import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`group inline-flex items-center px-6 py-4 border-b-4 leading-5  cursor-pointer whitespace-nowrap 
    ${
      isActive
        ? "border-primary-400 text-primary-300 focus:text-primary-300 font-semibold"
        : "border-transparent text-white font-semibold"
        }
    `}
    onClick={onClick}
  >
    {children}
  </button>
);