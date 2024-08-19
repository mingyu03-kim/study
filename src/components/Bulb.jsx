import { useState } from "react";

const Bulb = () => {
  // state - 값, setState - 상태변화 함수
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
        )}
      </div>
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        전구 {light === "ON" ? "OFF" : "ON"}
      </button>
    </>
  );
};

export default Bulb;
