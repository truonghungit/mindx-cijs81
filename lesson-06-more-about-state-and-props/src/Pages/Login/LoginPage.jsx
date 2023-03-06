import { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";

export function LoginPage(props) {
  const login = (value) => {
    console.log("handle login", value);
  };

  return (
    <div className="login-page">
      <LoginForm appName={props.appName} onLogin={login} />
    </div>
  );
}
