function cal() {
  const num = document.querySelector("#Num").value * 1;
  const a = Math.floor(num / 10);
  const b = num % 10;
  const result = a + b;
  document.querySelector(".render").innerText = `Tổng 2 ký số là: ${result}`;
}
