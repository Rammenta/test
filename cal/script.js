/*let cmFin = document.getElementById("cmFInch");
let cmFinResult = document.getElementById("result");
let cmFinSubmit = document.getElementById("submit");

console.log(cmFin);


function calCmForInch () {
    let inchFCm;

    cmFin.Innertext = `${cmFin}`;
    inchFCm.Innertext = `${inchFCm}`;
    return cmFin;
    cmFinSubmit.addEventListener('click',cmFinSubmit);

}
*/

const form = document.getElementById("conversionForm");
const resultDiv = document.getElementById("result");


form.addEventListener('submit',function (event){
    event.preventDefault(); // 폼 기본 동작(페이지 새로고침) 방지

    const cmValue = parseFloat(document.getElementById('cmInput').value);
  // cm → inch 변환
    const inchValue = cmValue * 0.393701;
  // 결과 표시 (소수점 둘째 자리까지)
    resultDiv.textContent = `${cmValue} cm는 약 ${inchValue.toFixed(2)} inch입니다.`;

});