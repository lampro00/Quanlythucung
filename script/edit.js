"use strict";

renderTableDataEdit(petArr);

function renderTableDataEdit() {
  let a, b, c;
  tableBodyEl.innerHTML = "";
  let petArr = localStorage.getItem("pet")
    ? JSON.parse(localStorage.getItem("pet"))
    : [];
  petArr.forEach(function (petArr, index) {
    const row = document.createElement("tr");
    petArr.vaccinated ? (a = "bi-check-circle-fill") : (a = "bi-x-circle-fill");
    petArr.dewormed ? (b = "bi-check-circle-fill") : (b = "bi-x-circle-fill");
    petArr.sterilized ? (c = "bi-check-circle-fill") : (c = "bi-x-circle-fill");
    row.innerHTML = ` 
      <th scope="row">${petArr.id}</th>
      <td>${petArr.name} </td>  
      <td>${petArr.age}</td>
      <td>${petArr.type}</td>
      <td>${petArr.weight}</td>
      <td>${petArr.lenght}</td>
      <td>${petArr.breed}</td>
      <td>
        <i class="bi bi-square-fill" style="color:${petArr.color}"></i>
      </td>
      <td><i class="bi ${a}"></i></td>
      <td><i class="bi ${b}"></i></td>
      <td><i class="bi ${c}"></i></td>
      <td>${petArr.date}</td>
      <td>
      <button type="button" class="btn btn-danger" onclick="startEditPet (${index})">Edit</button> 
      </td>`;
    tableBodyEl.appendChild(row);
  });
}
// const breedArr = localStorage.getItem("breed")
//   ? JSON.parse(localStorage.getItem("breed"))
//   : [];

//edit-------------------------------------------/////////////////////////---------------------------------------
const a = [];
const b = [];
const hiden = document.getElementById("container-form");
function startEditPet(petid) {
  typeInput.addEventListener("change", function () {
    typeInput.value === "Cat" ? renderBreed(b) : renderBreed(a);
  });
  hiden.classList.remove("hide");
  for (let i = 0; i < petArr.length; i++) {
    // let petArr = localStorage.getItem("pet")
    //   ? JSON.parse(localStorage.getItem("pet"))
    //   : [];
    if (i == petid) {
      idInput.value = petArr[i].id;
      nameInput.value = petArr[i].name;
      ageInput.value = petArr[i].age;
      weightInput.value = petArr[i].weight;
      lengthInput.value = petArr[i].lenght;
      typeInput.value = petArr[i].type;
      colorInput.value = petArr[i].color;
      vaccinatedInput.checked = petArr[i].vaccinated;
      dewormedInput.checked = petArr[i].dewormed;
      sterilizedInput.checked = petArr[i].sterilized;
      if (typeInput.value === "Cat") {
        renderBreed(b);
        breedInput.value = petArr[i].breed;
      } else {
        renderBreed(a);
        breedInput.value = petArr[i].breed;
      }
      petArr.splice(i, 1);
      saveToStorage("pet", JSON.stringify(petArr));
      break;
    }
    renderTableDataEdit(petArr);
  }
}
//----------------------------------------------------////////////renderBreed--------------------------------
breedArr.forEach(function (valu, index) {
  if (valu.type === "Dog") {
    a.push(valu.breed);
  }
  if (valu.type === "Cat") {
    b.push(valu.breed);
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
const submitBtn2 = document.getElementById("submit-btn1");
submitBtn2.addEventListener("click", function () {
  addpetArr();
  console.log(error);
  !error && hiden.classList.add("hide");
  let petArr = localStorage.getItem("pet")
    ? JSON.parse(localStorage.getItem("pet"))
    : [];
  !error && renderTableDataEdit(petArr);
});
