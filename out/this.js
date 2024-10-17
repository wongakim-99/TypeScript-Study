"use strict";
// this 관련 공식문서 공부
// 1.ThisParameterType <Type>
function toHex() {
    return this.toString(16); // 여기서 this는 Number 타입
}
function numberToString(n) {
    return toHex.apply(n);
}
// 2. this가 없는 함수의 예시
function noThisExample() {
    return "Hello";
}
/******************************************************************************* */
// 2. OmitThisParameter<Type>
function toHex_2() {
    return this.toString(16);
}
const fiveToHex = toHex.bind(5);
console.log(fiveToHex());
//# sourceMappingURL=this.js.map