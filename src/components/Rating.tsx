import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
  value: number; // Rating value (float) between 0 and 5
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  const fullStars = Math.floor(value); // Full stars (e.g., 4 from 4.5)
  const hasHalfStar = value % 1 !== 0; // Check if there's a half-star
  const emptyStars = 5 - Math.ceil(value); // Remaining empty stars

  return (
    <div className="flex items-center">
      {/* Render full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={`full-${index}`} className="text-yellow-500" />
      ))}
      {/* Render half star if applicable */}
      {hasHalfStar && <Star className="text-yellow-300 opacity-70" />}
      {/* Render empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={`empty-${index}`} className="text-gray-300" />
      ))}
    </div>
  );
};

export default Rating;
