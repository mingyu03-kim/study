import "./TodoItem.css";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(todo.id);
  };

  const onClickDeleteButton = () => {
    onDelete(todo.id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        type="checkbox"
        checked={todo.isDone}
      />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
