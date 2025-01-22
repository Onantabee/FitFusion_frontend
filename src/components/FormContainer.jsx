import React from "react";
import SocialButtons from "./SocialButtons";
import TextInput from "./TextInput";

const FormContainer = ({ type, handleTogglePanel }) => {
  const isRegister = type === "register";

  return (
    <div
      className={`form-container ${
        isRegister ? "register-container" : "login-container"
      }`}
    >
      <form>
        <div className="register-header">
          <h1>{isRegister ? "Create Account" : "Sign In"}</h1>
          <SocialButtons />
          <span>
            {isRegister
              ? "or use your email for registration:"
              : "or use your account:"}
          </span>
        </div>
        <div className={isRegister ? "signup-form" : "login-details"}>
          {isRegister ? (
            <>
              <div className="signup-form-names">
                <TextInput
                  label="First Name"
                  inputName="firstname"
                  inputType="text"
                  iconClassName="fas fa-user"
                  textInputWidth="100%"
                />
                <TextInput
                  label="Last Name"
                  inputName="lastname"
                  inputType="text"
                  iconClassName="fas fa-user"
                  textInputWidth="100%"
                />
              </div>
              <TextInput
                label="Username"
                inputName="username"
                inputType="text"
                iconClassName="fas fa-user"
                textInputWidth="100%"
              />
              <TextInput
                label="Email"
                inputName="email"
                inputType="text"
                iconClassName="fas fa-envelope"
                textInputWidth="100%"
              />
              <TextInput
                label="Password"
                inputName="password"
                inputType="password"
                iconClassName="fas fa-lock"
                textInputWidth="100%"
              />
            </>
          ) : (
            <>
              <TextInput
                label="Email"
                inputName="email"
                inputType="text"
                iconClassName="fas fa-envelope"
                textInputWidth="300px"
              />
              <TextInput
                label="Password"
                inputName="password"
                inputType="password"
                iconClassName="fas fa-lock"
                textInputWidth="300px"
              />
              <div className="auth-options">
                <div>
                  <input type="checkbox" />
                  <text>Remember me</text>
                </div>
                <a href="#" className="pass-link">
                  Forgot your password?
                </a>
              </div>
            </>
          )}
        </div>
        <button className="live-button" onClick={isRegister ? (e)=>{
          e.preventDefault()
        } : ()=>{
          e.preventDefault()
        }}>
          {isRegister ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
