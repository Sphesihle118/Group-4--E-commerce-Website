import {NotFoundPage} from "./pages/NotFound.jsx";
import {HomePage} from "./pages/Home.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaymentPage from './pages/PaymentPage'; // Corrected the import statement/file path 
import ShippingAddress from './pages/ShippingAddress'; // Corrected the import statement/file path 
import CheckOutPage from './pages/CheckOutPage.jsx'; // Corrected the import statement/file path 
import OrderSuccess from './pages/OrderSuccess'; // Corrected the import statement/file path 

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<ShippingAddress />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/checkout" element={<CheckOutPage />} /> {/* Corrected the route path, CheckOutPage was spelled incorrectly*/}
            <Route path="/success" element={<OrderSuccess />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
