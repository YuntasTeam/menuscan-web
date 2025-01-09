import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  rating: number;
  tags: string[]; // Tags for the product
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getTagColor = (index: number) => {
    const colors = [
      "bg-red-400 text-white",
      "bg-blue-400 text-white",
      "bg-green-400 text-white",
      "bg-yellow-400 text-black",
      "bg-purple-400 text-white",
      "bg-gray-400 text-white",
    ];
    return colors[index % colors.length]; // Rotate through the colors
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row items-center p-4 gap-4 cursor-pointer"
            onClick={() => handleCardClick(product)}
          >
            <div className="flex-1 self-baseline">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-1">
                <p className="text-lg font-bold mr-2">{product.price}</p>
                <div className="flex items-center bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{product.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium rounded-md ${getTagColor(
                      index
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProduct.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs font-medium rounded-md ${getTagColor(
                    index
                  )}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
