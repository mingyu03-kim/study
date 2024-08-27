import TodoItem from "./TodoItem";
import "./List.css";
import { useState } from "react";

const List = ({ todos }) => {
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

  return (
    <div className="List">
      <h4>Todo List 😂</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {getFilteredData().map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default List;
