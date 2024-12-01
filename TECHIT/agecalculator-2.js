let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');


const today = new Date();
// 오늘의 날짜를 얻기 위해 Data 객체 호출

function calculateAge() {

    let birthDate = new Date(el.value);

    let age;
    // getMonth 표준 시의 현재 날짜와 시간을 얻음
    // getDate
    if (today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
         today.getDate() >= birthDate.getDate()
        )
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }
    // getFullYear 메서드는 Date 객체에서 년도(4자리) 가져옴
    // getMonth 는 월(0~11)을 가져옴으로 가져온 값에 +1 해야됨(제로 베이스:0부터 시작)
    // getDate 는 일 (1~31) 가져옴
    /*
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();

    로 받고 출력
    var todayString = todayYear + "년" + todayMonth + "월" + todayDate + "일";
    console.log(todayString);
    
    => 2024년 11월 29일 출력


    */


    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`;    

    return age;
}


elSubmit.addEventListener('click', calculateAge);