import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';
import SearchBar from '../components/search/SearchBar';
import HeroSection from '../components/home/HeroSection';
import { getProducts, searchProducts } from '../services/productService';

function Home() {
  const [products, setProducts] = useState(getProducts());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (query) => {
    const results = query ? searchProducts(query) : getProducts();
    setProducts(results);
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'wearables', name: 'Wearables' },
  ];

  const filterByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const allProducts = getProducts();
    if (categoryId === 'all') {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter(product => product.category === categoryId));
    }
  };

  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar onSearch={handleSearch} />
        
        <div className="mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => filterByCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Home;