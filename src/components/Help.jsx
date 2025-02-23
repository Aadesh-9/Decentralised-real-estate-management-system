const Help = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 md:px-12">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 opacity-20 blur-3xl"></div>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in z-10">
        Help & Support
      </h1>
      <p className="text-lg md:text-xl opacity-80 text-center max-w-3xl animate-slide-up z-10">
        Need help? Browse our FAQs or contact our **24/7 support team** for
        assistance.
      </p>

      {/* FAQ Section */}
      <div className="mt-10 w-full max-w-3xl animate-slide-in z-10">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 hover:scale-105 transition">
          <h2 className="text-xl font-semibold">How do I register?</h2>
          <p className="mt-1 text-sm opacity-80">
            Click on the **Sign Up** button and follow the steps to create your
            account.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Is my data secure?</h2>
          <p className="mt-1 text-sm opacity-80">
            Yes! We use **blockchain technology** for full security and
            transparency.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">How can I contact support?</h2>
          <p className="mt-1 text-sm opacity-80">
            You can **email us** or use the **live chat** feature on our
            platform.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-10 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
        Contact Support
      </button>
    </div>
  );
};

export default Help;
