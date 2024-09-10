import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
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

// props가 바꼈을 때만 리렌더링 하는데,
// props가 object라서.. 내부 값이 같다고 해도 deep하게 비교하지 않기 떄문에
// props가 바꼈다고 판단하게 된다.
// => memo를 적용한다고 해서 메모가 되지 않는다.
// 1. useCallback
// 2. callback을 두번째 인수로 전달한다.
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라 props의 변경 여부를 판단한다.
//   // true return => props가 변경되지 않았으므로 리렌더링 X
//   // false => props가 변경되었다고 판단 => 리렌더링
//   return (
//     prevProps.todo.id === nextProps.todo.id &&
//     prevProps.todo.isDone === nextProps.todo.isDone &&
//     prevProps.todo.content === nextProps.todo.content &&
//     prevProps.todo.date === nextProps.todo.date
//   );
// });

export default memo(TodoItem);
