import { useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <Editor />
        <List />
      </div>
    </>
  );
}

export default App;
