import React, { useState, useEffect } from "react";

function Queries() {
  const [queries, setQueries] = useState([]);
  const [reply, setReply] = useState("");

  // Fetch queries data (replace with actual data fetching logic)
  useEffect(() => {
    setQueries([
      { id: 1, customer: "John Doe", question: "What is the delivery time?" },
      { id: 2, customer: "Jane Smith", question: "Is there a discount on bulk orders?" },
    ]);
  }, []);

  const replyToQuery = (id) => {
    // Handle reply logic (send to server, etc.)
    console.log(`Reply to query ${id}: ${reply}`);
    setReply(""); // Clear the reply input
  };

  return (
    <div>
      <h3>Customer Queries</h3>
      <ul>
        {queries.map((query) => (
          <li key={query.id}>
            <span>{query.customer}: {query.question}</span>
            <input
              type="text"
              value={reply}
              placeholder="Your reply..."
              onChange={(e) => setReply(e.target.value)}
            />
            <button onClick={() => replyToQuery(query.id)}>Reply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Queries;
