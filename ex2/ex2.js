function cal() {
  const a = document.querySelector("#firstNum").value * 1;
  const b = document.querySelector("#secondNum").value * 1;
  const c = document.querySelector("#thirdNum").value * 1;
  const d = document.querySelector("#fourthNum").value * 1;
  const e = document.querySelector("#fifthNum").value * 1;
  const result = (a + b + c + d + e) / 5;
  document.querySelector(
    "#result"
  ).innerText = `Trung bình 5 số bạn nhập là: ${result}`;
}
