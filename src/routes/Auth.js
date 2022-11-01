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
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
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
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
      !emailRegex.test(value) ? setEmailError(true) : setEmailError(false);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirm") {
      setConfirm(value);
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
        if (password === confirm) {
          data = await createUserWithEmailAndPassword(auth, email, password);
        }
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
        {emailError && (
          <span className="authError">이메일 형식이 잘못되었습니다</span>
        )}
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        />
        {newAccount ? (
          <input
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirm}
            onChange={onChange}
            className="authInput"
          />
        ) : null}
        {password !== confirm && newAccount && (
          <span className="authError">비밀번호가 일치하지 않습니다</span>
        )}
        <input
          type="submit"
          disabled={
            newAccount
              ? !email || !password || !confirm || password !== confirm
              : false
          }
          value={newAccount ? "Create Account" : "Log In"}
          className="authInput authSubmit"
        />
        {error && !newAccount && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? "Log In" : "Create Account"}
      </span>
      <span className="authSocial">Social LogIn</span>
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          <img width={45} src="img/google.svg" />
          google
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          github
        </button>
      </div>
    </div>
  );
};
export default Auth;
