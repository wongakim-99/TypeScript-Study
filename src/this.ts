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

/******************************************************************************* */

// 3. ThisType<Type>
type ObjectDescriptor<D, M> = {
    data? : D;  // 객체의 데이터 부분을 나타냄. 예를 들어, 좌표 정보인 x 와 y 값이 여기에 들어간다.
    methods? : M & ThisType<D & M>;  // Type of 'this' in methods is D & M
    // methods? : M & ThisType<D & M> : 객체의 메서드 부분을 나타냄
    // ThisType<D & M> 메서드에서 this 타입을 D와M을 합친 타입으로 명시적으로 설정함.
    // 즉, 메서드가 객체의 데이터를 안전하게 접근하도록 this의 타입을 명시해 주는 역할
}

// makeObject 함수는 data와 methods를 받아서 이 둘을 함친 객체를 생성하고 반환
// data는 객체의 상태(여기서는 좌표 x,y)를 포함하고, methods는 그 객체에서 호출 할 수 있는 함수(여기서는 moveBy)를 포함
function makeObject<D, M>(desc : ObjectDescriptor<D, M>) : D & M {
    let data : object = desc.data || {};
    let methods : object = desc.methods || {};
    return {...data, ...methods} as D & M;
}

// makeObject 함수는 초기 좌표 값인 x : 0과 y : 0을 포함하는 객체를 만들고, moveBy 라는 메서드 추가
// moveBy(dx, dy)메서드는 this.x 와 this.y 값을 업데이트 하는 역할을 함. 중요한 점은 this가 정확히 x와 y를 참조
let obj = makeObject ({
    data : { x : 0, y : 0},
    methods : {
        moveBy(dx : number, dy : number) {
            this.x += dx;
            this.y += dy;
        },
    },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

console.log(obj.x);  // 출력: 15
console.log(obj.y);  // 출력: 25