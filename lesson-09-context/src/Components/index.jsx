import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export function LoginForm() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="border">
      <h2>Login form component</h2>
      <div>theme: {theme}</div>
    </div>
  );
}

export function Login() {
  return (
    <div className="border">
      <p>Login component</p>
      <LoginForm />
    </div>
  );
}

export function ProductItem() {
  return (
    <>
      <p>Product item component</p>
    </>
  );
}

export function ProductList() {
  return (
    <div className="border">
      <p>Product list component</p>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

export function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`border ${theme === "light" ? "light" : "dark"}`}>
      <p>Home component </p>
      <div>Theme: {theme}</div>
      <ProductList />
    </div>
  );
}

export function SwitchTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>{theme}</button>
    </>
  );
}

export function Footer() {
  return (
    <div className="border">
      <p>Footer component</p>
      <SwitchTheme />
    </div>
  );
}
