import useInput from "../hooks/useInput";

// hook 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 사용가능
// const state = useState(); // => Invalid hook call

// 2. 조건부로 호출 불가.
// if (true) {
//   const state = useState();
// }

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
