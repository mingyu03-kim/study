// 이후에 반복되는 타입들을 일관적으로 사용할 수 있음..
interface User {
    age: number;
    name: string;
}

// 변수에 활용하는 인터페이스
let seho: User = {
    age: 33,
    name: 'asdf',
}

// 함수에 활용
function getUser(user: User): User {
    console.log(user);
    return user;
}

// 변수가 하나만 빠져도 오류가 나온다.
// const capt = {
//     name: 'captain',
// }

const capt = {
    age: 57,
    name: 'captain',
}

getUser(capt);