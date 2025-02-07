import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shahabctg24@gmail.com?subject=Message from ${email}&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink; // Open email client
    setEmail(""); // Clear email field
    setMessage(""); // Clear message field
    setStatus("Message ready to send via email.");
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-center lg:text-left mb-6 text-blue-300">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full bg-white/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
                required
              />
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="w-full bg-white/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 duration-300"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm text-green-400 mt-2">{status}</p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/2 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg flex flex-col justify-center items-center lg:items-start">
          <h3 className="text-3xl font-semibold text-blue-300 mb-6">Contact Information</h3>
          <div className="space-y-6 text-lg">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-400 mr-4 text-2xl" />
              <p>Chattogram, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-yellow-400 mr-4 text-2xl" />
              <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
                shahabctg24@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="text-green-400 mr-4 text-2xl" />
              <p className="hover:text-green-300 transition duration-300 cursor-pointer">
                +8801786609585
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
