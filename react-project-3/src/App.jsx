import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

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
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>

        {/* a 태그는 페이지의 깜빡임이 존재 => SPA 방식이 아니다. */}
        {/* <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/diary">DIary</a> */}
        <button onClick={onClickButton}>New 페이지로 이동</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
