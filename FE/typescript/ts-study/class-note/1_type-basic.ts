// js 문자열 선언
const str = "hello";

// ts 문자열 선언
let str2: string = "hello";

// ts 숫자
let num: number = 10;

// ts 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Cpat", "Thor", 10];

// ts 배열 리터럴 선언
let items: number[] = [1, 2, 3];

// ts 튜플 - 특정 인덱스에 타입을 정할수도 있다.
let address: [string, number] = ["gangnam", "pangyo"];

// ts 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };

// 구체적으로 객체의 키 값에 대한 타입도 정할 수 있다.
let person: { name: string; age: number } = {
  name: "thor",
  age: 100,
};

// ts 진위값
let show: boolean = true;
