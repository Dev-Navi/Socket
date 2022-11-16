import React, { useState } from "react";
import './login.css'
import {Link} from 'react-router-dom'


export default function Login() {
    const [user,setUser] = useState("")
    const [room,setRoom] = useState("")
  return (
    <section className="ftco-section" 
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Login #10</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <h3 className="mb-4 text-center">Have an account?</h3>
              <form action="#" className="signin-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required=""
                    onChange={(e)=>setUser(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    id="password-field"
                    type="text"
                    className="form-control"
                    placeholder="Room"
                    required=""
                    onChange={(e)=>setRoom(e.target.value)}
                  />
                  <span
                    toggle="#password-field"
                    className="fa fa-fw fa-eye field-icon toggle-password"
                  ></span>
                </div>
                <div className="form-group">
                    <Link onClick={(e)=>(!user || !room) ? e.preventDefault() : null} 
                     to={`/chat?name=${user}&room=${room}`}>
                  <button
                    type="submit"
                    className="form-control btn btn-primary submit px-3"
                  >
                    Sign In
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
