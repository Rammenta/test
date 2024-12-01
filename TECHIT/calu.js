let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();


function calcultateAge () {
    // 입력 값을 js가 확인할 수 있는 문자로 변환

    let birthDate = new Date(el.value);
    let age;
    
    if (today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth()&&
        today.getDate() >= birthDate.getDate()
        )
    ){
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`;
    return age;
}

elSubmit.addEventListener('click',calcultateAge);