import React from "react";

// Import images from the assets folder
import img1 from "../assets/screenshot/img1.png";
import img2 from "../assets/screenshot/img2.png";
import img3 from "../assets/screenshot/img3.png";
import img4 from "../assets/screenshot/img4.png";

const ScreenShotSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-800 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide uppercase">
          Home Pages
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Screenshot Cards */}
          {[img3, img4, img1, img2, ].map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg border border-white/20 bg-white bg-opacity-10 backdrop-blur-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Project ${index + 1} Screenshot`}
                className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300"
              />

              {/* Overlay Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold text-xl">
                  Project {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenShotSection;
