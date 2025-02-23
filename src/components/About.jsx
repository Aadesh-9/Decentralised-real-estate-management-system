const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 md:px-12">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 opacity-20 blur-3xl"></div>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in z-10">
        {" "}
        {/* Added z-10 */}
        About Us
      </h1>
      <p className="text-lg md:text-xl opacity-80 text-center max-w-3xl animate-slide-up z-10">
        Our **Decentralized Real Estate Management System** ensures **secure,
        transparent, and efficient** property transactions powered by
        **blockchain technology**.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 animate-slide-in z-10">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition z-10">
          <h2 className="text-xl font-semibold">Secure Transactions</h2>
          <p className="mt-2 text-sm opacity-80">
            Blockchain ensures tamper-proof records and eliminates fraud.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition z-10">
          <h2 className="text-xl font-semibold">Smart Contracts</h2>
          <p className="mt-2 text-sm opacity-80">
            Automate transactions without intermediaries, reducing costs.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition z-10">
          <h2 className="text-xl font-semibold">Global Accessibility</h2>
          <p className="mt-2 text-sm opacity-80">
            Buy, sell, and manage properties from anywhere in the world.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
        Learn More
      </button>
    </div>
  );
};

export default About;
