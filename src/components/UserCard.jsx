import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <button>View Profile on GitHub</button>
      </a>
    </div>
  );
};

export default UserCard;
