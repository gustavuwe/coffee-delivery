import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { CheckoutForm } from "./pages/Checkout/Form";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="checkout" element={<CheckoutForm />} />
      </Route>
    </Routes>
  )
}