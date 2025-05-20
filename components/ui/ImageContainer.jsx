import React from "react";

const ImageContainer = ({ children, variation = 1 }) => {
  const getVariation = () => {
    switch (variation) {
      case 1: {
        return "w-80 h-80";
      }
      case 2: {
        return "w-20 h-20";
      }
      default:
        null;
    }
  };

  return (
    <div
      className={`relative ${getVariation()} bg-[var(--color-gray-dark-1)] mt-8 rounded-[48px] grid place-content-center`}
    >
      {children}
    </div>
  );
};

export default ImageContainer;
