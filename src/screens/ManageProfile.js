import React from "react";
import Nav from "../Nav";
import "./manageProfile.css";
import edit from "../assets/edit.png";

function ManageProfile() {
  return (
    <div>
      <Nav />
      <div className="profileContainer">
        <div className="profileSection">
          <h1>Manage Profiles</h1>
          <div className="profile-img">
            <div className="profile-body">
              <img
                src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABc0jTkOerx0tI4TfdbzDeSo-0rWVzoQ99XHdXB12g960QbEZb49eOHTiM656ruYYMc6MOqST_DNvPLv1uxIENbw2dMpE.png?r=535"
                alt=""
              />
              <p>Pam</p>
              <div className="edit-in">
                <img className="edit" src={edit} alt="" />
              </div>
            </div>
            <div className="profile-body">
              <img
                src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABYlSMWtPaFD1O-rnzo6a96sg5v8nOxLuqi7ULy4Fgk1P7vH8kocPWCGD0WV2YIjfLNnxCkRNd3IvkkrAErKdGKaGmEEn.png?r=a29"
                alt=""
              />
              <p>Jim Halpert</p>
              <div className="edit-in">
                <img className="edit" src={edit} alt="" />
              </div>
            </div>
            <div className="profile-body">
              <img
                src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaNSVf_1pbqwbDSgSn2MW5kZYbGQV_hHpNYXpZ1s8Qm0jRpYbb0-MIa1oEW4JoTPaTVmLpo-UU0sHULDzvcHS13AkcjG.png?r=88c"
                alt=""
              />
              <p>Dwight</p>
              <div className="edit-in">
                <img className="edit" src={edit} alt="" />
              </div>
            </div>
            <div className="profile-body">
              <img
                src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABQSezyRh9HBbj3UkKUZudkjvwyHbNYw4IXKHetsW-lDRuqmPsrYGjj9kTIJRtNh7koRtDIIT8xsZAl91WBmCo-2b5lbL.png?r=cea"
                alt=""
              />
              <p>Micheal Scott</p>
              <div className="edit-in">
                <img className="edit" src={edit} alt="" />
              </div>
            </div>
            <div className="profile-body">
              <img
                src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABfEfS070ckqk2cNOyk1qE04ONtZvmcai3L8LliVbA2XS1hx9bUCBXq2dhSIWFcFyWPpN6jnET1h11KUdBmYsLd4qzt73.png?r=8fb"
                alt=""
              />
              <p>Adi</p>
              <div className="edit-in">
                <img className="edit" src={edit} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageProfile;
