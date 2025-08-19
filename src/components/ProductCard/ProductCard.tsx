import { Product } from '@/types/product';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Image width={400} height={800} src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
}