// 13-13 조건문

// 제어문 (control flow)
// 1. 조건문
// 2. 반복문





/*
// 1. 조건문 
var a = 2;

// 1-1. if... else
if (a > 2) {
    console.log('a>2');

} else {
    console.log('a<=2');
}


// 1-2. if... else if... else
if (a > 2) {
    console.log('a > 2');
} else if (a == 2) {
    console.log('a = 2');
} else if (a == 0) {
    console.log('a = 0');
} else if (a < 2) {
    console.log('a < 2');
} else {
    console.log(' Error! ');
}

// *************************
// 만약 if문의 조건을 중복으로 만족 할 시 먼저 true 값을 가졌을 때의 값을 반환
// 위의 경우 변수가 0인 경우 a==0과 a<2 모두를 만족 하나 a=0을 출력함


// 1-3. switch문 ()
var mbti='INFP';
var val;

switch (mbti) {
    case 'INFP':
        val = 'INFP';
        break;
    case 'ENFP':
        val = 'ENFP';
        break;
    case 'ISTJ':
        val = 'ISTJ';
        break;

    default: 
        val = '유효한 값이 아닙니다.';
    // case를 전부 만족하지 않았을 때 기본 값으로 실행 되는 값. ; 안 써도 됨

}

console.log(val); // 유효 값이 아님 뜸 why?
// 스위치 문의 경우 조건을 만족해도 break를 사용하지 않으면 switch 문의 전체를 수행해서 결국 default 값을 출력함




*/




// 2. 반복문(loop)
// 2-1. for

/* for (변수 선언, 조건식, 증감식) {}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} 기본 패턴
*/ 
for (var i = 0; i < 10; i++){
    console.log(i);   
}

for (var i = 10; i>0; i--) {
    console.log(i);
}

// 루프 횟수 확인은 어떻게? 

// 이중 for문도 가능
for (var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        // 1번 for를 1회 돌 때 마다 2번 for 문을 전체 다 도는 형식.
        console.log(`${i}-${j}`);
    }
}



// 2-2 while 반복 횟수 지정 X 조건식(참일 때 작동)에 의거해 작동(무한하게 반복되서 부하를 줌)

var flag = 10;
while (flag > 0){
    console.log(flag);
    flag--;
}

// do... while
// 무조건 do 안의 코드 블럭의 작업을 수행 하고 이후 while 안의 것을 수행
// 조건과 무관하게 이 로직을 돌려야 될 때 사용 한대 뭐라는 거임 존나...
var f2lag = 10;
do {
    console.log(f2lag);
    f2lag--;
} while (f2lag < 0);


// 
/* 

Error 혹은 예외 처리 방법 (우회)

*/

try { // 에러가 발생할 가능성이 있는 코드
    // myfunc(); 
    // 함수의 이름이 잘못 되거나 정의 한 적 없는 리소스를 사용 하려고 할 떄 에러가 발생

    throw new Error("에러");

}catch (error) { // 에러가 발생 했을 때 실행 되는 코드
    console.log("에러 발생");
    console.log(error);
    
}finally { // 에러 여부와 상관 없이 무조건 실행 됨
    console.log("무조건 실행");
    
}

// 먼소리냐 이새끼... 