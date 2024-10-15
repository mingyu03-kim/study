// 인터페이스는 확장이 가능하다.
// interface Person {
//     name: string;
//     age: number;    
// }

type Person1 = {
    name: string;
    age: number;
}

// type은 마우스 hover시 바로 설명이 나옴.
// 그러나 type 별칭에 정해진 필드 이외의 값은 절대 사용할 수 없음. (확장이 불가하다.)
// 따라서 type 별칭보다는 interface를 자주 사용하자.
var seho1: Person1 = {
    name: '세호',
    age: 30,
}


type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string, title: string; done: boolean };


// 긴 코드를 변수처럼 타입을 설정해서 쓸 수 있음.
// 별칭을 부여하는 것.
function getTodo(todo: Todo) {

}


