export const calculateDiscount = (price: number, promoCode: string): number => {
    const promoDiscounts: Record<string, number> = {
      DISCOUNT10: 0.1,
      DISCOUNT20: 0.2,
      DISCOUNT30: 0.3,
    };
    const discountPercentage = promoDiscounts[promoCode.toUpperCase()] || 0;
    return price * discountPercentage;
  }