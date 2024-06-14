import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${input}`);
  };

  return (
    <div>
      <h1>GitHub Finder</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
