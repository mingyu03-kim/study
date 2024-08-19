import { useState, useRef } from "react";

// 밖에서 선언 시에는 잘 작동하는 것 처럼 보인다.
// 그러나 이렇게 되면, 이 컴포넌트를 여러 곳에서 사용했을 때
// 여러 곳에서 이 변수를 '공유' 해버린다.
// 즉 <Register /> 로 여러번 사용할 때,
// 이 count 변수의 값이 여러번 사용한 모든 곳에 공유되어 값이 계속 변동한다.
// let count = 0;

// 회원가입

// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // useRef로 생성한 변수들은 재 렌더링이 안되며,
  // 주로 vue의 ref처럼 컴포넌트나 DOM에 접근할 때 사용한다.
  // const refObj = useRef(0);
  // console.log(refObj);
  // console.log(refObj.current);

  const countRef = useRef(0);
  let count = 0;
  // 이랑 다른 점은 ?
  // => 이 컴포넌트가 state값이 수정되면 re-rendering이 된다
  // 이 모든 메서드가 다시 실행된다
  // => count가 다시 0으로 초기화된다!

  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    count++;
    console.log("count", count); // 이 값은 계속 1이다.
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  console.log("input~", input);

  const onSubmit = () => {
    if (input.name === "") {
      // focus
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          // 값은 증가하지만 렌더링이 되지는 않는다.
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        ref + 1
      </button> */}

      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option />
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
