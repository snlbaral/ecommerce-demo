// next & packages
import React, { useState } from "react";

// data
import { colors } from "@/data/colors";

const ColorSwatchPicker = () => {
  const [selectedColor, setSelectedColor] = useState<any>(null);

  return (
    <div className="flex flex-wrap gap-2 w-full">
      {colors.map((color) => (
        <button
          key={color.code}
          onClick={() => setSelectedColor(color)}
          className={`w-8 h-8 rounded-full border-gray-600 dark:border-gray-300 ${
            selectedColor?.code === color.code
              ? "border-2"
              : "border-transparent"
          }`}
          style={{ backgroundColor: color.code }}
          aria-label={color.name}
        ></button>
      ))}
    </div>
  );
};

export default ColorSwatchPicker;
