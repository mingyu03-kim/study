// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText();


// 파라미터의 타입을 지정하면서 넘긴다.
// => 함수를 호출하는 시점에 타입이 정해진다.
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

logText('하이');

// 직접 명시해도 된다. 이 경우 해당 타입으로만 넘길 수 있음.
logText<string>('하이');



// 제네릭의 장점?
// => 함수로는 계속 타입을 다른 것이라고 선언해줘야 하므로
// 중복 선언이 필요하다.
// function logText1(text: string) {
//     console.log(text);
//     text.split('').reverse().join();
//     return text;   
// }

// logText1('a');
// logText1(10);
// logText1(true);

// function logNumber(text: number) {
//     console.log(text);
//     return text;   
// }

// logNumber('a');
// logNumber(10);
// logNumber(true);


// Union type은 ?
// 문제 1. string, number가 동시에 접근가능한 method만 허용.
// function logText1(text: string | number) {
//     console.log(text);
//     return text;   
// }

// 문제 2. 아래 두개의 타입이 보장이 안된다.
// const a = logText1('a');
// const b = logText1(10);


// 제네릭.
// 함수이름 옆 T => 파라미터의 타입을 정의.
function logText1<T>(text: T): T {
    console.log(text);
    return text;   
}

// string으로 고정됨.
const a = logText1<string>('a');
a.endsWith('1');
// number로 고정됨
const b = logText1(10);
b.toFixed(2);
const c = logText1<boolean>(true);
c.valueOf();



interface Dropdown {
    value: string;
    selected: boolean;
}

// value는 String만 가능하다.
// const obj: Dropdown = {value: 1, selected: true};
const obj1: Dropdown = {value: 'str', selected: true};

// 인터페이스에 제네릭 선언하기
interface Dropdown2<T> {
    value: T;
    selected: boolean;
}


// value 타입은 선언 시 지정이 가능하다.
const obj3: Dropdown2<number> = {value: 1, selected: true};
const obj4: Dropdown2<string> = {value: 'str', selected: true};


// 제네릭의 타입제한
function logTextLength<T>(text: T[]): T[] {
    // 타입스크립트 입장에서는 T가 뭔지를 모른다.
    // => 타입에 대한 힌트를 줘야 한다.
    console.log(text.length);
    return text;
}

logTextLength(['hi']);



// 제네릭 타입제한 2
interface LengthType {
    length: number;   
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength2('asdf');
// logTextLength2(10); // 불가 - length 속성이 없기때문.
logTextLength2({length: 10, ttt: 50});



// 제네릭 타입제한 3 - keyOf
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// keyof => 타입을, shoppingItem 의 키값 중 하나여야 한다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('asdf');
// getShoppingItemOption({as: 10});
getShoppingItemOption("price");
