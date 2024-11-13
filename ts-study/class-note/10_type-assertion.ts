// 타입 단언
var aa;
var bb = aa as string; // string으로 aa를 고정시킨다.


// DOM API 조작
// 접근 시점에 div가 있다는 보장을 해주지 못한다.
// => as로 반드시 있음을 보장하고 사용한다.
var div = document.querySelector('div') as HTMLDivElement;  

// if(div) {
div.innerText;
// }