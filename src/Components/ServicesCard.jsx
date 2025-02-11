import { useEffect, useState } from "react";

const ServicesCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-800 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide uppercase">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden p-6 transform hover:scale-105 transition duration-300 ease-in-out border border-white/20"
            >
              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl rounded-lg"></div>

              {/* Service Icon */}
              <div className="text-center mb-6 relative z-10">
                <img
                  src={service.icon}
                  alt={`${service.service} Icon`}
                  className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white text-center relative z-10">
                {service.service}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 text-center mt-3 relative z-10">
                {service.description}
              </p>

              {/* Example Services */}
              <ul className="mt-4 text-sm text-gray-200 relative z-10">
                {service.example_services.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-yellow-300">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <div className="mt-6 text-center relative z-10">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
