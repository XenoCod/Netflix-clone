import React from "react";
import "./planScreen.css";

function PlanScreen() {
  return (
    <div className="planScreen">
      <div className="planScreen-plans">
        <div className="planScreen-plans-info">
          <div className="plan">
            <div className="standard-info">
              <h5>Netflix Standard</h5>
              <h6>1080p</h6>
            </div>
            <button>Subscribe</button>
          </div>

          <div className="plan">
            <div className="basic-info">
              <h5>Netflix Basic</h5>
              <h6>480p</h6>
            </div>
            <button>Subscribe</button>
          </div>

          <div className="plan">
            <div className="basic-info">
              <h5>Netflix Premium</h5>
              <h6>4k+HDR</h6>
            </div>
            <button className="current">Current Package</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanScreen;
