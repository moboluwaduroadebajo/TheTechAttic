import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  image: StaticImageData;
  title: string;
  price: number;
  oldPrice?: string;
  save?: string;
}

const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  save,
}: ProductCardProps) => {
  return (
    <div className="gap-2 p-4 ">
    <div className="border rounded-lg w-fit h-68 ml-12 border-2 border-gray-200 pb-12 mb-8 hover:border-blue-700 transition-colors duration-300">
      <div className="w-inherit h-40 bg-gray-200 rounded-md">
        <Image src={image} alt={title}  className="w-36 h-36" />
      </div>
        <div>
        <h3 className="text-[10px] text-gray-800 text-left ml-2">{title}</h3>
        <div className="flex items-center gap-2 mt-1 border-b-1 m-2 border-gray-200 ">
          <span className="text-[10px] text-gray-800 text-left font-bold">{price}</span>
          <span className="text-gray-500 line-through text-[10px]  ">{oldPrice}</span>
        </div>
        <p className="text-green-600 text-[10px] font-medium ml-2">Save – {save}</p>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
