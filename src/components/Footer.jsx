import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-6 mt-10 animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">🏡 Real Estate</h2>
          <p className="text-sm mt-2">Your trusted property partner.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/help" className="hover:underline">
            Help
          </Link>
          <Link to="/properties" className="hover:underline">
            Properties
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right mt-4 md:mt-0 text-sm">
          © {new Date().getFullYear()} Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
