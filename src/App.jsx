import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import CustomerDashboard from "./CustomerDashboard";
import Cart from "./Cart";
import ForgotPassword from "./ForgotPassword";
import CustomerHome from "./CustomerHome";

function App() {
  return (
    <Router basename="/grossery-app">
      <Routes>
        {/* Default route → redirect to CustomerHome */}
        <Route path="/" element={<Navigate to="/customerhome" replace />} />

        {/* Main routes */}
        <Route path="/customerhome" element={<CustomerHome />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/customerdashboard" element={<CustomerDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgetpass" element={<ForgotPassword />} />

        {/* Catch-all for unknown URLs */}
        <Route path="*" element={<Navigate to="/customerhome" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
