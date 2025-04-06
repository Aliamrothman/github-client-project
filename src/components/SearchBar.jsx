import React from "react";

const SearchBar = ({ username, setUsername, fetchUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) fetchUser();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
