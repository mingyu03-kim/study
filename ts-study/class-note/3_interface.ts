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

// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}


var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // a

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    sth: /abc/,
    css: /\.css$/,
    jsFile: /\.js$/,
}

// 오류
// obj['cssFile'] = 'a';

// value는 String이 확정이다.
Object.keys(obj).forEach(function(value) {
})


// 인터페이스 확장
interface Person {
    name: string,
    age: number;
}

interface Developer extends Person {
    language: string;
}

var dev: Developer = {
    name: 'asdf',
    age: 15,
    language: 'asdf'
}