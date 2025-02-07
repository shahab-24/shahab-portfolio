import React from "react";

// Import images from the assets folder
import img1 from "../assets/screenshot/img1.png";
import img2 from "../assets/screenshot/img2.png";
import img3 from "../assets/screenshot/img3.png";
import img4 from "../assets/screenshot/img4.png";

const ScreenShotSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-800 text-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Project Screenshots
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Project 1 */}
          <div className="relative">
            <img
              src={img1}
              alt="Project 1 Screenshot"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Project 1</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative">
            <img
              src={img2}
              alt="Project 2 Screenshot"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Project 2</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative">
            <img
              src={img4}
              alt="Project 3 Screenshot"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Project 3</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative">
            <img
              src={img3}
              alt="Project 4 Screenshot"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Project 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenShotSection;
