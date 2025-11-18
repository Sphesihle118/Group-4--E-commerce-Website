import { useState } from 'react'
import {House} from "lucide-react";

export default function ShippingAddress() {
  const [defaultAddress, setDefaultAddress] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
        {/* shipping address */}
        <section>
          <form className="space-y-4">
            <div>
              <h1>Shipping Name</h1>
              <input
                type="text"
                name="shippingName"
                placeholder="John Maker"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

         <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Street Name</label>
            <div className="relative">
               <House className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                 type="text"
                 name="streetName"
                 placeholder="123 Plea Grond Street"
                className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
              </div>
            </div>

            <div>
              <h1>City</h1>
              <input
                type="text"
                name="city"
                placeholder="Vermont"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <h1>State/Province</h1>
              <input
                type="text"
                name="state"
                placeholder="California"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <h1>Country</h1>
              <input
                type="text"
                name="country"
                placeholder="United States of America"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="defaultAddress"
                checked={defaultAddress}
                onChange={() => setDefaultAddress(!defaultAddress)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="defaultAddress" className="ml-2 text-sm text-gray-700">
                Save this as your default shipping address
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              <House className="w-5 h-5 text-white" />
              Add Address
            </button>
          </form>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center text-sm text-gray-600 mt-6">
          <a href="/payment" className="hover:underline">← Back</a>
            <a href="/success" className="hover:underline">Done →</a>
          <div className="flex items-center gap-1">
            <span className="text-green-600">🔒</span>
            <span>Secure Connection</span>
          </div>
        </div>
      </div>
    </div>
  )
}
