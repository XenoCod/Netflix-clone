import React, { useState } from "react";
import "./Login.css";
import SignInScreen from "./SignInScreen";
import arrow from "../assets/down-arrow.png";
import Footer from "../Footer";
import "../footer.css";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        <img
          className="loginScreen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen-btn">
          Sign In
        </button>
        <div className="login-gradient" />
      </div>

      <div className="loginScreen-body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, Tv series and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login-getstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
            <div className="moreSignUpScreen">
              <div className="moreScreenSection">
                <div className="moreSectionInfo">
                  <h1>Enjoy on your TV.</h1>
                  <h2>
                    Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                    Blu-Ray players, and more.
                  </h2>
                </div>

                <video autoPlay muted loop>
                  <source
                    type="video/mp4"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  />
                </video>
              </div>

              <div className="moreScreenSection">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt=""
                />
                <div className="moreSectionInfo">
                  <h1>Download your shows to watch offline.</h1>
                  <h2>
                    Save your favorites easily and always have something to
                    watch.
                  </h2>
                </div>
              </div>
              <div className="moreScreenSection">
                <div className="moreSectionInfo">
                  <h1>Watch Everywhere</h1>
                  <h2>
                    Stream unlimited movies and TV shows on your phone, tablet,
                    laptop, and TV without paying more.
                  </h2>
                </div>
                <video autoPlay muted loop>
                  <source
                    type="video/mp4"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  />
                </video>
              </div>

              <div className="faqSection">
                <h1>Frequently Asked Questions</h1>
                <div className="faqContainer">
                  <div className="question">
                    <h2>What is NetFlix</h2>
                    <img src={arrow} alt="" />
                  </div>
                  <div className="question">
                    <h2>How much does NetFlix cost?</h2>
                    <img src={arrow} alt="" />
                  </div>
                  <div className="question">
                    <h2>Where can I watch?</h2>
                    <img src={arrow} alt="" />
                  </div>
                  <div className="question">
                    <h2>How do I cancel my subscription?</h2>
                    <img src={arrow} alt="" />
                  </div>
                  <div className="question">
                    <h2>What can I watch on Netflix?</h2>
                    <img src={arrow} alt="" />
                  </div>
                  <div className="question">
                    <h2>How to change the language?</h2>
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
