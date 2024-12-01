import { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';

export function useProduct(id) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = getProducts();
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  return product;
}