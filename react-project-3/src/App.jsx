import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-image";
// 1. "/" : 모든 일기 조회하는 홈페이지
// 2. /new : 새로운 일기 작성
// 3. /diary : 일기 상세 조회 페이지
function App() {
  // navigate로 이동할 수도 있다. (vue의 router.push 방식으로 보여짐)
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      {/* public 폴더에 있는 이미지들.
      그러나 여기에 이미지를 넣으면, 브라우저에서 캐싱을 하지 못한다. 
      따라서 이미지가 많지 않을 경우, assets 폴더에 저장하자.*/}
      {/* <div>
        <img src="/emotion1.png" />
        <img src="/emotion2.png" />
        <img src="/emotion3.png" />
        <img src="/emotion4.png" />
        <img src="/emotion5.png" />
      </div> */}

      {/* 직접 import한 이미지들.
      브라우저에서 캐싱을 할 수 있도록, import를 하는 것이 낫다. 
      그러나 이미지가 너무 많을 경우, 그냥 public에서 관리하는 것이 나을 수도 있다.*/}

      <Header
        title={"Header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />

      <Button
        text={"123"}
        type={"default"}
        onClick={() => console.log("asdfasdf")}
      />
      <Button
        text={"123"}
        type={"positive"}
        onClick={() => console.log("asdfasdf")}
      />
      <Button
        text={"123"}
        type={"negative"}
        onClick={() => console.log("asdfasdf")}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
