import { useState, useEffect } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 2번쨰 파라미터인 배열(의존성 배열, dependency array - deps)에 들어있는 값이 변경 시,
  // 1번쨰 파라미터인 콜백이 실행된다.
  useEffect(() => {
    console.log("count::", count, " input::::", input);
  }, [count, input]); // deps에는 여러개 값이 들어갈 수 있음.

  const onClickButton = (value) => {
    setCount(count + value);
    // console.log("count::", count, " input::::", input);
    // 비동기로 값이 업데이트된다.
    // 따라서 이 콘솔의 값은, setCount가 실행되기 전의 값이 찍힘.
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
