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
// makeObject 함수는 data와 methods를 받아서 이 둘을 함친 객체를 생성하고 반환
// data는 객체의 상태(여기서는 좌표 x,y)를 포함하고, methods는 그 객체에서 호출 할 수 있는 함수(여기서는 moveBy)를 포함
function makeObject(desc) {
    let data = desc.data || {};
    let methods = desc.methods || {};
    return Object.assign(Object.assign({}, data), methods);
}
// makeObject 함수는 초기 좌표 값인 x : 0과 y : 0을 포함하는 객체를 만들고, moveBy 라는 메서드 추가
// moveBy(dx, dy)메서드는 this.x 와 this.y 값을 업데이트 하는 역할을 함. 중요한 점은 this가 정확히 x와 y를 참조
let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx, dy) {
            this.x += dx;
            this.y += dy;
        },
    },
});
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
console.log(obj.x); // 출력: 15
console.log(obj.y); // 출력: 25
//# sourceMappingURL=this.js.map