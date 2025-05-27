import { mainEl ,render, html} from "../constants/constants.js";
import { getAdoptedPetsByUser, getAnimalById } from "../services/getAdoptedPet.js";
import { getUserFromLocalStorage } from "../utils/utils.js";


export async function myAdoptedPets(){
  const user = getUserFromLocalStorage();
  const userId = user.uid;

  const myAdoptions = await getAdoptedPetsByUser(userId);

  const approvedPets = await Promise.all(
    myAdoptions.map(async (adoption) => {
      const animal = await getAnimalById(adoption.animalId);
      return { ...animal, adoptionId: adoption.id };
    })
);


  render(myPetsTempalte(approvedPets), mainEl);
}
function myPetsTempalte(approvedPets) {
  if (!approvedPets || approvedPets.length === 0) {
    return html`
      <p class="myPetTitle">Нямате осиновени домашни любимци.</p>
    `;
  }

  return html`
    <h1 class="myPetTitle">Мойте осиновени животни</h1>
    <ul id="my-pets-list" class="my-pets-lists">
      ${approvedPets.map(pet => html`
        <li id="pet-${pet.id || pet.adoptionId}">
          <h3>${pet.name}</h3>
          <img src="${pet.image || '/images/default-pet.png'}" alt="${pet.name}" width="200" />
          <p><strong>Описание:</strong> ${pet.description || 'неизвестна'}</p>
        </li>
      `)}
    </ul>
  `;
}
