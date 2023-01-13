import React from "react";

function SignUp() {
  return (
    <div className="wrapper">
      <div className="register-container">
        <div className="left-panel">
          <div className="register-content">
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD////V1dWWlpZ0dHTPz89qamrh4eGQkJDk5OTR0dGtra3Y2NgWv+ptAAABL0lEQVR4nO3cMQ7CQAxFwQCBQOD+56Wms2RHxjDvAKs/vbXLqaR1qW+tmbbUPENISJiIMBghIWEiwmCEhISJCIMREhImIgxGSEiYiDAYISFhIsJghISEiQiDERISJiIMRkhImIgwGCEhYSLCYISEhIkIgxESEiYiDPb7wtsBwlvNtCLhdq5vq5lWJPziCOdHOD/C+RHOj3B+hPMjnB/h/AjnRzg/wvkRzo9wfoTzI5wf4fz+QHip6P44YNrjXrKt6KrgeoDwWrStJkJCwv4ICQn7IyQk7I+QkLA/QkLC/ggJCfsjJCTsj5CQsD9CQsL+CAkJ+yMkJOyPkJCwP0JCwv4ICQn7IyQk7G8/QLh3oz56vsq/oH09u1GSJEmSJEmSJEmSJEmSJEmSJEmSJP1rbwwaXQZE0kwUAAAAAElFTkSuQmCC"
                alt="logo"
                className="register-logo"
              />
            </div>
            <div>
              <h1 className="register-title">Creation starts here</h1>
              <h2 className="register-subtitle">
                Access 4,704,489 free, high-resolution photos you can’t find
                anywhere else
              </h2>
            </div>
            <div>
              <p class="register-credit">Uploaded 1 day ago by Pierre Lemos</p>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="join-form">
            <div className="row">
              <div className="center-block">
                <div className="text-center">
                  <h4>Join Unsplash</h4>
                  <p>
                    {"Already have an account? "}
                    <a href="/login" className="sublink">
                      Login
                    </a>
                  </p>
                </div>

                <div className="form-group">
                  <a href="https://www.facebook.com" className="login-fb-Btn">
                    Login with Facebook
                  </a>
                </div>

                <div className="form-separator">
                  <p>or</p>
                </div>

                <div className="form">
                  <form className="new-user" action="/join">
                    <div className="row">
                      <div className="col-xs-6">
                        <div className="form-group">
                          <label htmlFor="user_first_name">First name</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>

                      <div className="col-xs-6">
                        <div className="form-group">
                          <label htmlFor="user_first_name">Last name</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="user_first_name">Email</label>
                      <input className="form-control" type="text" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="user_first_name">Username </label>
                      <span className="text-decor">
                        (only letters, numbers, and underscores)
                      </span>
                      <input className="form-control" type="text" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="user_first_name">Password </label>
                      <span className="text-decor">(min. 8 char)</span>
                      <input className="form-control" type="text" />
                    </div>

                    <div className="form-group">
                      <a className="login-sub" href="/">
                        Join
                      </a>
                    </div>

                    <div className="form-group text-center">
                      <p className="text-secondary">
                        {"By joining, you agree to the "}
                        <a className="sublink" href="https://unsplash.com/terms">
                          Terms
                        </a>
                        {" and "}
                        <a className="sublink" href="https://unsplash.com/privacy">
                          Privacy Policy.
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
