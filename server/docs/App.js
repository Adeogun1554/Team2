import { useEffect, useState } from "react";
import { fetchListings } from "./services/api";
import CreateListing from "./components/CreateListing";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings().then(setListings).catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>SkillSwap+ Listings</h1>

      <CreateListing />

      <ul>
        {listings.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> [{item.type}] — {item.description} (by {item.user})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
