import React, { useState } from "react";
import { useCart } from "../../components/Layouts/CartContext"; // Adjust the path as necessary
import "../../styles/Cart.css";

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    // Implement the logic to place the order here (e.g., send the order to a server)

    // For demonstration purposes, we'll just log the order details and clear the cart
    console.log("Order placed with details:", cartItems);

    // Clear the cart after placing the order
    cartItems.forEach(item => removeFromCart(item.id));

    // Reset checkout state
    setIsCheckout(false);
  };

  return (
    <div className="cart-details">
      <h2>Your Cart</h2>
      {isCheckout ? (
        <div className="checkout-details">
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <span>Rs. {item.price.toFixed(2)} x {item.quantity} = Rs. {(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: Rs. {getCartTotal().toFixed(2)}</h3>
          </div>
          <form onSubmit={handlePlaceOrder}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="payment">Payment Method:</label>
              <select id="payment" name="payment" required>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                {/* Add more payment options if needed */}
              </select>
            </div>
            <button type="submit" className="place-order-button">Place Order</button>
          </form>
        </div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <span>{item.title}</span>
                    <span>Rs. {item.price.toFixed(2)}</span>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <h3>Total: Rs. {getCartTotal().toFixed(2)}</h3>
              </div>
              <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
