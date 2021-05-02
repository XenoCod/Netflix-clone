import React from "react";
import "./footer.css";
import github from "./assets/github.png";
import linkedIn from "./assets/linkedin.png";
import insta from "./assets/instagram.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="social-row">
          <a
            href="https://github.com/XenoCod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.instagram.com/ur_new_neighbour/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-singh-8430771a8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="" />
          </a>
        </div>
        <div>
          <p className="para">Audio and Subtitles</p>
          <p className="para">Media Centre</p>
          <p className="para">Privacy</p>
          <p className="para">Contact us</p>
        </div>

        <div>
          <p className="para">Audio Description</p>
          <p className="para">Investor Relaions</p>
          <p className="para">Legal Notices</p>
        </div>
        <div>
          <p className="para">Help Centre</p>
          <p className="para">Jobs</p>
          <p className="para">Cookie Preferences</p>
        </div>
        <div>
          <p className="para">Gift Cards</p>
          <p className="para">Terms of Use</p>
          <p className="para">Corporate Information</p>
        </div>
      </div>
      <div className="highlight">
        <p>Made with ♥ by Aditya Singh</p>
      </div>
    </div>
  );
}

export default Footer;
