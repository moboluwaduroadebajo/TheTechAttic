"use client";

import { fetchProductsByID } from "@/store/slice/ProductSlice";
import { AppDispatch, RootState } from "@/store/store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails() {
  const { productId } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { selectedProduct } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductsByID(Number(productId)));
    }
  }, [dispatch, productId]);

  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center">
        <div className="w-full h-[400px] relative">
          <Image
            src={selectedProduct?.image || "/phone.png"}
            alt="Product Image"
            fill
            sizes="200px"
            className="object-contain rounded-xl border"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <Image
            src={selectedProduct?.image || "/phone.png"}
            alt="Thumbnail"
            width={80}
            height={80}
            className="object-contain border rounded-lg cursor-pointer"
          />
          <Image
            src={selectedProduct?.image || "/phone.png"}
            alt="Thumbnail"
            width={80}
            height={80}
            className="object-contain border rounded-lg cursor-pointer"
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-3">{selectedProduct?.title}</h1>
        <p className="text-xl font-semibold text-gray-700 mb-3">
          ${selectedProduct?.price}
        </p>

        <div className="flex items-center gap-2 mb-4">
          ⭐⭐⭐⭐☆{" "}
          <span className="text-sm text-gray-500">
            ({selectedProduct?.rating.count} reviews)
          </span>
        </div>

        <p className="text-gray-600 mb-6">{selectedProduct?.description}</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Add to Cart
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
