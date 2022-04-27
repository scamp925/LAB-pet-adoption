
import renderToDom from "./renderToDom.js";

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

export default addPetBtnModal;
