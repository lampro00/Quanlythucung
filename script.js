const c = [];
const d = [];
breedArr.forEach(function (value, index) {
  if (value.type === "Dog") {
    c.push(value.breed);
  }
  if (value.type === "Cat") {
    d.push(value.breed);
  }
});
typeInput.addEventListener("change", function () {
  if (typeInput.value === "Cat") {
    renderBreed(d);
  } else {
    renderBreed(c);
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
renderTableData(petArr);
