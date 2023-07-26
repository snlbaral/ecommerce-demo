// next & packages
import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

// types
import { ICarouselProps } from "@/types/props";

// hooks
import useCarousel from "@/hooks/useCarousel";

const Carousel = ({ images }: ICarouselProps) => {
  // hook for carousel
  const {
    getLeftNavProps,
    getRightNavProps,
    isTouchDevice,
    scrollAreaRef,
    scrollPosition,
  } = useCarousel();

  return (
    <div className="relative w-full">
      <div className="flex justify-center items-center w-full">
        {/* hide left arrow icon if carousel is at first */}
        {scrollPosition !== "start" ? (
          <button
            className="absolute w-10 h-10 top-1/2 left-4 transform -translate-y-1/2 focus:outline-none"
            {...getLeftNavProps()}
          >
            <ArrowLeftCircleIcon />
          </button>
        ) : null}

        {/* carousel images */}
        <div ref={scrollAreaRef} className="flex overflow-x-hidden">
          {images.map((image, index) => {
            return (
              <img
                style={{ flex: "0 0 100%" }}
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            );
          })}
        </div>

        {/* hide right arrow icon if carousle is at the end */}
        {scrollPosition !== "end" ? (
          <button
            className="absolute w-10 h-10 top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
            {...getRightNavProps()}
          >
            <ArrowRightCircleIcon />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Carousel;
