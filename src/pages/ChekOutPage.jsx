import { HomeIcon, CreditCardIcon } from '@heroicons/react/24/outline'

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
        
        {/* Shipping Address */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Shipping Address</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p>John Maker</p>
            <p>123 Plae Grond Street</p>
            <p>Vermont, California</p>
            <p>United States of America</p>
          </div>
        </section>

        {/* Payment Method */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Payment Method</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p className="flex items-center gap-2">
              <CreditCardIcon className="w-5 h-5 text-gray-500" />
              Mastercard ending in 1252
            </p>
            <p>$53.21 gift card balance</p>
            <p>Billing address same as Shipping Address</p>
          </div>
        </section>

        {/* Review Your Bag */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Review Your Bag</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded-md">
              <h3 className="font-medium text-gray-800">Dell XPS 13</h3>
              <p className="text-sm text-gray-600">Color: White</p>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
              <p className="text-sm text-gray-600">Rating: ★★★★★ 4.5 / 5</p>
              <p className="text-sm font-semibold text-gray-800">Price: $1799.99 × 1</p>
            </div>
            {/* Add more items here */}
          </div>
        </section>

        {/* Order Summary */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p>Items: $5849.37</p>
            <p>Shipping: $6.99</p>
            <p>Estimated GST: $760.41</p>
            <p>Gift Card: $0.00</p>
            <p className="font-semibold text-gray-900">Order Total: $6609.78</p>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button className="text-sm text-blue-600 hover:underline">← Back</button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            <CreditCardIcon className="w-5 h-5 text-white" />
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  )
}