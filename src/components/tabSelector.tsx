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
        ? "border-[#219EBC] text-[#4FD5FF] focus:text-[#219EBC]"
        : "border-transparent text-white "
        }
    `}
    onClick={onClick}
  >
    {children}
  </button>
);