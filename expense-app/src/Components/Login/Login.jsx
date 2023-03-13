import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

function isEmpty(strValue) {
  return !strValue || strValue.trim() === "";
}

export default function Login(props) {
  const { setLoggedInUser } = useAuth();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleFormValueChange = (event) => {
    const { name, value } = event.target; // HTMLInputElement

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEmpty(formValue.email)) {
      alert("Please enter email");
    }

    if (props.onLogin && typeof props.onLogin === "function") {
      props.onLogin(formValue);
    }

    if (formValue.email === "admin@gmail.com") {
      setLoggedInUser({ email: formValue.email });
    }
    // TODO
    // Call Ajax len server để login,
    // lấy user token => redirect home
  };

  return (
    <div className="card shadow login-card">
      <div className="card-body">
        <h1>Login</h1>
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
