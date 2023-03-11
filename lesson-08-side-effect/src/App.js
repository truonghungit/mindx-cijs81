import { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function Post(props) {
  const handleDocumentClick = () => {
    console.log("event handler");
    // tốn tg 5s
    // call api tru tien cua users
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    console.log("addEventListener");

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      console.log("clean up event listener");
    };
  });

  console.log("render component");

  return (
    <div>
      Post ID: {props.id}
      <p style={{ height: "200px" }}>
        lorem ipsum dolor sit amet, consectetur adip
      </p>
      <p style={{ height: "200px" }}>
        lorem ipsum dolor sit amet, consectetur adip
      </p>
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Call Effect");
    const timer = setInterval(() => {
      console.log("update count");
      setCount((prevValue) => prevValue + 1);
    }, 1000);

    // mỗi 1000ms
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{count}</div>;
};

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const elementRef = useRef();

  useEffect(() => {
    document.title = "App " + count + show;
    // console.log("update page title in effect function");
  }, [count, show]);

  /**
   * 1. Không set dependency array: undefined:
   * => effect chạy khi component được render lần đầu và mỗi lần component render lại
   * 2. Set dependency array = []: empty array
   * => effect chạy 1 lần duy nhất khi component được render
   * 3. Set dependency array = [function, state, props]
   * => effect chạy 1 khi component được render, và chạy
   * mỗi khi component render lại + những giá tri ở trong array thay đổi
   */

  return (
    <div className="App">
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>CLick me</button>
      <br />
      <button onClick={() => setShow(!show)}>Toggle Post </button>

      <br />
      <Counter />
    </div>
  );
}

export default App;
