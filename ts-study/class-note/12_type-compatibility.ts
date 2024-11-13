// 타입 호환

// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer2: Developer;
var person2: Person;

person2 = developer2;
// developer2 = person2; // developer에는 skill이 더 있어서 person을 할당받을 수 없다.




// 함수
var add = function(a: number) {
    // console.log(a);
}

var sum = function(a: number, b: number) {
    // return a+b;
}

// sum은 파라미터가 2개, add는 1개. => sum의 b 파라미터를 undefined할 수 있으므로 이건 가능하다.
sum = add;

// add = sum; 이건 불가. add에서 b를 지원할 수 없다.


// 제네릭
interface Empty<T> {
    // 
}

var empty1: Empty<string> = undefined;
var empty2: Empty<number> = undefined;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    // 
}

