// 1. 문자열(string)
// 자바스크립트 변수의 타입이 문자열인 경우 아래와 같이 선언해서 사용한다.

const str : string = 'hi';
console.log(str);

// TIP : 위와 같이 : 를 이용하여 자바스크립트 코드에 타입을 정의하는 방식을 타입 표기(Type Annotation)라고 한다.
// 타입 표기(Type Annotation)는 뒤에 변수나 함수의 타입을 명시하는 것으로, TS에서 중요하다.
// 이를 통해 자바스크립트처럼 자유로운 타입 변경으로 인한 오류를 방지

/************************************************************************************************ */

// 2. 숫자(number) 타입이 숫자면 아래와 같이 선언
const num : number = 10;
console.log(num);

/************************************************************************************************ */

// 3. 진위(boolean) 타입이 진위 값인 경우는 아래와 같이 선언
const isLoggedIn : boolean = false;
console.log(isLoggedIn);

/************************************************************************************************ */

// 4. 객체(object) 객체 타입은 다음과 같이 정의 가능
const user : object = {name : 'capt', age : 100};
console.log(user);

/************************************************************************************************ */

// 5. 배열(array) 타입이 배열인 경우 아래와 같이 선언
const arr : number[] = [1,2,3,4,5,6,7,8,9,10];
const arr_2 : Array<number> = [1,2,3,4,5,6,7,712];  // 제네릭을 사용할 수 있음
console.log(arr);
console.log(arr_2);

/************************************************************************************************ */

// 6. 튜플(tuple) 튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미한다.
const arr_3 : [string, number, number, string] = ['hi', 10, 100, "jax"];
console.log(arr_3);

// 만약 정의하지 않은 타입, 인덱스로 접근할 경우 오류가 난다.
// arr[1].concat('!');  // Error, 'number' does not have 'concat'
// arr[5] = 'hello';  // Error, Property '5' does not exist on type '[string, number]'

/************************************************************************************************ */

// 7. 이넘(enum) 이넘은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미
enum Avengers {
    Capt,
    IronMan,
    Thor,
    Deadfool
}

const hero1 : Avengers = Avengers.Capt;
const hero2 : Avengers = Avengers.IronMan;
const hero3 : Avengers = Avengers.Thor;
const hero4 : Avengers = Avengers.Deadfool;
console.log(hero1, hero2, hero3, hero4);  // 출력결과 0,1,2,3

// TS는 기본적으로 이 상수들에게 0부터 시작하는 숫자 값을 할당한다.
// const hero : Avengers = Avengers.IronMan; 에서 hero 변수는 Avengers 열거형 중 하나인 IronMan으로 설정
// 즉, 0,1,2,3 출력

// 숫자 대신 커스텀 값 설정도 가능하다.
enum socialLogin {
    kakao = 10,
    google = 20,
    github = 30,
    naver = 40,
}
const socialLogin_Kakao : socialLogin = socialLogin.kakao;
const socialLogin_Google : socialLogin = socialLogin.google;
const socialLogin_Github : socialLogin = socialLogin.github;
const socialLogin_Naver : socialLogin = socialLogin.naver;

console.log(socialLogin_Kakao, socialLogin_Google, socialLogin_Github, socialLogin_Naver);

// 이렇든 enum은 특정 값(상수) 들의 집합을 정의하고, 가독성과 코드의 안정성을 높이는 데 유용하다.

/************************************************************************************************ */

// 8. any : any 타입은 모든 타입에 사용할 수 있는 치트키 같은 타입이다. 특정 데이터의 타입을 잘 모르거나 자바스크립트
// 프로젝트에 타입스크립트를 점진적으로 적용할 대 사용하면 좋은 타입이다. 단어 의미 그대로 모든 타입에 대해 허용
// const tset_any1 : number = 'hi'; 일부러 오류 발생시킨 코드
const test_any2 : any = 'hi'; 
const test_any3 : any = 3;
const test_any4 : any = ['a',2,34,4,'string'];
console.log(test_any2,test_any3,test_any4);

/**WARNING : any 타입을 많이 사용하면 사용할수록 타입스크립트의 장점이 사라진다. 꼭 필요할 때만 주의해서 사용하자 */

/************************************************************************************************ */

// 9. void : 반환 값이 없는 함수의 반환 타입이다. 아래와 같이 return이 없거나 return이 있더라도 반환하는 값이 없으면
// 함수의 반환 타입을 void 로 지정한다.
function printSomething() : void {
    console.log('shit');
}

function returnNothing() : void {
    return;
}

const result = printSomething();
const result2 = returnNothing();
console.log(result);  
console.log(result2);
/**console.log는 단순히 콘솔에 값을 출력하는 함수. 화면에 값을 표시하지만, 이 함수 자체가 아무 값을 반환은X 
 * 즉, 콘솔에 출력을 하지만 그 함수 호출의 결과는 아무것도 반환하지 않으므로 'undefined'로 처리
 * 
 * 함수가 값을 반환하기 위해서는 return 키워드를 사용해야 한다. return 키워드를 통해 함수를 호출한 곳에 어떤 값을 돌려줌
 * 
 * 결론 : 
 * - 콘솔 출력 : console.log는 단순히 콘솔에 텍스트를 출력 하는 함수, 반환값과는 별개임
 * - 반환값 없음 : printSomething() 함수는 void 타입이라서 반환값이 없고, 그래서 result에는 undefined가 할당됨
*/