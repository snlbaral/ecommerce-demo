// next & packages
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // full star renders
  const renderFullStars = () => {
    return Array.from({ length: fullStars }).map((_, index) => (
      <StarIcon
        key={`full-star-${index}`}
        className="w-5 h-5 text-yellow-400"
      />
    ));
  };

  // renders half stars
  const renderHalfStar = () => {
    if (hasHalfStar) {
      return <StarIcon className="w-5 h-5 text-yellow-400" />;
    }
    return null;
  };

  // renders empty stars
  const renderEmptyStars = () => {
    const emptyStars = Math.floor(5 - rating);
    return Array.from({ length: emptyStars }).map((_, index) => (
      <StarIcon key={`empty-star-${index}`} className="w-5 h-5 text-gray-300" />
    ));
  };

  return (
    <div className="flex items-center space-x-1">
      {renderFullStars()}
      {renderHalfStar()}
      {renderEmptyStars()}
    </div>
  );
};

export default StarRating;
