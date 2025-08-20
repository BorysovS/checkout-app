import { Suspense } from 'react';

import Link from 'next/link';
import { fetchProducts } from '@/utils/api';

import Image from 'next/image';

export default async function HomePage() {
  try {
    const products = await fetchProducts();
    return (
      <Suspense fallback={<Loading />}>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-md bg-slate-500 focus:bg-slate-400 hover:scale-105 hover:bg-slate-400 transition-all duration-300">
                <Image priority src={product.thumbnail} alt={product.title} width={200} height={200} className="w-full h-48 object-contain mb-4" />
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-shadow-amber-100 truncate">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                <Link
                  href={`/checkout?product_id=${product.id}`}
                  className="bg-blue-500 text-white p-2 rounded w-full block text-center mt-4 focus:bg-blue-950 hover:bg-blue-700 transition-all duration-300"
                >
                  Checkout
                </Link>
              </div>
            ))}
          </div>
        </div>
        
      </Suspense>
    );
  } catch (error) {
    return <div className="container mx-auto p-4">Error loading products: {(error as Error).message}</div>;
  }
}

function Loading() {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  );
}
