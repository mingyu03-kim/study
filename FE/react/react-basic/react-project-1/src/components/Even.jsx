import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 콜백 함수 안에서 return으로 새로운 함수를 반환한다
    // => 클린업, 정리함수.
    // useEffect가 끝날 떄 실행이 된다.
    return () => {
      console.log("unMount");
    };
  }, []);
  return (
    <div>
      <h1>짝수</h1>
    </div>
  );
};

export default Even;
