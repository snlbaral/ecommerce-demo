// next & packages
import React, { useState } from "react";

// data
import { sizes } from "@/data/sizes";

const SizeSwatchPicker = () => {
  const [selectedSize, setSelectedSize] = useState<any>(null);

  return (
    <div className="flex space-x-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`w-fit px-2 h-8 rounded-sm border-gray-600 border-2 dark:border-gray-300 ${
            selectedSize === size
              ? "bg-black dark:bg-white text-white dark:text-black"
              : "bg-transparent text-black dark:text-white"
          }`}
          aria-label={size}
        >
          <span className={"block text-center text-sm"}>{size}</span>
        </button>
      ))}
    </div>
  );
};

export default SizeSwatchPicker;
