// Simulated product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'High-quality wireless headphones with noise cancellation.',
    category: 'electronics',
    rating: 4.5,
    reviewCount: 128,
    discount: 20,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Feature-rich smartwatch with health tracking capabilities.',
    category: 'wearables',
    rating: 4.2,
    reviewCount: 89,
    discount: 0,
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Durable laptop backpack with multiple compartments.',
    category: 'accessories',
    rating: 4.8,
    reviewCount: 245,
    discount: 15,
  },
];

export const getProducts = () => products;

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};