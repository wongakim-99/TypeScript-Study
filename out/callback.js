"use strict";
// 콜백의 기본 개념 예시
function greeting(name) {
    console.log(`Hello, ${name}`);
}
/**prompt 함수가 string | null 타입을 반환할 수 있기 때문에 발생합니다. 사용자가 취소를 누르면 null을 반환하기 때문이죠.
 * 하지만 callback 함수는 string 타입만 허용하고 있어서 타입 오류가 발생합니다. */
function processUserInput(callback) {
    const name = 'gawon';
    callback(name);
}
processUserInput(greeting);
// 콜백 관련 추가 예시
// 여기서 doSomethig 함수는 두 개의 number 값을 받아서 number 값을 반환하는 콜백을 필요로 한다.
function doSomething(callback) {
    const result = callback(10, 20);
    console.log(result);
}
doSomething((a, b) => a + b);
//# sourceMappingURL=callback.js.map