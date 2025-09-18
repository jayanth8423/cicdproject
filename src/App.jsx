import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import CustomerDashboard from "./CustomerDashboard";
import Cart from "./Cart";
import ForgotPassword from "./ForgotPassword";
import CustomerHome from "./CustomerHome";

function App() {
  return (
    <Router basename="/grosery">
      <Routes>
        <Route path="/CustomerHome" element={<CustomerHome />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgetpass" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
