"use strict";
function sum(a, b) {
    return a + b;
}
// sum(10, 20, 30)  ERROR!
// sum(10)    ERROR!
const result3 = sum(10, 20);
console.log(result3);
/********************************************************************************** */
// 매개변수의 갯수 만큼 인자를 넘기지 않아도 되는 자바스크립트의 특성과 반대됨
function multiple(a, b) {
    return a * b;
}
const result4 = multiple(10, 20);
console.log(result4);
const result5 = multiple(10);
console.log(result5);
/********************************************************************************** */
// 매개변수 초기화는 ES6+ 문법과 동일함
function subtraction(a, b = 100) {
    return a - b;
}
// subtraction(10, 20, 30)  // ERROR!, too many parameters
const result6 = subtraction(110, undefined);
const result7 = subtraction(110);
console.log(result6); // 10
console.log(result7); // 10
/**
 * 요약
 * 1. subtraction 함수는 두 번째 매개변수 b에 기본값이 설정되어 있어서, b를 생략하거나 undefined로 넘기면
 * 기본값인 100이 사용된다.
 *
 * 2. a는 필수 매개변수로 값을 꼭 전달해야 한다.
 *
 * 3. 매개변수를 추가로 넘기면 오류가 발생하며, TS는 함수의 선언된 매개변수와 전달된 인수의 개수를 일치시키는
 * 것을 요구한다.
 */
/********************************************************************************** */
// REST 문법이 적용된 매개변수
function sum2(a, ...nums) {
    let totalOfNums = 0;
    for (let key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}
const result8 = sum2(10, 20, 30, 40); // 10 + (20 + 30 + 40)
console.log(result8); // 출력: 100
//# sourceMappingURL=function.js.map