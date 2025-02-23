import { useState } from "react";
import { Link } from "react-router-dom";

function Input({ placeholder, type = "text", className, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}

function Button({ children, className, onClick }) {
  return (
    <button
      className={`bg-blue-500 text-white px-5 py-3 rounded-md w-full hover:bg-blue-600 transition duration-300 shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SignUp() {
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarError, setAadhaarError] = useState("");

  const validateAadhaar = (value) => {
    const aadhaarRegex = /^\d{12}$/; // Ensures exactly 12 digits
    if (!aadhaarRegex.test(value)) {
      setAadhaarError("Aadhaar number must be exactly 12 digits.");
    } else {
      setAadhaarError("");
    }
  };

  const handleAadhaarChange = (e) => {
    const value = e.target.value;
    setAadhaar(value);
    validateAadhaar(value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-4">
      <div className="p-6 w-full max-w-md shadow-lg bg-white rounded-lg transform transition-transform duration-500 hover:scale-105">
        <div className="p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in">
            Sign Up
          </h2>
          <Input placeholder="Name" className="mb-3" />
          <Input placeholder="Email" type="email" className="mb-3" />
          <Input
            placeholder="Aadhaar Number"
            type="text"
            value={aadhaar}
            onChange={handleAadhaarChange}
            className={`mb-2 ${
              aadhaarError ? "border-red-500 focus:ring-red-500" : ""
            }`}
          />
          {aadhaarError && (
            <p className="text-red-500 text-sm mb-3">{aadhaarError}</p>
          )}
          <Input placeholder="Password" type="password" className="mb-4" />
          <Button className="mt-2">Sign Up</Button>
          <p className="mt-4 text-center text-sm">
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
