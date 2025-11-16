import { useState } from 'react'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import { CalendarIcon } from '@heroicons/react/24/outline'

export default function PaymentPage() {
  const [defaultCard, setDefaultCard] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
        
        {/* SELECT A CARD */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">SELECT A CARD</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <CreditCardIcon className="w-6 h-6 text-gray-600" />  
               <p className="text-sm text-gray-600">MasterCard</p>
              <p className="text-lg font-semibold text-gray-800">•••• •••• •••• 4242</p>
            </div>
            <div className="flex items-center gap-2 border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <CreditCardIcon className="w-6 h-6 text-gray-600" /> 
              <p className="text-sm text-gray-600">VISA Debit</p>
              <p className="text-lg font-semibold text-gray-800">•••• •••• •••• 2894</p>
            </div>
          </div>
        </section>

        {/* ADD A NEW CARD */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">ADD A NEW CARD</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
              <input
                type="text"
                name="cardholder"
                placeholder="John Maker"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <div className="relative">
          {/* Icon on the left */}
           <CreditCardIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="cardnumber"
                placeholder="5126-5987-2214-7621"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              /> </div>
           
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                 <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM / YYYY"
                  className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                /></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  placeholder="123"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="defaultCard"
                checked={defaultCard}
                onChange={() => setDefaultCard(!defaultCard)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="defaultCard" className="ml-2 text-sm text-gray-700">
                Save this as your default payment method
              </label>
            </div>
           <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
           >
             <CreditCardIcon className="w-5 h-5 text-white" />
               Add Payment Method
            </button>
          </form>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center text-sm text-gray-600 mt-6">
          <a href="#" className="hover:underline">← Back</a>
          <div className="flex items-center gap-1">
            <span className="text-green-600">🔒</span>
            <span>Secure Connection</span>
          </div>
        </div>
      </div>
    </div>
  )
}
