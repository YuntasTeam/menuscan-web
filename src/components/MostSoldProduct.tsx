import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Rating from "./Rating";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
}

interface MostSoldProductProps {
  product: Product;
}

const MostSoldProduct: React.FC<MostSoldProductProps> = ({ product }) => {
  return (
    <div className="w-full h-fit rounded-lg relative overflow-hidden px-4">
      <div className="absolute bg-yellow-500 text-white text-xs font-semibold px-5 m-2 py-1 rounded-md">
        Most Sold
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-36 object-cover rounded-lg"
      />

      <div className="mt-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex flex-row justify-between items-center mt-2">
          <p className="text-lg font-bold">{product.price}</p>
          <Rating value={product.rating} />
        </div>
      </div>
    </div>
  );
};

export default MostSoldProduct;
