import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
  fetch("https://5764ea60-34e5-4e01-9579-778b3da4b634-00-2zx6isncungi3.spock.replit.dev/api")



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
