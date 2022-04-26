const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://static.onecms.io/wp-content/uploads/sites/20/2021/09/10/t-rex-2000.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://img.joomcdn.net/e67e1a5af556e4adb8fcb0edd76c23e52f5f85ff_1024_1024.jpeg"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://www.mediastorehouse.co.uk/p/629/cartoon-orange-dinosaur-red-spikes-view-13558975.jpg"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://media.npr.org/assets/news/2010/01/27/twodinos-28ab1910d3f2cd1ab629951c5523c8c962af2360-s1100-c50.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/64/1e/61/641e6177260fd7d3c3a8a92ffa70dccf.jpg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.kindpng.com/picc/m/157-1578486_transparent-dinosaur-clipart-png-brown-dinosaur-clipart-png.png"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://www.thesprucepets.com/thmb/j23YI-_ShgbPRBJ8Cgw3refe_wg=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-cute-gray-great-dane-puppy-with-blue-eyes-1252375901-b1d90e97e9b345b49da0a7c84c03ed9d.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://nationaltoday.com/wp-content/uploads/2020/10/shutterstock_98948531-640x514.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://i0.wp.com/onlydinosaurs.com/wp-content/uploads/2020/06/Amazing-Adult-Dragon-Costume-Black-Red-Color2-2.jpg"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://www.thesprucepets.com/thmb/qlDawN0gW1EnW3orDTgEQauwnis=/1999x1499/filters:no_upscale():max_bytes(150000):strip_icc()/Nebelung-21a92ba2210f49dfa06381162b6e68fe.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://wallpaperaccess.com/full/463540.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-140594401-1-scaled.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://static.scientificamerican.com/sciam/cache/file/B4520B4E-BCC1-411C-BEC6541928BDB992_source.jpg?w=590&h=800&9DD618C2-44B0-4723-A4E1CF610359A966"
    }
  ];

  // *********  UTILITY FUNCTIONS  ********* //
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
  
  // *********  HTML COMPONENT FUNCTIONS  ********* //
 
  //Add New Pet / Modal
  const addPetBtnModal = () => {
    const domString = `
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-light btn-lg" data-bs-toggle="modal" data-bs-target="#add-pet">
      Add A Pet
      </button>
      <!-- Modal -->
      <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add A Pet</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="modal-body">
            
            <form>
            <div class="form-floating mb-3">
              <input class="form-control form-control-lg" type="text" placeholder="Name" id="name" aria-label="name" required>
              <label for="name">Pet's Name</label>
            </div>
        
            <div class="form-floating mb-3">
              <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
              <label for="color">Pet's Color</label>
            </div>

            <div class="form-floating mb-3">
              <input class="form-control form-control-lg" type="text" placeholder="Special Skill" id="specialSkill" aria-label="specialSkill" required>
              <label for="specialSkill">Pet's Special Skill</label>
            </div>
        
            <div class="form-floating mb-3">
              <select class="form-select form-control-lg" id="type" aria-label="type" required>
                <option value="">Select a type</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option></option>
                <option value="dino">Dino</option>
              </select>
              <label for="type">Type</label>
            </div>

            <div class="form-floating mb-3">
              <input class="form-control form-control-lg" type="text" placeholder="Image URL" id="imageUrl" aria-label="imageUrl" required>
              <label for="imageUrl">URL of Pet's Photo</label>
            </div>
        
            <button 
              type="submit" 
              class="btn btn-success" 
            >
              Submit
            </button>
          </form>
  
            </div>
          </div>
        </div>
      </div>
    `;
    renderToDom("#addPet", domString);
  };

   //HTML for all cards
   const allAnimalCards = (array) => {
     let domString = "";
     for (const animal of array) {
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
  }; //FIRST TRY AND I GOT THE DELETE BUTTON TO WORK PROPERLY!!!! AHHHHH!!!! I AM GETTING THIS!!!

  
  addPetBtnModal();
  allAnimalCards(pets);
  
  document.querySelector("#cat").addEventListener("click", filterFunction);
  document.querySelector("#dog").addEventListener("click", filterFunction);
  document.querySelector("#dino").addEventListener("click", filterFunction);
  document.querySelector("#viewAll").addEventListener("click", allAnimalCards);
  
  eventListenerForModal();
