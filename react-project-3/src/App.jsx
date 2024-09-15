import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-08-15").getTime(),
    emotionId: 1,
    content: "1번 일기다.",
  },
  {
    id: 2,
    createdDate: new Date("2024-09-15").getTime(),
    emotionId: 2,
    content: "2번 일기다.",
  },
  {
    id: 4,
    createdDate: new Date("2024-09-17").getTime(),
    emotionId: 4,
    content: "4번 일기다.",
  },
  {
    id: 3,
    createdDate: new Date("2024-10-15").getTime(),
    emotionId: 3,
    content: "3번 일기다.",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
  return state;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(1);
  // 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        createdDate,
        emotionId,
        content,
        id: idRef.current++,
      },
    });
  };

  // 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <button onClick={() => onCreate(new Date().getTime(), 1, "추가테스트")}>
        추가테스트
      </button>

      <button
        onClick={() =>
          onUpdate(1, new Date().getTime(), 1234, "1234수정테스트")
        }
      >
        수정
      </button>
      <button onClick={() => onDelete(1)}>삭제</button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
