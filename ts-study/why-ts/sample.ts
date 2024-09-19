/**
 * param, return에 type을 지정하면
 * 잘못된 타입이 들어갔을 때 에러가 표시된다.
 * @param a number type.
 * @param b number type
 * @returns number type
 */
function sum(a: number, b: number): number {
  return a + b;
}

// sum(10, '20');
let result = sum(10, 20);

// type이 지정되면, 제공되는 자동완성 method도 달라진다.
result.toLocaleString();
