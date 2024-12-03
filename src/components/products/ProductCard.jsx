import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiEye } from 'react-icons/fi';
import ReactStars from 'react-rating-stars-component';
import { addToCart } from '../../store/cartSlice';
import { useState } from 'react';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72"
          />
        </Link>
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {product.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          <ReactStars
            count={5}
            value={product.rating}
            size={20}
            edit={false}
            activeColor="#ffd700"
          />
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            {product.discount > 0 ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-900">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.price}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            onClick={() => handleAddToCart(product)}
          >
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="bg-gray-100 text-gray-600 p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            <FiEye size={20} />
          </Link>
        </div>
        {addedToCart && (
          <div className="mt-2 text-sm text-green-600">Added to Cart!</div>
        )}
      </div>
    </motion.div>
  );
}

export default ProductCard;
