import {NotFoundPage} from "./pages/NotFound.jsx";
import {HomePage} from "./pages/Home.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaymentPage from './PaymentPage'
import ShippingAddress from './AddAddress'
import CheckOutPage from './CheckOutPage'
import OrderSuccess from './OrderSuccess'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<ShippingAddress />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<OrderSuccess />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
