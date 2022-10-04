import { Route, Routes } from "react-router-dom";
import React from 'react';
import Navigation from "./Navigation";
import Home from "../routes/Home";
import Movies from "../routes/Movies";
import MovieDetail from "../routes/MovieDetail";
import Profile from "../routes/Profile";
import Auth from "../routes/Auth";
import Footer from "./Footer";



const AppRouter = ({isLoggedIn}) => {
  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        {isLoggedIn ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Auth />} />
        )}
      </Routes>
      <Footer />
    </div>
  )
}

export default AppRouter;