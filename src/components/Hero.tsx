import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <div>
        <p>Best Deal Online on smart Watches</p>
        <h3>SMART WEARABLE.</h3>
        <p>UP to 80% OFF</p> 

        {/* Image */}
      <div className="mt-8 md:mt-0">
        <Image
          src="/hero-watch.jpeg"  
          alt="Smart Watch"
          width={200}
          height={200}
          priority
          className="rounded-xl"
        />
      </div> 
    </div>

    




  );
};

export default Hero;