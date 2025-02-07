import { useEffect, useState } from "react";

const ServicesCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => {
        setServices(data);
      });
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-800 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Services</h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-sm bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 rounded-lg overflow-hidden shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Service Icon */}
              <div className="text-center mb-6">
                <img
                  src={service.icon}
                  alt={`${service.service} Icon`}
                  className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-white"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-semibold text-white">{service.service}</h3>

              {/* Service Description */}
              <p className="text-gray-300 mt-3">{service.description}</p>

              {/* Example Services */}
              <ul className="mt-4 text-sm text-gray-200">
                {service.example_services.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-yellow-300">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full hover:bg-yellow-400 focus:outline-none transition duration-300 ease-in-out">
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
