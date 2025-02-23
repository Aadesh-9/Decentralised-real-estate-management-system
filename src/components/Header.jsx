import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">🏡 Real Estate</Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex flex-row justify-between items-center space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-200 transition duration-300">
            Home
          </Link>

          <Link
            to="/properties"
            className="hover:text-gray-200 transition duration-300"
          >
            Properties
          </Link>

          <Link
            to="/profile"
            className="hover:text-gray-200 transition duration-300"
          >
            Profile
          </Link>

          <Link
            to="/about"
            className="hover:text-gray-200 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/help"
            className="hover:text-gray-200 transition duration-300"
          >
            Help
          </Link>
        </div>

        {/* Sign In Button */}
        <Link
          to="/signin"
          className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
