import React, { useState } from "react";

const TextInput = ({
  label,
  inputName,
  inputType,
  iconClassName,
  textInputWidth,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const labelStyle = {
    position: "absolute",
    left: "15px",
    fontSize: "14px",
    letterSpacing: "0.1em",
    padding: "0 8px",
    borderRadius: "20px",
    color: isFocused || inputValue ? "#ffffff" : "#737373",
    backgroundColor: isFocused || inputValue ? "#ff6600" : "transparent",
    zIndex: 1,
    transition: "0.2s ease",
    transform:
      isFocused || inputValue ? "translate(-4px, -18px)" : "translateY(0)",
    fontSize: isFocused || inputValue ? "13px" : "15px",
    userSelect: "none",
  };

  const inputStyle = {
    position: "relative",
    outline: "none",
    flex: 1,
    border: "none",
    padding: "8px 5px",
    backgroundColor: "transparent",
    width: "100%",
    zIndex: 20,
  };

  const inputContainerStyle = {
    width: textInputWidth,
  };

  const containerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const iconContainer = {
    position: "relative",
  };

  const inputContainer = {
    position: "relative",
    width: "200%"
  };

  const inputFieldStyle = {
    width: "100%",
    position: "relative",
    outline: "none",
    display: "flex",
    flexDirection: "row-reverse",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    border: isFocused ? "2px solid #ff6600" : "2px solid #d9d9d9",
    padding: "0 5px",
    borderRadius: "6px",
  };

  const inputIconStyle = {
    color: isFocused || inputValue ? "#ff6600" : "#737373",
    padding: "0 5px",
  };

  return (
    <div style={inputContainerStyle}>
      <div
        style={containerStyle}
      >
        <label className="label" style={labelStyle}>
          {label}
        </label>
        <div style={inputFieldStyle}>
          <div style={iconContainer}>
            {iconClassName && (
              <i style={inputIconStyle} className={iconClassName}></i>
            )}
          </div>
          <div style={inputContainer}>
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            style={inputStyle}
            type={inputType}
            name={inputName}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
