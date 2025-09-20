import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import CustomerDashboard from "./CustomerDashboard";
import Cart from "./Cart";
import ForgotPassword from "./ForgotPassword";
import CustomerHome from "./CustomerHome";

function App() {
  return (
    <Router basename="/gro">
      <Routes>
        {/* Default route → redirect to CustomerHome */}
        <Route path="/" element={<Navigate to="/CustomerHome" replace />} />

        <Route path="/CustomerHome" element={<CustomerHome />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgetpass" element={<ForgotPassword />} />

        {/* Catch-all route for unknown URLs */}
        <Route path="*" element={<Navigate to="/CustomerHome" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
