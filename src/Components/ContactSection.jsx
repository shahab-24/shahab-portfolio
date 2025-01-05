import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shahabctg24@gmail.com?subject=Message from ${email}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink; // Open email client
    setEmail(""); // Clear email field
    setMessage(""); // Clear message field
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-800 text-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="input input-bordered w-full bg-white text-gray-800"
                required
              />
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="textarea textarea-bordered w-full bg-white text-gray-800"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full text-white mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/2 space-y-6 flex flex-col justify-center lg:items-start items-center text-center lg:text-left">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-400 mr-4" />
              <p>Chattogram, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-yellow-400 mr-4" />
              <p>shahabctg24@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-yellow-400 mr-4" />
              <p>01786609585</p>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="text-green-400 mr-4" />
              <p>01786609585</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
