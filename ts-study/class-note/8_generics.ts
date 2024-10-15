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
