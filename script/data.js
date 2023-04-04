"use strict";
const btnexp = document.getElementById("export-btn");
const btnixp = document.getElementById("import-btn");
const petArr1 = saveToStorage("pet", JSON.stringify(petArr));
const petArr2 = JSON.stringify(petArr);
function saveStaticDataToFile() {
  var blob = new Blob([petArr2], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "static.txt");
}
btnexp.addEventListener("click", saveStaticDataToFile);
//----------------------------------------------------------------------------

let file = document.getElementById("input-file");
// Get the form and file field
btnixp.addEventListener("click", xulyForm);

function xulyForm(e) {
  //cam sự kiện submit mặc định
  e.preventDefault();

  //neu chua chọn file - file.value.length = 0 - không làm gì cả
  if (!file.value.length) return;

  //tạo một reader object để đọc file
  let reader = new FileReader();
  //Setup the callback event to run when the file is read

  reader.readAsText(file.files[0]); //dọc file đầu tiên

  reader.onload = xulyFile;
}

function xulyFile(e) {
  let noidung = e.target.result;
  let petArr = JSON.parse(noidung);
  saveToStorage("pet", JSON.stringify(petArr));
}
