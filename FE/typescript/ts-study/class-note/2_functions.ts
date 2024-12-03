// 함수의 타입 정의.
// 타입이 void도, any 아닌 경우 return이 없으면 에러가 표시된다.
function sum2(a: number, b: number): number {
  //   return a + b;
}

// 불필요한 파라미터가 들어갈 시 에러 표시.
sum2(1, 20, 30, 40, 50);

// 함수의 optional params.
// 물음표를 추가하면 사용할 수도 있고, 안할 수도 있다.
function log(a: string, b?: string, c?: string) {}

log("hello world");
log("hello world", "asd");
