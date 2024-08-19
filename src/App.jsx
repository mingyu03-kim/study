import "./App.css";
import Register from "./components/Register";

// 리렌더링 진행 조건
// 1. state 변경
// 2. props 변경
// 3. 부모 component 변경

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;
