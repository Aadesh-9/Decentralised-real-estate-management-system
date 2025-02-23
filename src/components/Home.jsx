import { motion } from "framer-motion";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col justify-center items-center text-center py-20 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Real Estate Hub
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Find your dream property with ease. Secure, verified, and trusted
          listings.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 px-6 md:px-16 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <FeatureCard
          title="Verified Properties"
          desc="All properties are verified with blockchain security."
        />
        <FeatureCard
          title="Secure Transactions"
          desc="Buy and sell with confidence through decentralized verification."
        />
        <FeatureCard
          title="24/7 Support"
          desc="Our team is here to assist you anytime, anywhere."
        />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const FeatureCard = ({ title, desc }) => {
  return (
    <motion.div
      className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm mt-2">{desc}</p>
    </motion.div>
  );
};

export default Home;
