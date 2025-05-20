import { Section } from "lucide-react";
import React from "react";
import ImageContainer from "./ui/ImageContainer";
import Image from "next/image";

const Categories = [
  { name: "On Sale", path: "/icons/Shopping-bag.svg" },
  //   { name: "Featured", path: "/icons/Trending.png" },
];

const CategoryBrowser = () => {
  return (
    <div className="w-[322px] mt-12 mb-16 flex flex-col space-y-2">
      <p className="heading-5-alt text-var1 self-center italic tracking-wide">
        - The Categories
      </p>
      <h2 className="heading-2 ">Browse by Category</h2>
      <section className="w-full flex items-center justify-between">
        {Categories.map((item) => (
          <ImageContainer variation={2}>
            <Image
              src={item.path}
              alt={item.name}
              fill
              className="object-contain"
            />
          </ImageContainer>
        ))}
      </section>
    </div>
  );
};

export default CategoryBrowser;
