import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/Todo";
import Hobby from "./Components/Hobby";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Todo />

        {/* <Hobby /> */}
      </div>
    </>
  );
}

export default App;
