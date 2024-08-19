// 컴포넌트는 반드시 첫 글자를 대문자로.
// 안그러면 react 내부에서 컴포넌트로 인정하지 않음.
// 변수형으로도 선언 가능
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

function Header() {
    return (
        <header>
            <h1>header</h1>
        </header>
    );
}


export default Header;