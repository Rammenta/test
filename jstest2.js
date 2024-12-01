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

// - indexOf : 문자열의 특정 값이 시작되는 위치

// 선언한 문자열 변수에다가 .을 사용 예) 밑의 abc.
console.log(abc.indexOf("man"));
console.log(abc.indexOf("I"));
// man 라는 글자가 처음 나온 순서(공백 포함)
// 11번째에 위치하나 첫 글자인 I가 0임으로 10이라 표기 됨

// - slice(시작 위치,끝나는 위치) : 문자열의 일부를 잘라냄
// 이 때 끝나는 위치는 자르고 싶은 문자의 위치로 지정 
console.log(abc.slice(0,4)); // I am의 m까지 끊고 싶음


// - toUpperCase(),toLowerCase()
console.log(abc.toUpperCase()); // 전부 대문자
console.log(abc.toLowerCase());


// - startsWith(ES6 도입) : 특정 문자로 시작하는지를 true/false로 반환 (대소문자 구분)
// endsWith
var efg = 'This is my Car.';
console.log(efg.startsWith('Th')); // true
console.log(efg.endsWith('car.')); // false C가 대문자
// 공통 문자를 거를 때 사용... ???
// 대소문자 구분 없이 쓰려면 변수 값 전처에 toLower 혹은 toUpper을 먹여서 전체 대/소문자화 후 사용 



// - includes : 포함 유무(위치 무관)로 true/false
console.log(efg.includes('is')); // true 반환




///////////////////// 배열 /////////////////////// 13-11

/*
배열(객체) : 복수의 데이터를 순서대로 담고 있는 자료 구조로 0부터 시작
여러 개의 속성을 가지기 때문에 식별자(key)는 인덱스에 값은 요소에 대응이 되는 객체로 취급

*/

var mbti = ['INFP','ENFJ','INTJ']; 
// 배열 자체를 드러내는 걸 리터럴(여기선 mbti) 이라고함
// 리터럴 내에서 , 로 나눠진 건 엘레멘트(요소, 여기서는 infp enfj intj)

console.log(mbti[0]); // 순서로 호출
console.log(mbti.length); // 배열 내에 몇 개의 요소가 담겨 있나를 반환하는 함수
// 같은 특성을 담아서 사용하는 걸 추천

// 배열에 데이터 추가
mbti[3] = 'ESFP';
console.log(mbti.length); 
console.log(mbti[3]);

// 덮어쓰기
mbti[2] = 'ISTJ'; // INTJ > ISTJ로 변환
console.log(mbti[2]);




// 메소드 사용
// push() 사용자가 전달한 데이터를 가져다가 배열의 마지막에 삽입

console.log(mbti.push('INTJ','INTP')); 
// 추가 되었을 때의 배열 내 요소 개수 반환

// push의 스프레드 문법
// 원본 배열을 내버려두고(원본 배열에 무언가를 추가하지 않고 데이터를 삽입하여 새 배열 창조)
var newMbti = [...mbti,'INTJ','INTP']; // ...변수명,추가하고자 하는 변수
console.log(mbti);
console.log(newMbti);

// pop() 원본에서 데이터를 꺼냄
// 마지막에 있는 요소의 데이터를 빼오고 원본 배열에서 삭제
console.log(mbti.pop());
console.log(mbti);


// 배열의 앞쪽에 추가 삭제 
// unshift (push와 유사)

// 메소드 사용
// unshift() 사용자가 전달한 데이터를 가져다가 배열의 마지막에 삽입

console.log(mbti.push('INFJ','ENTP')); 
// 추가 되었을 때의 배열 내 요소 개수 반환

// unshift의 스프레드 문법
// 원본 배열을 내버려두고(원본 배열에 무언가를 추가하지 않고 데이터를 삽입하여 새 배열 창조)
var newMbti = ['INFJ','ENTP', ...mbti]; // ...변수명,추가하고자 하는 변수
console.log(mbti);
console.log(newMbti);


// shift() 원본 배열의 앞쪽에서 데이터를 꺼냄
// 맨 처음에 있는 요소의 데이터를 빼오고 원본 배열에서 삭제

/*
console.log(mbti.shift());
console.log(mbti);
*/

// slice() 시작점과 끝점을 정해서 그 영역을 복사하는 함수?
console.log(mbti.slice(0,2));
// 시작점은 포함, 끝점은 포함 안함 0,2 면 0은 포함하고 3번째(2에 배정된 데이터)는 복사하지 않음
console.log(mbti.slice());
// slice에 아무런 인자를 넣지 않으면 전체 복사

// 끝에서 부터 처리해야 되는 경우?
// 음수 단위로 사용

console.log(mbti.slice(-1)); // 맨 끝의 인자 반환





// join()
console.log(mbti.join());
// 구분자는 , 문자열로 출력
// 구분자 변경은 join('구분자로사용할문자');
console.log(mbti.join('|'));
console.log(mbti.join(''));// 모든 문자열을 띄어쓰기 없이 합침




// sort() 순서대로 정리하는 함수
console.log(mbti.sort()); // 기본적으로 오름차순, 알파벳순

// 순서 변환 함수를 추가 사용해서 내림차순 사용 가능
console.log(mbti.sort().reverse()); // 내림차순으로 정렬하는 방법


