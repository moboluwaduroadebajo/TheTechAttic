import Image from "next/image";

export default function ProductDetails() {
  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center">
        <div className="w-full h-[400px] relative">
          <Image
            src="/phone.png"
            alt="Product Image"
            fill
            className="object-contain rounded-xl border"
          />
        </div>
    
        <div className="flex gap-3 mt-4">
          <Image
            src="/phone.png"
            alt="Thumbnail"
            width={80}
            height={80}
            className="object-contain border rounded-lg cursor-pointer"
          />
          <Image
            src="/phone.png"
            alt="Thumbnail"
            width={80}
            height={80}
            className="object-contain border rounded-lg cursor-pointer"
          />
        </div>
      </div>

      
      <div>
        <h1 className="text-3xl font-bold mb-3">Product Title</h1>
        <p className="text-xl font-semibold text-gray-700 mb-3">$120.00</p>

        
        <div className="flex items-center gap-2 mb-4">
          ⭐⭐⭐⭐☆ <span className="text-sm text-gray-500">(120 reviews)</span>
        </div>

      
        <p className="text-gray-600 mb-6">
          This is a sample product description. We’ll pull this from the API later.
        </p>

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