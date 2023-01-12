import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="loginPage">
        <div className="welcome">
          <NavLink to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD////V1dWWlpZ0dHTPz89qamrh4eGQkJDk5OTR0dGtra3Y2NgWv+ptAAABL0lEQVR4nO3cMQ7CQAxFwQCBQOD+56Wms2RHxjDvAKs/vbXLqaR1qW+tmbbUPENISJiIMBghIWEiwmCEhISJCIMREhImIgxGSEiYiDAYISFhIsJghISEiQiDERISJiIMRkhImIgwGCEhYSLCYISEhIkIgxESEiYiDPb7wtsBwlvNtCLhdq5vq5lWJPziCOdHOD/C+RHOj3B+hPMjnB/h/AjnRzg/wvkRzo9wfoTzI5wf4fz+QHip6P44YNrjXrKt6KrgeoDwWrStJkJCwv4ICQn7IyQk7I+QkLA/QkLC/ggJCfsjJCTsj5CQsD9CQsL+CAkJ+yMkJOyPkJCwP0JCwv4ICQn7IyQk7G8/QLh3oz56vsq/oH09u1GSJEmSJEmSJEmSJEmSJEmSJEmSJP1rbwwaXQZE0kwUAAAAAElFTkSuQmCC"
              alt="logo image"
              className="login-logo"
            />
          </NavLink>
          <h1 >Login</h1>
          <p>Welcome back.</p>
        </div>
        <div className="form-group">
          <a href="https://www.facebook.com" className="login-fb-Btn">Login with Facebook</a>
        </div>
        <div className="form-separator">
          <p>OR</p>
        </div>
        <form action="/login">
          <div className="form-group">
            <label >Email</label>
            <input className="form-control" type="email" name="" id="" />
          </div>
          <div>
            <div className="label-justify">
              <label htmlFor="">Password</label>
              <span>
                <a href="https://unsplash.com/users/password/new" className="sublink">Forgot your password?</a>
              </span>
            </div>
            <input className="form-control" type="password" name="" id="" />
          </div>
          <div className="form-group">
            <input className="login-sub" type="submit" name="commit" value="Login" />
          </div>
        </form>
        <div className="login-cta">
          <span>Don't have an account? </span>
          <NavLink to="/join" className="sublink" >Join Insplash</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
