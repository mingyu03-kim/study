// 타입스크립트의 추론?

let a; // any

// 일반적인 추론. 
// 변수의 값과 연산 결과를 활용하여 추론한다.
function getB(b = 10) {
    var c = 'abc';
    return b + c;
}


// 일반적인 추론 2.
// 제네릭을 사용, 값을 넘겨서 타입 초기화를 하면서 타입추론을 한다.
interface Dropdown2<T> {
    value: T;
    title: string;
}

var shoppingItem12: Dropdown2<string> = {
    value: '1234',
    title: 'asdf'
}

// 일반적인 추론 3.
//

interface DetailedDropdown<K> extends Dropdown2<K>{
    description: string;
    tag: K;
    // extends를 했기 때문에 아래의 코드가 같이 있다.
    // value: K;
    // title: string;
}

// typescript가 자동으로 ts server에 의해 값의 타입을 추론한다.
var detailedItem12: DetailedDropdown<string> = {
    title: 'abc',
    description: 'abc',
    value: 'wow',
    tag: 'asdfklasdf',
}



// BEST Common Type =모든 타입을 union 으로 묶어나간다. 
// 가장 근접한 타입으로 추론
var arr = [1,2,true, true, true, 'stra'];
