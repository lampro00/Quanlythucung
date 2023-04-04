"use strict";
const typeInput1 = document.getElementById("input-type");
const breedInput1 = document.getElementById("input-breed");
// const breedArr = localStorage.getItem("breed")
//   ? JSON.parse(localStorage.getItem("breed"))
//   : [];
const submitBtn1 = document.getElementById("submit-btn");
const tableBody = document.getElementById("tbody");
renderTablebreedData();

function renderTablebreedData() {
  tableBody.innerHTML = "";
  // let breedArr = localStorage.getItem("breed")
  //   ? JSON.parse(localStorage.getItem("breed"))
  //   : [];
  breedArr.forEach(function (breedArr, index) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <th scope="row">${index + 1} </th>
    <td>${breedArr.breed}</td>
    <td>${breedArr.type}</td>
    <td> <button type="button" class="btn btn-danger" onclick="deletePet(${index})"> Delete</button> </td>`;
    tableBody.appendChild(row);
  });
}
submitBtn1.addEventListener("click", function () {
  const data = {
    type: typeInput1.value,
    breed: breedInput1.value,
  };
  breedArr.push(data);
  saveToStorage("breed", JSON.stringify(breedArr));
  renderTablebreedData(breedArr);
  const x = typeInput1.value;
});
//xoá dữ liệu
function deletePet(index) {
  // Confirm before deletePet

  if (confirm("Are you sure?")) {
    for (let i = 0; i < breedArr.length; i++) {
      if (index === i) {
        breedArr.splice(i, 1);
        break;
      }
    }
  }
  saveToStorage("breed", JSON.stringify(breedArr));
  renderTablebreedData(breedArr);
}

const a = [];
const b = [];
breedArr.forEach(function (valu, index) {
  if (valu.type === "Dog") {
    a.push(valu.breed);
  }
  if (valu.type === "Cat") {
    b.push(valu.breed);
  }
});
typeInput.addEventListener("change", function () {
  if (typeInput.value === "Cat") {
    renderBreed(b);
  } else {
    renderBreed(a);
  }
});
function renderBreed(n) {
  const breedArr = localStorage.getItem("breed")
    ? JSON.parse(localStorage.getItem("breed"))
    : [];
  breedInput.innerHTML = "";
  for (let i = 0; i < n.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = `<option>${n[i]}</option>`;
    breedInput.appendChild(option);
  }
}
