import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">👩‍💻 User Dashboard</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {loading ? (
        <div className="loader">Loading users...</div>
      ) : (
        <div className="card-grid">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          ) : (
            <p className="no-results">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
