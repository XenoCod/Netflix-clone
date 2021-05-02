import React from "react";
import "./profileScreen.css";
import Nav from "../Nav";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import PlanScreen from "./PlanScreen";
import { useHistory } from "react-router";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABQSezyRh9HBbj3UkKUZudkjvwyHbNYw4IXKHetsW-lDRuqmPsrYGjj9kTIJRtNh7koRtDIIT8xsZAl91WBmCo-2b5lbL.png?r=cea"
            alt=""
          />

          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans (Curent Plan: premium)</h3>
              <PlanScreen />
              <div className="buttons">
                <button onClick={() => history.push("/")} className="proceed">
                  Let's Go
                </button>

                <button
                  onClick={() => auth.signOut()}
                  className="profileScreen-signOut"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
