

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        {/* <div className="flex justify-center mb-4">
          <a
            href="#"
            className="text-xl font-semibold text-blue-400 hover:text-blue-600 mx-4"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xl font-semibold text-blue-400 hover:text-blue-600 mx-4"
          >
            About
          </a>
          <a
            href="#"
            className="text-xl font-semibold text-blue-400 hover:text-blue-600 mx-4"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-xl font-semibold text-blue-400 hover:text-blue-600 mx-4"
          >
            Contact
          </a>
        </div> */}
        <div className="mt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="text-purple-600">SHAHAB UDDIN</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
