import React from 'react';

function UserProfile({ userData }) {
  return (
    <div className="profile-container">
      <img src={userData.avatar_url} alt="User Avatar" width="150" />
      <h2>{userData.login}</h2>
      <p>{userData.bio || 'No bio available'}</p>
      <p>{userData.location || 'No location available'}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        View Profile on GitHub
      </a>
    </div>
  );
}

export default UserProfile;
