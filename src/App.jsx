import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import "./components/styles.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
      setError("");
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <SearchBar
        username={username}
        setUsername={setUsername}
        fetchUser={fetchUser}
      />
      {error && <p className="error">{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
};

export default App;
