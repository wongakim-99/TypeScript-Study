
// 여기서 부터 아래는 공식문서의 this 관련해서 공부

/**ThisParameterType(Type)은 TS에서 this 매개변수가 있는 타입에서 해당 this 매개변수의 타입을 추출하는 유틸리티 타입
 * 만약 함수에 this 매개변수가 없다면, unknown타입을 반환한다. 이는 함수 타입에서 this의 타입만 따로 추출할 때 사용
 * 
 * 이 말이 무슨 말이냐면 ThisParameterType<Type> 이란?
 * ThisParameterType<Type> 은 TypeScript에서 함수가 this를 사용하는지 확인하고, 만약 this를 사용한다면
 * 그 this의 타입을 추출하는 도구라고 생각하면 된다.
 * 
 * 비유 
 * - 함수의 this는 함수가 속한 객체를 가리키는 포인터라고 생각
 * - 만약 함수에 this가 있다면, TypeScript는 그 this가 어떤 타입(객체)을 가리키는지 알고 싶어 할 수 있다.
 * - ThisParameterType<Type>은 해당 this가 정확히 어떤 타입을 가리키고 있는지를 추출해 내는 도구이다.
 * */ 

// 1. this가 있는 함수의 예시

function toHex(this: Number) {
    return this.toString(16);  // 여기서 this는 Number 타입
}

// ThisParameterType<typeof toHex> 는 toHex 함수의 this 매개변수의 타입을 추출하는 유틸리티이다.
// ThisParameterType<typeof toHex> 는 Number 타입을 의미한다. 즉, numberToString 함수는 n을 Number 타입으로 받음
// numberToString 함수는 받은 숫자 n을 toHex 함수의 this 로 설정하여 16진수로 변환
// toHex.apply(n)은 n을 this로 설정하여 toHex함수를 호출
function numberToString(n : ThisParameterType<typeof toHex>) {  
    return toHex.apply(n);
}

// 2. this가 없는 함수의 예시
function noThisExample() {
    return "Hello";
}

type T2 = ThisParameterType<typeof noThisExample>;  // this가 없기 때문에 unknown 반환

/**
 * - toHex 함수 : this를 매개변수로 받는 함수로, this가 Number 타입으로 명시되어 있다.
 * - ThisParameterType<typeof toHex> : toHex 함수의 this 매개변수의 타입인 Number를 추출하여 T에 할당
 * - ThisParametreType<Type>은 함수에서 this의 타입을 추출할 수 있는 유틸리티 타입이며, this 매개변수가 
 * 있는 경우 그 타입을 반환하고, 없는 경우 unknow을 반환한다. 이를 통해 함수의 this타입을 더 명확히 하거나,
 * 다른 타입 조작에 활용할 수 있다.
 */