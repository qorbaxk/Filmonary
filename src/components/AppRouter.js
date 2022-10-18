import { Route, Routes } from "react-router-dom";
import React from "react";
import Navigation from "./Navigation";
import Home from "../routes/Home";
import Movies from "../routes/Movies";
import MovieDetail from "../routes/MovieDetail";
import Profile from "../routes/Profile";
import Auth from "../routes/Auth";
import Footer from "./Footer";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <div className="main">
      <Navigation isLoggedIn={isLoggedIn} />
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route
          path="/profile"
          element={<Profile userObj={userObj} refreshUser={refreshUser} />}
        />
      </Routes>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default AppRouter;
