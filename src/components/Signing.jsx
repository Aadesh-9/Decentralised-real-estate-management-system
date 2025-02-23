import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Input({ placeholder, type = "text", className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}

// Define prop types
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

function Button({ children, className, onClick }) {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Define prop types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="p-6 w-full max-w-md shadow-lg bg-white rounded-lg transform transition-transform duration-500 hover:scale-105">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in">Sign In</h2>
          <Input placeholder="Email" className="mb-2" />
          <Input placeholder="Password" type="password" className="mb-4" />
          <Button className="w-full">Sign In</Button>
          <p className="mt-2 text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="p-6 w-full max-w-md shadow-lg bg-white rounded-lg transform transition-transform duration-500 hover:scale-105">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in">Sign Up</h2>
          <Input placeholder="Name" className="mb-2" />
          <Input placeholder="Email" className="mb-2" />
          <Input placeholder="Aadhaar Number" className="mb-2" />
          <Input placeholder="Password" type="password" className="mb-4" />
          <Button className="w-full">Sign Up</Button>
          <p className="mt-2 text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
