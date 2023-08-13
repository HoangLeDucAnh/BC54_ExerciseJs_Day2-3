function cal() {
  const dai = document.querySelector("#dai").value * 1;
  const rong = document.querySelector("#rong").value * 1;
  const dientich = dai * rong;
  const chuvi = (dai + rong) * 2;
  document.querySelector(".render").innerHTML = `Chu vi HCN là ${chuvi} <br>
    Diện tích HCN là ${dientich}`;
}
