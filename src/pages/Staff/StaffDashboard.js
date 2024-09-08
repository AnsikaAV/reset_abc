import React, { useState } from "react";
import Reservations from "./Reservations";
import Orders from "./Orders";
import Queries from "./Queries";
import { exportPDF } from "../../components/Layouts/exportPDF"; // Utility function for exporting PDF
import "../../styles/AdminDashboard.css"; 

function StaffDashboard() {
  const [activeTab, setActiveTab] = useState("reservations");

  const [reservations, setReservations] = useState([
    { id: 1, name: "John Doe", date: "2024-09-10", status: "Pending", guests: 2, specialRequest: "None" },
    { id: 2, name: "Jane Smith", date: "2024-09-12", status: "Confirmed", guests: 4, specialRequest: "Birthday" },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, orderNo: "12345", name: "John Doe", total: 500, date: "2024-09-08", status: "Delivered" },
    { id: 2, orderNo: "67890", name: "Jane Smith", total: 750, date: "2024-09-09", status: "Pending" },
  ]);

  const acceptReservation = (id) => {
    setReservations(reservations.map(res =>
      res.id === id ? { ...res, status: "Confirmed" } : res
    ));
  };

  const cancelReservation = (id) => {
    setReservations(reservations.filter(res => res.id !== id));
  };

  const exportReservationsPDF = () => {
    exportPDF(reservations, "Reservations_Report", ["Name", "Date", "Status", "Guests", "Special Request"]);
  };

  const exportOrdersPDF = () => {
    exportPDF(orders, "Orders_Report", ["Order No", "Name", "Total", "Date", "Status"]);
  };

  return (
    <div className="admin-dashboard">
      <h2>Staff Dashboard</h2>
      <div className="admin-tabs">
        <button onClick={() => setActiveTab("reservations")} className={activeTab === "reservations" ? "active" : ""}>Reservations</button>
        <button onClick={() => setActiveTab("orders")} className={activeTab === "orders" ? "active" : ""}>Orders</button>
        <button onClick={() => setActiveTab("queries")} className={activeTab === "queries" ? "active" : ""}>Queries</button>
      </div>

      <div className="tab-content">
        {activeTab === "reservations" && (
          <>
            <Reservations 
              reservations={reservations} 
              acceptReservation={acceptReservation} 
              cancelReservation={cancelReservation} 
            />
            <button onClick={exportReservationsPDF} className="export-button">Export Reservations</button>
          </>
        )}

        {activeTab === "orders" && (
          <>
            <Orders orders={orders} />
            <button onClick={exportOrdersPDF} className="export-button">Export Orders</button>
          </>
        )}

        {activeTab === "queries" && <Queries />}
      </div>
    </div>
  );
}

export default StaffDashboard;
