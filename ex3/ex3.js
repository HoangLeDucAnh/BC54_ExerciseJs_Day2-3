function cal() {
  const usd = document.querySelector("#Usd").value * 1;
  const result = usd * 23000;
  document.querySelector(
    ".render"
  ).innerText = `${usd} USD được quy đổi sang ${result} VND`;
}
