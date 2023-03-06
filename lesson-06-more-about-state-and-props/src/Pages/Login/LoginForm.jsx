import { useState } from "react";
function isEmpty(strValue) {
  return !strValue || strValue.trim() === "";
}

export default function LoginForm(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleFormValueChange = (event) => {
    const { name, value } = event.target; // HTMLInputElement

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("email ", email);
    // console.log("password ", password);
    console.log("formValue ", formValue);
    if (isEmpty(formValue.email)) {
      alert("Please enter email");
    }

    if (props.onLogin && typeof props.onLogin === "function") {
      props.onLogin(formValue);
    }

    // TODO
    // Call Ajax len server để login,
    // lấy user token => redirect home
  };

  return (
    <div className="card shadow login-card">
      <div className="card-body">
        <h1>{props.appName}, Welcome</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formValue.email}
              name="email"
              onChange={handleFormValueChange}
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formValue.password}
              onChange={handleFormValueChange}
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
