import React, { useState } from "react";
import SocialButtons from "./SocialButtons";
import TextInput from "./TextInput";
import axios from "axios";

const FormContainer = ({ type, setIsRightPanelActive }) => {
  const isRegister = type === "register";

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = "http://localhost:8080/api/register";

    try {
      const response = await axios.post(endpoint, formValues);
      console.log("Server Response:", response.data);

      if (isRegister) {
        setFormValues({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
        });
      }
      setIsRightPanelActive(false)

    } catch (err) {
      console.error("Error:", err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`form-container ${
        isRegister ? "register-container" : "login-container"
      }`}
    >
      <form onSubmit={handleSubmit}>
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
                  value={formValues.firstname}
                  onChange={handleChange}
                />
                <TextInput
                  label="Last Name"
                  inputName="lastname"
                  inputType="text"
                  iconClassName="fas fa-user"
                  textInputWidth="100%"
                  value={formValues.lastname}
                  onChange={handleChange}
                />
              </div>
              <TextInput
                label="Username"
                inputName="username"
                inputType="text"
                iconClassName="fas fa-user"
                textInputWidth="100%"
                value={formValues.username}
                onChange={handleChange}
              />
              <TextInput
                label="Email"
                inputName="email"
                inputType="text"
                iconClassName="fas fa-envelope"
                textInputWidth="100%"
                value={formValues.email}
                onChange={handleChange}
              />
              <TextInput
                label="Password"
                inputName="password"
                inputType="password"
                iconClassName="fas fa-lock"
                textInputWidth="100%"
                value={formValues.password}
                onChange={handleChange}
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
                // value={formValues.}
                onChange={handleChange}
              />
              <TextInput
                label="Password"
                inputName="password"
                inputType="password"
                iconClassName="fas fa-lock"
                textInputWidth="300px"
                // value={formValues.}
                onChange={handleChange}
              />
              <div className="auth-options">
                <div>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <a href="#" className="pass-link">
                  Forgot your password?
                </a>
              </div>
            </>
          )}
        </div>
        <button className="live-button" type="submit">
          {isRegister ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
