import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cart.css";

function Cart() {
  const { cart, setCart, increment, decrement } = useContext(CartContext);
  const navigate = useNavigate();

  // Get logged-in user email from localStorage (set it after login)
  const email = localStorage.getItem("email");

  const totalBill = cart.reduce(
    (sum, item) => sum + item.quantity * item.pprs,
    0
  );

  // ✅ Fetch cart from backend on page load
  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8080/cart/${email}`)
        .then((res) => {
          if (res.data && res.data.length > 0 && res.data !== "Customer not found!") {
            // Backend returns a string like: "Milk x 2 = ₹40; Bread x 1 = ₹30;"
            const items = res.data.split(";").filter(Boolean).map((entry, index) => {
              const [productPart, pricePart] = entry.split("= ₹");
              const [name, qtyPart] = productPart.trim().split(" x ");
              return {
                pid: index + 1,
                pname: name.trim(),
                quantity: parseInt(qtyPart.trim(), 10),
                pprs: parseFloat(pricePart.trim()) / parseInt(qtyPart.trim(), 10), // unit price
              };
            });
            setCart(items);
          }
        })
        .catch((err) => console.error("Error fetching cart:", err));
    }
  }, [email, setCart]);

  // ✅ Place order (save cart to backend)
  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!email) {
      alert("Please login first!");
      return;
    }

    // Prepare payload
    const orders = cart.map((item) => ({
      email: email,
      productName: item.pname,
      quantity: item.quantity,
      price: item.quantity * item.pprs,
    }));

    try {
      const response = await fetch("http://localhost:8080/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orders),
      });

      if (response.ok) {
        const result = await response.text();
        alert(result); // "Orders saved successfully!"
        navigate("/payment");
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong while placing the order.");
    }
  };

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        🛒 Your cart is empty
      </h2>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="text-center text-2xl font-bold mb-6">🛍️ Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.pid} className="cart-item-card">
            <h3 className="text-lg font-semibold capitalize">{item.pname}</h3>
            <p className="text-green-700 font-medium">Price: ₹{item.pprs}</p>
            <div className="quantity-control">
              <button onClick={() => decrement(item.pid)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increment(item.pid)}>+</button>
            </div>
            <p>Total: ₹{item.quantity * item.pprs}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <h3 className="text-xl font-bold text-gray-800">
          🧾 Total Bill: ₹{totalBill}
        </h3>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full"
        >
          ✅ Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
