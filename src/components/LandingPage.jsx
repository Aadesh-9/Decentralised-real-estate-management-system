import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToSigningPage = () => {
    navigate("/signing");
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 opacity-30 blur-3xl"></div>

      {/* Platform Information */}
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Decentralized Real Estate Management
        </h1>
        <p className="text-lg md:text-xl opacity-80 mb-6 animate-slide-up">
          Secure, transparent, and efficient property transactions powered by
          blockchain.
        </p>
      </div>

      {/* Property Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 animate-slide-in">
        <div className="relative group bg-blue-700 rounded-lg shadow-lg p-4 transition-transform transform group-hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">
            Smart Contracts Verified
          </h3>
          <p className="text-sm opacity-80">
            Ensure authenticity and reliability in property transactions.
          </p>
        </div>
        <div className="relative group bg-green-700 rounded-lg shadow-lg p-4 transition-transform transform group-hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">
            Secure Ownership Transfers
          </h3>
          <p className="text-sm opacity-80">
            Experience seamless and secure ownership transitions.
          </p>
        </div>
        <div className="relative group bg-purple-700 rounded-lg shadow-lg p-4 transition-transform transform group-hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">
            Blockchain-Powered Transactions
          </h3>
          <p className="text-sm opacity-80">
            Leverage blockchain technology for transparent transactions.
          </p>
        </div>
      </div>

      {/* Sign In Button */}
      <button
        onClick={() => {
          navigateToSigningPage();
        }}
        className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 animate-bounce"
      >
        Sign In
      </button>
    </div>
  );
};

export default LandingPage;
