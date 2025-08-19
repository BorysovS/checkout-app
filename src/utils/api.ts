import { Product } from '@/types/product';

export async function fetchProduct(productId: string): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) throw new Error('Failed to fetch products');
  const data = await response.json();
  return data.products;
}