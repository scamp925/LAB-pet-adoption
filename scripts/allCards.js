import pets from "./data.js";
import renderToDom from "./renderToDom.js";

   //HTML for all cards
   const allAnimalCards = (array) => {
    let domString = "";
    for (const animal of pets) {
      domString += `<div class="card" style="width: 18rem;">
      <img src="${animal.imageUrl}" class="card-img-top" alt="...">
      <div class="card-header">${animal.name}</div>
      <div class="card-body">
      <p class="card-text">${animal.color}</p>
      <p class="card-text">${animal.specialSkill}</p>
      </div>
      <div class="card-footer">${animal.type}</div>
      <div>
         <button class="btn btn-danger delete-btn" id="delete--${animal.imageUrl}">Delete</button>
       </div>
      </div>`;
    }
    renderToDom("#card", domString);
  }

  export default allAnimalCards;
