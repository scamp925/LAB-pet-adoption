import pets from "./data.js";
import filterFunction from "./filterCards.js";
import allAnimalCards from "./allCards.js";

  const eventListenerForModal = () => {
    const formModal = new bootstrap.Modal(document.querySelector("#add-pet"));

    const addPetForm = document.querySelector('form');
    addPetForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const newPetObj = {
        name: document.querySelector("#name").value,
        color: document.querySelector("#color").value,
        specialSkill: document.querySelector("#specialSkill").value,
        type: document.querySelector("#type").value,
        imageUrl: document.querySelector("#imageUrl").value
      }
      console.log(newPetObj);
      pets.push(newPetObj);
      allAnimalCards(pets);

      formModal.hide();
      addPetForm.reset();
    }); 

    // DELETE BUTTON ON CARDS
document.querySelector("#card").addEventListener("click", (e) => {
  // console.log(e.target.id) 
  const [method, imageUrl] = e.target.id.split("--"); //splitting "delete" & the url

  const index = pets.findIndex(taco => taco.imageUrl === imageUrl); //selecting ONLY the url

  if (e.target.id.includes("delete")) {
    pets.splice(index, 1);
    allAnimalCards(pets);
  }
   });
   //FIRST TRY AND I GOT THE DELETE BUTTON TO WORK PROPERLY!!!! AHHHHH!!!! I AM GETTING THIS!!!
   
   document.querySelector("#cat").addEventListener("click", filterFunction);
   document.querySelector("#dog").addEventListener("click", filterFunction);
   document.querySelector("#dino").addEventListener("click", filterFunction);
   document.querySelector("#viewAll").addEventListener("click", allAnimalCards);
}; 

export default eventListenerForModal;
