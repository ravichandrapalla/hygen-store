import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import ImageContainer from "./ui/ImageContainer";

const Hero = () => {
  return (
    <div className="mt-14 mb-14 w-[322px] flex flex-col space-y-2 text-left items-center">
      <p className="heading-5-alt text-var1 self-start italic tracking-wide">
        - Skincare Products
      </p>
      <h2 className="heading-2 ">We Offer the Best Products for your Skin</h2>
      <Button
        variant="default"
        size="default"
        className="self-start heading-4 mt-4"
      >
        Shop Now
      </Button>
      <ImageContainer>
        <Image
          src="/icons/HeroOne.svg"
          alt="hero-one"
          fill
          className="object-contain"
        />
      </ImageContainer>
    </div>
  );
};

export default Hero;
