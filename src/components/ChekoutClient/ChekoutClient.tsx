'use client';

import { useState } from 'react';
import { calculateDiscount } from '@/utils/calculateDiscount';
import { Product } from '@/types/product';
import { ProductCard } from '../ProductCard';
import { PromoForm } from '../PromoForm';
import { OrderSummary } from '../OrderSummary';

import { Bounce, toast } from "react-toastify";
import Link from 'next/link';



type CheckoutClientProps = {
  product: Product;
}

export const CheckoutClient = ({ product }: CheckoutClientProps) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const handleApplyPromo = (code: string) => {
    setPromoCode(code);
    const discount = calculateDiscount(product.price, code);
  
    if (discount > 0) {
        setAppliedDiscount(discount);
      toast.success("✅ Promo code success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    } else {
        setAppliedDiscount(0);
      toast.error("❌ Error promo code!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
  };
  const subtotal = product.price;
  const total = subtotal - appliedDiscount;

  return (
      <div className="container mx-auto p-4">
          <Link
        href="/"
        className="text-pink-200 hover:underline mb-4 inline-block bg-blue-900 p-2  rounded shadow-md focus:bg-blue-400 hover:bg-blue-400 transition-all duration-300"
        aria-label="Back to home"
      >
        Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <ProductCard product={product} />
        </div>
        <div className="flex-1">
          <PromoForm onApply={handleApplyPromo} />
          <OrderSummary subtotal={subtotal} discount={appliedDiscount} total={total} />
        </div>
      </div>
    </div>
  );
}