import { CheckoutClient } from '@/components';
import { fetchProduct } from '@/utils/api';




interface CheckoutPageProps {
  searchParams: { product_id?: string };
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const productId = searchParams.product_id;

  if (!productId) {
    return <div className="container mx-auto p-4">No product ID provided</div>;
  }

  try {
    const product = await fetchProduct(productId);
    return <CheckoutClient product={product} />;
  } catch (error) {
    return <div className="container mx-auto p-4">Error loading product: {(error as Error).message}</div>;
  }
}