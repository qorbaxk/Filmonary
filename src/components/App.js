import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { authService } from "fBase";
import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import Loading from "./Loading";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName:
            user.displayName === null
              ? user.email.split("@")[0]
              : user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL:
            user.photoURL === null
              ? "https://occ-0-988-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA.png?r=e6e"
              : user.photoURL,
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  console.log("유저정보", userObj);

  return (
    <div>{init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : <Loading />}</div>
  );
}

export default App;
