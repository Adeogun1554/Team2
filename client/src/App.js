import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/api/reviews`)




    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => setMessage("Failed to connect to backend."));
}, []);


  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🚀 Welcome to SkillSwap+</h1>
      <p>🔁 Backend says: <strong>{message}</strong></p>
    </div>
  );
}

export default App;
