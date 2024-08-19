// const Button = (props) => {
//     return (
//         <button style={{color: props.color}}>
//             {props.text} - {props.color.toUpperCase()}
//         </button>
//     )
// }
const onClickButton = (e) => {
  console.log(e);
  alert("test");
};

const Button = ({ text, color, children }) => {
  return (
    <button
      onClick={onClickButton}
      style={{ color: color }}
      //   onMouseEnter={onClickButton}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
