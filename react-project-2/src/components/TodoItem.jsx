import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="TodoItem">
      <input readOnly type="checkbox" checked={todo.isDone} />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
