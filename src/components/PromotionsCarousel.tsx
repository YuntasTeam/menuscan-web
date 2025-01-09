import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Promotion {
  id: number;
  title: string;
  image: string;
}

interface PromotionsCarouselProps {
  promotions: Promotion[];
}

const PromotionsCarousel: React.FC<PromotionsCarouselProps> = ({
  promotions,
}) => {
  const [clickedStars, setClickedStars] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleStarClick = (id: number) => {
    setClickedStars((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the star state
    }));
  };

  return (
    <div className="w-full">
      {/* Mobile Scrollable Carousel */}
      <div className="relative sm:hidden w-full overflow-x-scroll scroll-smooth snap-x snap-mandatory flex gap-4 px-4 py-4">
        {promotions.map((promo, index) => (
          <div
            key={promo.id}
            className={`snap-center flex-shrink-0 w-[80%] ${
              index === promotions.length - 1 ? "pr-4" : ""
            }`}
          >
            <div className="w-full rounded-3xl">
              <div className="absolute bg-green-700 text-white text-xs font-semibold px-5 m-2 py-1 rounded-md">
                50%
              </div>
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-40 object-cover rounded-3xl"
              />
            </div>
            <div className="mt-2 ml-1">
              <div className="flex flex-row justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{promo.title}</h3>
                </div>
                <div
                  className={`cursor-pointer transform transition-transform duration-500 ${
                    clickedStars[promo.id] ? "scale-125" : ""
                  }`}
                  onClick={() => handleStarClick(promo.id)}
                >
                  <Star
                    className={`${
                      clickedStars[promo.id] ? "text-yellow-500" : "text-black"
                    } transition-colors duration-300`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Desktop Carousel */}
      <Carousel className="hidden sm:block w-full">
        <CarouselContent className="flex gap-4 px-4 py-4">
          {promotions.map((promo) => (
            <CarouselItem key={promo.id} className="snap-center">
              <Card className="w-full rounded-lg">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent>
                  <div className="flex justify-between items-center px-4">
                    <h3 className="text-lg font-semibold">{promo.title}</h3>
                    <div
                      className={`cursor-pointer transform transition-transform duration-200 ${
                        clickedStars[promo.id] ? "scale-125" : ""
                      }`}
                      onClick={() => handleStarClick(promo.id)}
                    >
                      <Star
                        className={`${
                          clickedStars[promo.id]
                            ? "text-yellow-500"
                            : "text-black"
                        } transition-colors duration-300`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PromotionsCarousel;
