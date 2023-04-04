"use strict";

const idInput1 = document.getElementById("input-id");
const findbtn = document.getElementById("find-btn");
const tbody1 = document.getElementById("tbody");
let loc = [];
tbody1.innerHTML = "";
let dem = 1;
findbtn.addEventListener("click", function () {
  let petArr = localStorage.getItem("pet")
    ? JSON.parse(localStorage.getItem("pet"))
    : [];
  let loc = petArr;
  if (idInput1.value != "") {
    console.log(idInput1.value);
    dem += dem;
    loc = loc.filter((loc) => loc.id.indexOf(idInput1.value) != -1);
    // console.log(loc);
    // renderTableData(loc);
  }

  if (nameInput.value != "") {
    dem += dem;
    loc = loc.filter((loc) => loc.name.indexOf(nameInput.value) != -1);
    console.log(dem);
  }
  if (typeInput.value != "Select Type") {
    dem += dem;
    loc = loc.filter((loc) => loc.type.indexOf(typeInput.value) != -1);
    console.log(loc);
  }
  if (breedInput.value != "Select Breed") {
    dem += dem;
    console.log(loc);
    loc = loc.filter((loc) => loc.breed.indexOf(breedInput.value) != -1);
  }
  if (vaccinatedInput.checked) {
    dem += dem;
    loc = loc.filter((loc) => loc.vaccinated == true);
    console.log(loc);
  }
  if (dewormedInput.checked) {
    dem += dem;
    loc = loc.filter((loc) => loc.dewormed == true);
    console.log(loc);
  }
  if (sterilizedInput.checked) {
    dem += dem;
    loc = loc.filter((loc) => loc.sterilized == true);
    console.log(loc);
  }
  if (dem > 1) {
    console.log(dem);
    renderTableData(loc);
  }
});

// breedArr = localStorage.getItem("breed")
//   ? JSON.parse(localStorage.getItem("breed"))
//   : [];
let a = [];
let b = [];
breedArr.forEach(function (value, index) {
  if (value.type === "Dog") {
    a.push(value.breed);
  } else b.push(value.breed);
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
