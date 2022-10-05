import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  //소셜 로그인
  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    const auth = getAuth();

    if (name === "google") {
      provider = new GoogleAuthProvider();
      //구글로그인
    } else if (name === "github") {
      provider = new GithubAuthProvider();
      //깃허브로그인
    }
    const data = await signInWithPopup(auth, provider);
  };

  //이메일 및 비밀번호 입력받기
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  //전송
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      const auth = getAuth();

      if (newAccount) {
        //가입
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        //로그인
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  //회원가입로그인 토글버튼
  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div className="authContainer">
      <form onSubmit={onSubmit} className="authForm">
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Log In"}
          className="authInput authSubmit"
        />
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? "Log In" : "Create Account"}
      </span>
      <span className="authSocial">Social LogIn</span>
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          <img width={45} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNGRkYiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgyNFYyNEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgICAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iIzQyODVGNCIgZD0iTTE2LjczNSA4LjczM2MwLS42MDYtLjA1NC0xLjE4OC0uMTU1LTEuNzQ3SDguNTM4djMuMzAzaDQuNTk2Yy0uMTk4IDEuMDY3LS44IDEuOTcxLTEuNzA0IDIuNTc3djIuMTQyaDIuNzZjMS42MTQtMS40ODYgMi41NDUtMy42NzUgMi41NDUtNi4yNzV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3IDcpIHRyYW5zbGF0ZSgzLjQ2MiAzLjQ2MikiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMzNEE4NTMiIGQ9Ik04LjUzOCAxNy4wNzdjMi4zMDYgMCA0LjIzOS0uNzY1IDUuNjUxLTIuMDY5bC0yLjc2LTIuMTQyYy0uNzY0LjUxMi0xLjc0Mi44MTUtMi44OS44MTUtMi4yMjQgMC00LjEwNy0xLjUwMi00Ljc3OC0zLjUySC45MDh2Mi4yMTJjMS40MDUgMi43OSA0LjI5MyA0LjcwNCA3LjYzIDQuNzA0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSB0cmFuc2xhdGUoMy40NjIgMy40NjIpIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkJCQzA1IiBkPSJNMy43NiAxMC4xNmMtLjE3LS41MTItLjI2Ny0xLjA1OS0uMjY3LTEuNjIyIDAtLjU2Mi4wOTctMS4xMS4yNjgtMS42MjJWNC43MDRILjkwOEMuMzMgNS44NTcgMCA3LjE2IDAgOC41MzhjMCAxLjM3OC4zMyAyLjY4Mi45MDggMy44MzVsMi44NTMtMi4yMTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3IDcpIHRyYW5zbGF0ZSgzLjQ2MiAzLjQ2MikiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNFQTQzMzUiIGQ9Ik04LjUzOCAzLjM5NmMxLjI1NCAwIDIuMzguNDMgMy4yNjQgMS4yNzdsMi40NS0yLjQ1QzEyLjc3MS44NDcgMTAuODQgMCA4LjUzNyAwIDUuMjAxIDAgMi4zMTMgMS45MTMuOTA4IDQuNzA0bDIuODUzIDIuMjEyYy42NzEtMi4wMTggMi41NTQtMy41MiA0Ljc3Ny0zLjUyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSB0cmFuc2xhdGUoMy40NjIgMy40NjIpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="/> 
          google
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          <FontAwesomeIcon icon={faGithub} size="2x"/>
          github
        </button>
      </div>
    </div>
  );
};
export default Auth;
