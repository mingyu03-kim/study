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
function logText1(text: string) {
    console.log(text);
    text.split('').reverse().join();
    return text;   
}

logText1('a');
logText1(10);
logText1(true);

function logNumber(text: number) {
    console.log(text);
    return text;   
}

logNumber('a');
logNumber(10);
logNumber(true);