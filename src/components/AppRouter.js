import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from '../pages/Search';
import User from '../pages/User';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
