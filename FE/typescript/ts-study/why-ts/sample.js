// function sum(a, b) {
//   return a + b;
// }

// sum(10, "20");

// @ts-check

/**
 * js에서 ts처럼 사용하는 방법.
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

// 그러나 ts 파일처럼, 에러를 표시해주지는 않는다.
// 위에 @ts-check 주석을 추가해주면, ts처럼 에러를 표시할 수 있다.
add(10, "20");
