import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 2번쨰 파라미터인 배열(의존성 배열, dependency array - deps)에 들어있는 값이 변경 시,
  // 1번쨰 파라미터인 콜백이 실행된다.
  // useEffect(() => {
  //   console.log("count::", count, " input::::", input);
  // }, [count, input]); // deps에는 여러개 값이 들어갈 수 있음.

  // life cycle =>
  // 1. mount - deps에 값이 아무것도 없으면, mount시에만 실행하고 끝난다.
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. update - reRendering => deps를 생략하면, 리렌더링 시에 계속 실행된다.
  useEffect(() => {
    if (!isMount.current) {
      // 마운트 시 첫 실행을 막는 동작.
      isMount.current = true;
      return;
    }
    console.log("update");
  });

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
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
