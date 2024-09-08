import React, { useState, useEffect } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  // Simulate fetching order data (replace with actual API call)
  useEffect(() => {
    const fetchOrders = async () => {
      // Simulated data, replace with your actual API call
      const orderData = [
        { id: 1, orderNo: "12345", name: "John Doe", total: "500", status: "Pending" },
        { id: 2, orderNo: "67890", name: "Jane Smith", total: "1200", status: "Confirmed" },
        { id: 3, orderNo: "54321", name: "Alex Johnson", total: "800", status: "Pending" }
      ];
      setOrders(orderData);
    };

    fetchOrders();
  }, []);

  // Function to accept an order
  const acceptOrder = (id) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: "Confirmed" } : order
    ));
  };

  // Function to cancel an order
  const cancelOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div>
      <h3>Orders</h3>
      <ul>
        {orders.length === 0 ? (
          <p>No orders available</p>
        ) : (
          orders.map((order) => (
            <li key={order.id}>
              <span>Order No: {order.orderNo} - {order.name} - Total: Rs. {order.total} - Status: {order.status}</span>
              {order.status === "Pending" && (
                <>
                  <button onClick={() => acceptOrder(order.id)} className="accept-btn">Accept</button>
                  <button onClick={() => cancelOrder(order.id)} className="cancel-btn">Cancel</button>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Orders;
