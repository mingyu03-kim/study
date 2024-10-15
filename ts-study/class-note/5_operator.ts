// function logMessage(value: string) {
//     console.log(value);
// }

// logMessage('hello');

// // 타입이 달라서 호출이 안된다.
// logMessage(100);


// Union type. 1개 이상의 타입 사용 가능
function logMessage(value: string | number) {
    console.log(value);
    if (typeof value === 'number') {
        // 이 경우 value는 number로 취급되어, value. 을 찍었을 때 number 관련 메서드만 나온다.
        // value.
    }

    if (typeof value === 'string') {
        // 이 경우 value는 string로 취급되어, value. 을 찍었을 때 string 관련 메서드만 나온다.
        // value.
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);


var seho2: string | number | boolean;