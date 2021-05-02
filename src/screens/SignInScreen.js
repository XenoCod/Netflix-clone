import React, { useRef } from "react";
import { auth } from "../firebase";
import "./signInScreen.css";
import { useHistory } from "react-router";

function SignInScreen() {
  const emailRef = useRef(null); //Pointing as a refrenece to the value that the user enters
  const passwordRef = useRef(null); //Pointing as a refrenece to the value that the user enters

  //Register the user for a first time login
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // checking whether the user is actuallu signed in or not.
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={register}>
          Sign In
        </button>
        <h4>
          <span className="signIn-gray">New to Netflix? </span>
          <span className="signIn-link" onClick={signIn}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
