function calSalary() {
  const luong1Ngay = 100000;
  const soNgay = document.querySelector("#soNgay").value;
  const result = soNgay * luong1Ngay;
  document.querySelector(
    "#result"
  ).innerText = `Tien luong cua ban la ${result}`;
}
