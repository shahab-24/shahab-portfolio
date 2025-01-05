import React, { useEffect, useState } from 'react';

// Import icons or use font-awesome icons
// import { FaReact, FaNode, FaShoppingCart, FaGithub, FaServer, FaCloud, FaLaptopCode, FaCode } from 'react-icons/fa';

// const services = [
//   {
//     service: "Frontend Development",
//     description: "Building modern, responsive, and user-friendly interfaces with clean, maintainable code.",
//     technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "DaisyUI"],
//     example_services: [
//       "Responsive website design",
//       "Interactive UI/UX development",
//       "Single Page Applications (SPAs)"
//     ],
//     icon: <FaLaptopCode />
//   },
//   // Include other services similarly...
// ];

const ServicesCard = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {services.map((service, index) => (
        <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 bg-white transition transform hover:scale-105 duration-300 ease-in-out">
          <div className="text-center text-4xl mb-4">
            <img src={service.icon} alt="" />
            </div>
            
            {/* {service.icon} </div>*/}
          <h3 className="text-xl font-semibold">{service.service}</h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
          <ul className="mt-4 text-sm text-gray-600">
            {service.example_services.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
