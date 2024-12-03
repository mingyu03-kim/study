import "./Main.css";

// 중괄호 내부에는 자바스크립트 표현식만 가능.
// 숫자, 문자열, 배열 값만 정상적으로 렌더링. (객체, boolean값은 불가)
const Main = () => {
    const user = {
        name: 'mingyu03.kim',
        isLogin: true
    }

    if (user.isLogin) {
        return <>
            <div className="logout">로그아웃</div>
        </>
    }
    return <div>로그인</div>;
}


export default Main;