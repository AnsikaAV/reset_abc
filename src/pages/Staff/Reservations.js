import React, { useState, useEffect } from "react";

function Reservations() {
  const [reservations, setReservations] = useState([]);

  // Fetch reservation data (replace with actual data fetching logic)
  useEffect(() => {
    // Fetch reservation data from server
    setReservations([
      { id: 1, name: "John Doe", date: "2024-09-10", status: "Pending" },
      { id: 2, name: "Jane Smith", date: "2024-09-12", status: "Confirmed" },
    ]);
  }, []);

  const acceptReservation = (id) => {
    setReservations(reservations.map((res) =>
      res.id === id ? { ...res, status: "Confirmed" } : res
    ));
  };

  const cancelReservation = (id) => {
    setReservations(reservations.filter((res) => res.id !== id));
  };

  return (
    <div>
      <h3>Reservations</h3>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <span>{reservation.name} - {reservation.date} - Status: {reservation.status}</span>
            {reservation.status === "Pending" && (
              <button onClick={() => acceptReservation(reservation.id)}>Accept</button>
            )}
            <button onClick={() => cancelReservation(reservation.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
