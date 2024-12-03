import { useState } from "react";

// 3. Custom Hook 직접 만들 수 있다.
// use~로 시작하는 method를 만들어야 함.
// 이런 hook들은 보통 폴더를 따로 파서 hooks라는 폴더에 모아두고,
// 새로 파일을 파는 것이 일반적이다.
function useInput() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
