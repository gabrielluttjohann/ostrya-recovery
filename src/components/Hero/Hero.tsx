import image from "@/assets/banner-white.png";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative w-full max-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={image.src} // Replace with your image path
          alt="Hero Banner"
          className="w-full h-full object-contain" // Ensures the entire image is visible
        />
      </div>
    </div>
  );
};

export default HeroBanner;