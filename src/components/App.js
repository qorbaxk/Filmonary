import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { authService } from "fBase";
import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        const uid = user.uid;
        console.log(uid);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return <div>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "로딩중.."}</div>;
}

export default App;
