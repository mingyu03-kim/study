import { useReducer } from "react";

// reducer = 변환기.
// 상태를 실제로 변화시키는 역할할
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
    case "DECREASE":
      return state + action.data;
  }
}

const Exam = () => {
  // dispatch: 상태 변화가 있어야 한다는 사실을 알리는 함수.
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // dispatch의 인수 : 상태가 어떻게 변화되길 원하는 지를 기록.
    // => 액션 객체 라고 부른다.
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    // dispatch의 인수 : 상태가 어떻게 변화되길 원하는 지를 기록.
    // => 액션 객체 라고 부른다.
    dispatch({
      type: "DECREASE",
      data: -1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
