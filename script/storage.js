"use strict";
///// assment 1
const sidebar = document.getElementById("sidebar");
sidebar.addEventListener("mouseenter", function () {
  sidebar.classList.toggle("active");
});
//khai báo biến
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const breedArr = localStorage.getItem("breed")
  ? JSON.parse(localStorage.getItem("breed"))
  : [];
let petArr = localStorage.getItem("pet")
  ? JSON.parse(localStorage.getItem("pet"))
  : [];
const healthy = [];
const healthypet = document.getElementById("healthy-btn");
const bmibtn = document.getElementById("bmi-btn");
const bmicl = document.getElementById("caculatorbmi");
const tableBodyEl = document.getElementById("tbody");
// Hàm tạo bảng

function renderTableData(n) {
  console.log(n);
  let a, b, c;
  tableBodyEl.innerHTML = "";
  for (let index = 0; index < n.length; index++) {
    const row = document.createElement("tr");
    n[index].vaccinated
      ? (a = "bi-check-circle-fill")
      : (a = "bi-x-circle-fill");
    n[index].dewormed ? (b = "bi-check-circle-fill") : (b = "bi-x-circle-fill");
    n[index].sterilized
      ? (c = "bi-check-circle-fill")
      : (c = "bi-x-circle-fill");
    row.innerHTML = ` 
    <th scope="row">${n[index].id}</th>
    <td>${n[index].name} </td>  
    <td>${n[index].age}</td>
    <td>${n[index].type}</td>
    <td>${n[index].weight}</td>
    <td>${n[index].lenght}</td>
    <td>${n[index].breed}</td>
    <td>
      <i class="bi bi-square-fill" style="color:${n[index].color}"></i>
    </td>
    <td><i class="bi ${a}"></i></td>
    <td><i class="bi ${b}"></i></td>
    <td><i class="bi ${c}"></i></td>
    <td>${n[index].date}</td>
    <td>
      <button type="button" class="btn btn-danger" onclick="deletePet('${n[index].id}')">Delete</button>
    </td>`;
    tableBodyEl.appendChild(row);
  }
}
//xoá dữ liệu
function deletePet(petid) {
  // Confirm before deletePet
  if (confirm("Are you sure?")) {
    petArr = JSON.parse(localStorage.getItem("pet"));
    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].id == petid) {
        petArr.splice(i, 1);
        break;
      }
    }
    saveToStorage("pet", JSON.stringify(petArr));
    renderTableData(petArr);
  }
}
//Hàm xoá input
const clearInput = () => {
  idInput.value = "";
  typeInput.value = "Select Type";
  nameInput.value = "";
  ageInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.check = false;
};
let inputid = true;
let error = true;
// thêm dữ liệu petArr---------------------------------------------------------------------------------------
function addpetArr() {
  //Kiểm tra dữ kiện nhập vào
  for (let i = 0; i < petArr.length; i++) {
    if (idInput.value === petArr[i].id) {
      inputid = false;
    }
  }
  if (!inputid) {
    inputid = true;
    alert("Duplicate ID");
  } else if (idInput.value == "") {
    alert("Write ip");
  } else if (nameInput.value == "") {
    alert("Write Name");
  } else if (ageInput.value < 1 || ageInput.value > 15) {
    alert("Age must be between 1 and 15!");
  } else if (typeInput.value == "Select Type") {
    alert("Please select Type!");
    // } else if (breedInput.value == "Select Breed") {
    //   alert("Please select Breed!");
  } else if (weightInput.value < 1 || weightInput.value > 15) {
    alert("Weight must be between 1 and 15!");
  } else if (lengthInput.value < 1 || lengthInput.value > 100) {
    alert("Length must be between 1 and 100!");
  } else {
    error = false;
    const data = {
      id: idInput.value,
      name: nameInput.value,
      age: ageInput.value,
      type: typeInput.value,
      weight: weightInput.value,
      lenght: lengthInput.value,
      color: colorInput.value,
      breed: breedInput.value,
      vaccinated: vaccinatedInput.checked,
      dewormed: dewormedInput.checked,
      sterilized: sterilizedInput.checked,
      date: new Date(),
    };
    petArr.push(data);
    saveToStorage("pet", JSON.stringify(petArr));
  }
}
//---------------------------------submit-----------------------------------------------//-----
submitBtn.addEventListener("click", function () {
  addpetArr();
  let petArr = localStorage.getItem("pet")
    ? JSON.parse(localStorage.getItem("pet"))
    : [];
  renderTableData(petArr);
  !error && clearInput();
});

function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key) {
  return localStorage.getItem(key);
}
