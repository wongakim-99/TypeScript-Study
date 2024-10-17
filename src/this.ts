// this 관련 공식문서 공부
// 1.ThisParameterType <Type>

function toHex(this: Number) {
    return this.toString(16);  // 여기서 this는 Number 타입
}

function numberToString(n : ThisParameterType<typeof toHex>) {  
    return toHex.apply(n);
}

// 2. this가 없는 함수의 예시
function noThisExample() {
    return "Hello";
}

type T2 = ThisParameterType<typeof noThisExample>;  // this가 없기 때문에 unknown 반환

/******************************************************************************* */

// 2. OmitThisParameter<Type>

function toHex_2(this:Number) {
    return this.toString(16);
}

const fiveToHex : OmitThisParameter<typeof toHex_2> = toHex.bind(5);

console.log(fiveToHex());