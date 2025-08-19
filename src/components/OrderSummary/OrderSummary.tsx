type OrderSummaryProps = {
    subtotal: number;
    discount: number;
    total: number;
  }
  
  export const OrderSummary = ({ subtotal, discount, total }: OrderSummaryProps) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount:</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    );
  }