import TodoItem from "./TodoItem";
import "./List.css";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // const getAnalyzedData = () => {
  //   console.log("getAnalyzedData");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((td) => td.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };
  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  // 두번째 배열은 deps, 의존성 배열이다.
  // 즉 두번째 인자의 배열에 들어가 있는 값들이 변경되었을 때만,
  // 첫번째 인자로 받은 콜백 함수를 실행한다.
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData");
    const totalCount = todos.length;
    const doneCount = todos.filter((td) => td.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 😂</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount} </div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {getFilteredData().map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
