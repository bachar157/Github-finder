import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    const fetchUser = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const options = { headers: { Authorization: `Bearer ${token}` } };
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`, options);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setUser(null);
      }
    };

    fetchUser();
  }, [username]);

  const goBack = () => {
    navigate(-1);  // Navigate back to the previous route
  };

  return (
    <div className="user-info">
      {user ? (
        <>
          <img src={user.avatar_url} alt="User Avatar" style={{ width: 100, height: 100 }} />
          <div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </div>
        </>
      ) : (
        <p>No user data found</p>
      )}
      <button onClick={goBack} style={{ marginTop: '20px' }}>Go Back</button>
    </div>
  );
};

export default User;
