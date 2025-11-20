import { useState } from 'react'
import { Calendar, CreditCard } from 'lucide-react'

export default function PaymentPage() {
  const [defaultCard, setDefaultCard] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* SELECT A CARD */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">SELECT A CARD</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-lg p-4 bg-white hover:shadow-sm cursor-pointer">
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-gray-600" />
                <p className="text-sm text-gray-600">MasterCard</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">•••• •••• •••• 4242</p>
            </div>
            <div className="flex items-center justify-between rounded-lg p-4 bg-white hover:shadow-sm cursor-pointer">
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-gray-600" />
                <p className="text-sm text-gray-600">VISA Debit</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">•••• •••• •••• 2894</p>
            </div>
          </div>
        </section>

        {/* ADD A NEW CARD */}
        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">ADD A NEW CARD</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
              <input
                type="text"
                name="cardholder"
                placeholder="John Maker"
                className="mt-1 w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="cardnumber"
                  placeholder="5126-5987-2214-7621"
                  className="w-full pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM / YYYY"
                    className="w-full pl-12 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  placeholder="123"
                  className="mt-1 w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="defaultCard"
                checked={defaultCard}
                onChange={() => setDefaultCard(!defaultCard)}
                className="h-4 w-4 accent-green-600 focus:ring-green-500 rounded"
              />
              <label htmlFor="defaultCard" className="ml-2 text-sm text-gray-700">
                Save this as your default payment method
              </label>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              <CreditCard className="w-5 h-5 text-white" />
              Add Payment Method
            </button>
          </form>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center text-sm text-gray-600 mt-6">
          <a href="/checkout" className="hover:underline">← Back</a>
          <a href="/shipping" className="hover:underline">Add address →</a>
          <div className="flex items-center gap-1 text-green-600 font-medium">
            <span>🔒</span>
            <span>Secure Connection</span>
          </div>
        </div>
      </div>
    </div>
  )
}

