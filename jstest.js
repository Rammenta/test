/*

*/

var numplate = 10;
var undf;
/* undefined 변수 선언 */

undf="변수 초기화";

var undf = "변수의 선언과 초기화를 함께";

console.log(undf);

// 변수에 사용 불가한 단어 : 영어 외의 언어 불가, 숫자가 앞에 오는 경우 불가. 특문도 불가(-,_ 제외?)

// 예약어(JS Reserved word / JS keyword 검색) 프로그래밍 언어가 자체적으로 사용 할 단어나 키워드는 변수로 선언할 수 없음 

// 변수명(식별자)
// 1. camel Case
// var sendemail 
// 을 sendEmailDate (첫번째 단어의 첫글자는 소문자나 그 후 단어의 첫번째 단어는 대문자) 주로 이게 사용됨


// 2. snake_case
// 전체가 소문자고 언더바로 이어짐
// var send_email_data

// 주석
// 1. 싱글라인은 //
/* 

2. 멀티라인
주석

*/

var student = {
    grade: 1,
    school : "lion school"
};

console.log(student);
console.log(typeof(student));

/*
객체(object) : 속성의 모음으로 이루어진 데이터

속성 : 데이터 타입에 무관하게 값 할당이 가능
속성의 구분은 ","로 속성명과 값으로 정의.
*/
/*

객체의 값 호출 방법

객체명.속성명
*/
var gradeInfo = student.grade;
console.log(gradeInfo);

// 객체의 키 호출
var obkey = Object.keys(student)[0];
console.log(obkey);


//객체에 데이터(속성) 추가 방법
// 객체명.추가하고 싶은 속성 명 = 추가 값;
student.class = 3;
console.log(student);

// 점 표기법 외에도 대괄호 표기법도 가능
// 아래의 둘이 같은 결과 도출
console.log(student['class']);
console.log(student.class);


//비어 있는 객체 생성 (리터럴)
var teacher1 = new Object(); // 생성자
var teacher2 = { // 같은 방법

}; 





// 심볼
var name1 = "김멋사";
var name2 = "김멋사";

// 1과 2 비교 시 같은 값인가?

console.log(name1==name2);

// 같은 값으로 취급함. 둘은 같은 값이 되면 안됨으로 이 때 심볼을 사용

var name3=Symbol("이테킷");
var name4=Symbol("이테킷");

console.log(name3==name4);

// 이 때 고유 값을 가지게 됨으로 위의 비교연산식이 false 값을 가짐



var myclass = {
[Symbol("이테킷")]: 1,
[Symbol("이테킷")]: 2

}; // 즉 심볼은 실행 되는 컨텐츠 안에서 고유 값(유일)을 가짐




// 연산자
// 산술, 대입, 논리, 타입 등을 평가하여 값을 생성 하는 작업

// 1. 산술 연산자(사칙연산)
var a = 10;
var b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // 모드 연산(나머지 값도 구하는 방식 3.3333333333)

var c = 7;

//++ -- (증감 연산자)
console.log (++c);
// 변수 앞에 ++은 가지고 있는 데이터에 대해 1을 더하는 연산
// 변수 출력 보다 변수의 값에 1을 더하는 코드가 우선순위가 더 높음

console.log (c++);
// console.log (c++); 줄에서의 출력 값은 7이나(c가 우선)
// 이 후 c의 값을 확인 시 8이 출력 됨(++ 적용)

// 변수 값 출력 코드가 우선 순위가 높고 이후 변수의 값에 1을 더하는 코드가 발동
// c-- 도 동일한 작동
console.log(c);


// 2. 대입 연산자(=할당 연산자)
// 이미 선언 된 변수의 값을 덮어쓸 때도 사용됨
var d = 2;
d=10; // 여기서 =이 대입 연산자
console.log(d);

console.log(d += 3); // d = d+3 의 뜻
// 사칙연산 모두에 적용(+ 자리에 +,-,*,/,%)



// 3. 비교 연산자 : 연산의 결과에 대한 true, false 값을 반환

console.log(2==2); // true
console.log(2=="2"); 
// true <- 아니 이거 돼? 미쳤다 자동 타입 변환 기능임(암묵적 형변환)

console.log(2==="2"); // >>타입까지 비교<<함으로 false (앞은 숫자 후는 문자 취급)

console.log(2 != 2); // false (2=2라)
console.log(2 !== "2"); // true (좌항 숫자 타입 우항 문자 타입임으로 true 날아옴)

// 대소 관계 비교의 등호 비교도 있음 >, >= 

console.log(4>2); //false

// 4. 논리 연산자
// 4-1 논리합(or)   : 피연산자(항) 중 하나라도 참이면 true 반환
true || anything // 둘 중 하나가 true기에 true 출력
console.log(true||false||false); // 같은 이유
console.log(false||false); // false 출력

// 4-2 논리곱(and)  : 피연산자 모두가 참이면 true 반환
//(좌항->우항순) 여러가지 특정 조건 모두를 만족 해야 될 때(여러 조건을 붙일 때) 사용  
true && anything  // anything 출력


// 복합적 논리 연산 예
console.log(2>3 || 5==5);  // true
// 2보다 3이 크거나 5가 5일 때 true 값을 반환함

// 논리 연산자의 우선순위는 조건부의 논리 연산자 우선
console.log(2>3 && 5==5);  // false
console.log(2<3 && 5==5);  // true


// 4-3 부정(not)    : 피연산자의 boolean(t/f) 값을 부정
// !로 부정 암시 not 연산자라고도 함
console.log(!true);  // =false
console.log(!false); // =true
console.log(!(5>4));  // 5가 4보다 크다는 값은 true이나 true 값에 not 연산자를 사용함으로서 최종 값은 false를 반환함



// 4-4 Typeof 연산자 (데이터의 type을 알려 주는 연산자)
console.log(typeof 1); // 1의 데이터 타입을 확인
console.log(typeof "1"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object null 값의 type 비교는 무리
//머라는 거야 진짜 존나 못가르쳐...