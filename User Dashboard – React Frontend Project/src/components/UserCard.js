import React from "react";
import "./UserCard.css"; // we’ll create this CSS file

function UserCard({ user }) {
  const formatWebsite = (url) => {
    if (!url) return null;
    if (!url.startsWith("http")) return `https://${url}`;
    return url;
  };

  const websiteLink = formatWebsite(user.website);

  return (
    <div className="user-card">
      <h3 className="user-name">{user.name}</h3>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>City:</strong> {user.address.city}</p>

      {websiteLink ? (
        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="view-btn">
          Visit Website
        </a>
      ) : (
        <button className="disabled-btn">No Website</button>
      )}
    </div>
  );
}

export default UserCard;
