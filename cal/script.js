// script.js

// 폼과 결과 요소 가져오기
const form = document.getElementById('conversionForm');
const resultDiv = document.getElementById('result');

// 폼 제출 이벤트 처리
form.addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 기본 동작(페이지 새로고침) 방지

  // 입력값 가져오기
  const cmValue = parseFloat(document.getElementById('cmInput').value);

  // 유효성 검사: 숫자가 아닌 경우
  if (isNaN(cmValue) || cmValue <= 0) {
    resultDiv.textContent = '유효한 cm 값을 입력하세요.';
    return;
  }

  // cm → inch 변환
  const inchValue = cmValue * 0.393701;

  // 결과 표시 (소수점 둘째 자리까지)
  resultDiv.textContent = `${cmValue} cm는 약 ${inchValue.toFixed(2)} inch입니다.`;
});
