import {CircleCheck, House} from "lucide-react";


export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center space-y-6">
        
        {/* Success Icon */}
        <CircleCheck className="mx-auto w-16 h-16 text-green-500" />

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-gray-800">Order Placed Successfully!</h1>
        <p className="text-gray-600 text-sm">
          Thank you for your purchase. Your order has been confirmed and is being processed.
        </p>

        {/* Order Summary (static) */}
        <div className="text-left text-sm text-gray-700 space-y-1">
          <p><span className="font-medium">Order Number:</span> #TXN-20251115-001</p>
          <p><span className="font-medium">Shipping to:</span> John Maker, 123 Plae Grond Street, California</p>
          <p><span className="font-medium">Total:</span> $6609.78</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            <House className="w-5 h-5 text-white" />
            Go to Home
          </button>
          <button className="text-blue-600 hover:underline text-sm">View Order Details</button>
        </div>
      </div>
    </div>
  )
}
