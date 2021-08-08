import React, { Fragment, useState } from "react";
import './App.css';
import "./styles.css";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";

//hellloooo!!!!


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Fragment>
      
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      <InputTodo /><ListTodos />
        <div className="container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"></span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>

        </div>
        
      </div>

    </Fragment>
  );
}

export default App;
