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


/// union type 특징
interface Develop {
    name: string;
    skill: string;
}

interface Pers {
    name: string;
    age: number;
}

function askSomeone(someone: Develop | Pers) {
    // union type이라, 공통된 속성(에러가 안 나도록 보장되는 속성)만 접근이 가능하다.
    // someone.age = 12;
    someone.name = 'asdf';
}

// 상대적으로 union이 많이 쓰이는 이유. 
// 아래 두 가지 방식은 모두 오류가 나지 않음.
askSomeone({name: '디펠', skill: '웹개발'});
askSomeone({name: '디펠', age: 15});


// intersection type
// never 속성 = 절대 가능할 수 없는 타입.
var capt: string & number & boolean;

// Develop과 Pers의 모든 속성을 갖고 있다고 판단한다.
function askSomeone1(someone: Develop & Pers) {
    someone.name;
    someone.skill;
    someone.age;
}

// intersection 속성은, 반드시 Develop & Pers의 **모든** 속성을 갖고 있어야 함.
askSomeone1({name: '디펠', skill: '웹개발', age: 160});
askSomeone1({name: '디펠', age: 15, skill: 'test'});