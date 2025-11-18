import {NotFoundPage} from "./pages/NotFound.jsx";
import {HomePage} from "./pages/Home.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaymentPage from "./pages/PaymentPage.jsx"
import ShippingAddress from "./pages/ShippingAddress.jsx"
import CheckOutPage from "./pages/CheckOutPage.jsx"
import OrderSuccess from "./pages/OrderSuccess.jsx"
import {Productpage} from "./pages/itemPage.jsx";
import {CheckItems} from "./pages/checkbagItemsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<HomePage />} />

        {/* Other pages */}
        <Route path="/Item" element={<Productpage />} />
        <Route path="/check-bag" element={<CheckItems />} />
        <Route path="/shipping" element={<ShippingAddress />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/success" element={<OrderSuccess />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App