import Image from "next/image";
import React from "react";
import HeroWatch from "../../public/hero-watch.png";

function Hero() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-6 py-12  rounded-2xl m-8 gap-x-4  bg-[url(/bg-2.jpeg)]">
      <div className="flex-1 pl-8">
        <p className="text-sm text-white">Best Deal Online on smart Watches</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
          SMART WEARABLE.
        </h1>
        <p className="text-xl text-red-500 font-semibold mt-4">Up to 80% Off</p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      <div className="flex-1 flex justify-center spinY">
        <Image
          src={HeroWatch}
          alt="Smart watch"
          className="w-48 h-48 transform-3d animate-[spinY_8s_linear_infinite]"/>
      </div>
    </div>
  );
}

export default Hero;
