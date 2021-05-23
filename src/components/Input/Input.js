import React from "react";
import "./input.scss";

export default function Input({
  type = "text",
  id,
  value = "",
  placeholder = "",
  handleChange,
  handleBlur,
  handleEnterKey,
  errorMessage,
  hasErrorMessage,
  displayHashtag,
  hashtagDisplayed,
  ...props
}) {
  return (
    <div className="input">
      <input
        className={
          hasErrorMessage && errorMessage
            ? "form-control is-invalid"
            : "form-control"
        }
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleEnterKey}
        {...props}
      />
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}