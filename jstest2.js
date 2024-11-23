// 문자열 선언
var greeting = "Hello!";
var farewell = 'Bye!'; // 이걸 더 선호하는 듯

// 문자열에 숫자를 집어 넣으면 어떻게 되나
var myname = '김테킷';

var sentence = greeting + myname
console.log(sentence); // Hello!김테킷

// 문자열 사이 + ' ' + 로 공백 추가 혹은 + '\n' + 엔터 (줄바뀜)
// 선언 된 문자열에 숫자를 추가하면 어떻게 되나?

console.log(farewell + 2);
//Bye!2 문자열과 다른 타입의 변수들을 문자화로 변환해서 병합(자동 형변환)


/**/


// 이스케이프 시퀀스 (예전에 사용했음)
// \로 시작하는 특수 문자
var sentence = greeting + '\n' + myname;
var sentence = greeting + '\t' + myname;
console.log(sentence);

// \n(엔터) , \t(탭), \"("" 사이에서 " 사용), \'('), \\(\)



/**/


// 템플릿 리터럴(ES6) : 멀티라인 텍스트가 작업 가능해지면서 이스케이프 시퀀스가 필요 없어짐 미쳤다
var a = `안녕하세요!`; // 물결에 있는 특수문자
console.log(a);

// 뭐가 다른 걸까요?
var a = `1행
2행 안녕하세요:)!`; // `` 안에 개행한 것도 그대로 반영됨 홀리 몰리 쩐다
console.log(a); 

// 이거 보다 좋은 기능 : 변수나 숫자 사이에 문자를 넣으려면 개같앴는데 이걸 전부 해결해줌

var price = 1000;
var b = '이 물건은 ' + price + '원입니다.'
console.log(b);
// 헐 그래 이 개같은 + price + 이거 없어졌어? 존나 쩐다
var c=`이 물건은 ${price} 원 입니다.`
console.log(c);
// 오~~~~~~ 변수 뿐만 아니라 연산 과정도 가능

var d = `이 물건은 ${200+price} 원 입니다.`
console.log(d);
// 야 개신기하다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




/**/



// 문자열 함수

// 영문 적용 함수

var abc = "I am Iron man";

// indexOf : 문자열의 특정 값이 시작되는 위치

// 선언한 문자열 변수에다가 .을 사용 예) 밑의 abc.
console.log(abc.indexOf("man"));
console.log(abc.indexOf("I"));
// man 라는 글자가 처음 나온 순서(공백 포함)
// 11번째에 위치하나 첫 글자인 I가 0임으로 10이라 표기 됨

// slice
log