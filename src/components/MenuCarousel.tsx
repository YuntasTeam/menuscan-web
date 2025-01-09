import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Menu {
  id: number;
  name: string;
  image: string;
}

interface MenuCarouselProps {
  menus: Menu[];
}

const MenuCarousel: React.FC<MenuCarouselProps> = ({ menus }) => {
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
        {menus.map((menu, index) => (
          <div
            key={menu.id}
            className={`snap-center flex-shrink-0 w-[80%] ${
              index === menus.length - 1 ? "pr-4" : ""
            }`}
          >
            <div className="w-full rounded-3xl">
              <div className="absolute bg-green-700 text-white text-xs font-semibold px-5 m-2 py-1 rounded-md">
                New
              </div>
              <img
                src={menu.image}
                alt={menu.name}
                className="w-full h-40 object-cover rounded-3xl"
              />
            </div>
            <div className="mt-2 ml-1">
              <div className="flex flex-row justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{menu.name}</h3>
                </div>
                <div
                  className={`cursor-pointer transform transition-transform duration-500 ${
                    clickedStars[menu.id] ? "scale-125" : ""
                  }`}
                  onClick={() => handleStarClick(menu.id)}
                >
                  <Star
                    className={`${
                      clickedStars[menu.id] ? "text-yellow-500" : "text-black"
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
          {menus.map((menu) => (
            <CarouselItem key={menu.id} className="snap-center">
              <Card className="w-full rounded-lg">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent>
                  <div className="flex justify-between items-center px-4">
                    <h3 className="text-lg font-semibold">{menu.name}</h3>
                    <div
                      className={`cursor-pointer transform transition-transform duration-200 ${
                        clickedStars[menu.id] ? "scale-125" : ""
                      }`}
                      onClick={() => handleStarClick(menu.id)}
                    >
                      <Star
                        className={`${
                          clickedStars[menu.id]
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

export default MenuCarousel;
