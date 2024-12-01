// 13-16 함수(Functions)
// : 반복 작업의 효율성을 증가 시키기 위한 작업의 묶음

/*
// 함수 선언문
function multiply(a,b) // function 함수명(파라미터)  함수에 들어가는 모든 요소?
{
    return a * b; // a*b의 값을 반환한다
}

// 함수는 사용할 부분에 함수명(파라미터1,2);
console.log(multiply(10,5));

var result = multiply(435,24);
console.log(result); // 이런 식으로 변수에 넣어서 값을 출력할 수 있음.
*/


// 함수 표현식 
/*


var multiply = function (a,b){ 
    // 함수 명이 없는 익명 함수로 변수로 할당됨(객체의 성질을 가짐)? 머라는거야....
    // 함수를 변수에 대입하면(function 이름명 (a,b)) 레퍼런스 오류가 나서 익명 함수 쓰는 거임 
    return a * b
};
console.log(multiply(10,5));

*/



/*
// 함수(2)

var a = 10 ; // while 문 바깥의 전역에 설정 된 변수가 while 안에서 선언 된 변수의 영향을 받아서(함수 내부 선언도 전역에 영향) 1000 출력 (js 특징:블록 영역을 벗어남)
while(true){
    var a = 1000;
    break;
}

console.log(a); // 1000 출력





// 호이스팅
console.log(word);

word="happy"; // var 가 없어서 error 
// var 가 밑에 있으면 undefined 반환

console.log(word); 
// 변수 선언 없으면 X
// 변수 선언이 어딘가에라도 있으면 happy 출력 

var word; // 선언이 밑에 있어도 변수 자체가 선언 되나 변수 값을 넣은 위치에서 출력시(선언 전) 그 값이 undefined 로 정의됨

// var은 런타임 전에 선언함으로 위치에 상관 없이 무조건 변수가 선언됨


// 이런 이유로 이걸 보완하기 위해 나온 키워드가 let


console.log(word2); // 여기서 부터 오류임

word2="unhappy";

console.log(word2); 

let word2; 

// error word2 값이 할당 되지 않음
// 정상적으로 사용되기 위해서는 변수를 할당하고 값이 할당되는 순으로 작성


let b = 10 ; // let은 블록 내부 선언은 외부(전역)에 영향을 미치지 못함
while(true){
    let b = 1000;
    break;
}

console.log(b); // 10 출력




// const?  
// 한 번 넣은 값을 덮어쓸 수 없음
const c = 2; // 값 할당 없이 const c; <- 같은 식으로 못씀 


console.log(c);

c=3;

const PI = 3.14; 
const TIME_DATE = 3.14; // 상수는 대문자 변수명 자주 씀


// const로 선언된 변수에 할당된 객체
const student = {
    grade:1,
    class:3
};

student.grade = 2; // 객체 자체가 아니라 객체 안에 있는 속성이기 때문에 덮어쓰기 가능

console.log(student);



// 
student = {
 num : 2013,
 grade:2
} // 객체에 대입하려고 하기 때문에 const에 오류가 뜸 

console.log(student);

*/



// 함수(3)
// 화살표 함수
// 선언 함수명 = (파라미터1,파라미터2) => { 사용할 함수 내용 }

let plus = (a, b) => {
    return a + b;
}

console.log(plus(2,3));

// 위의 함수 선언 더 간소화 방법

let plus2 = (a,b) => a+b;
// 로 가능. 주로 매개 변수가 하나인 경우 사용


let print = word => {
    console.log(word);
    
};
    print("Hello!");


// 파라미터(입력 값)가 없이  바로 로직을 실행하는 함수를 =>로 입력하는 방법은?

let myfunc = () => {}
// 함수명 = () 파라미터가 없는 함수다!
    return 1;
}

console.log(myfunc()); // 1 반환

