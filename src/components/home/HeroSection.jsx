import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative bg-gray-900 h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
          filter: 'brightness(0.6)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Shop the Latest Tech Gear!
          </h1>
          <p className="text-xl mb-8">
            Discover amazing deals on premium electronics, accessories, and more.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;