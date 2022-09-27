import React, { useState } from "react";
import "./Signin.css";

function Signin() {

    const [user, setUser] = useState({
        username: "", password : ""
    });


    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }


    const postData = async(e) => {
        e.preventDefault();

        console.log(user.username);

        const {username, password} = user;

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        })

        const resp = await res.json();

        alert(resp.message);
    }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={postData}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
                type="text"
              name="username"
              value={user.username}
              onChange={handleInputs}
              className="form-control mt-1"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={handleInputs}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
