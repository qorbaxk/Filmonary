import React from "react";
import {  useSelector } from "react-redux";
import AppRouter from "./AppRouter";


function App() {
 
  const {isLoggedIn} = useSelector((state)=>state.atr)

 

  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
