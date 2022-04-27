import pets from "./data.js";

// *********  EVENT LISTENERS  *********  //
const filterFunction = (event) => {
  console.log(event.target.id);
  const newArr = pets.filter((animal) => animal.type === event.target.id);
  document.querySelector("#card").innerHTML = ""
  for (const animal of newArr) {
    document.querySelector("#card").innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${animal.imageUrl}" class="card-img-top" alt="...">
  <div class="card-header">${animal.name}</div>
  <div class="card-body">
    <p class="card-text">${animal.color}</p>
    <p class="card-text">${animal.specialSkill}</p>
  </div>
    <div class="card-footer">${animal.type}</div>
</div>`
  }
}

export default filterFunction;
