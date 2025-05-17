import { getAuth, signInWithEmailAndPassword } from "@firebase/auth"
import { render, html, page, mainEl } from "../constants/constants.js"
import { doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";  // Импортирайте Firestore
import { auth } from "../config/firebaseInit.js";
import { db } from "../config/firebaseInit.js";
import { getUserFromLocalStorage } from "../utils/utils.js"


export default async function adoptationStatusView() {
const auth = getUserFromLocalStorage(); // auth е потребителски обект или null
console.log(auth)
if (!auth) {

  return;
}
const userId = auth.uid; // взимаме uid

const q = query(collection(db, "adoptions"), where("userId", "==", userId));
const querySnapshot = await getDocs(q);

const myAdoptions = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
render(adoptationStatusTemplate(myAdoptions), mainEl);
}


function adoptationStatusTemplate(adoptions) {
    return html`
    <section class="adoption-status-section">
      <h2>Моите заявки за осиновяване</h2>
      ${adoptions.length === 0 
        ? html`<p>Нямате подадени заявки.</p>` 
        : adoptions.map(adoption => {
            // Определяме клас според статуса
            let statusClass = '';
            if (adoption.status === 'approved') statusClass = 'adoption-request approved';
            else if (adoption.status === 'rejected') statusClass = 'adoption-request rejected';
            else statusClass = 'adoption-request pending';

            return html`
              <article class="${statusClass}" @click=${() => showAnimalDetails(adoption.animalId)} >
                <h3>Заявка за животно ID: ${adoption.animalId}</h3>
                <p>Статус: ${adoption.status === 'pending' ? 'Чакаща' : 
                            adoption.status === 'approved' ? 'Одобрена' : 
                            adoption.status === 'rejected' ? 'Отхвърлена' : 'Няма статус'}</p>

                ${adoption.status === 'approved' ? html`
                  <p>Ще се свържем с вас по посочения телефон: ${adoption.adopterPhone}</p>
                ` : null}

                ${adoption.status === 'rejected' ? html`
                  <p>За съжаление заявката ви е отхвърлена. Можете да опитате отново или да се свържете с нас за повече информация.</p>
                ` : null}

                <p class="details-link">Виж детайли за животното</p>
              </article>
            `;
          })
      }
    </section>
    `;
}


export async function animalDetailsView(ctx) {
    const animalId = ctx.params.id;

    const collections = ['breeds', 'cat-breeds', 'rabbit-breeds'];
    let animalDoc = null;
    let animal = null;

    for (const collectionName of collections) {
        const docRef = doc(db, collectionName, animalId);
        animalDoc = await getDoc(docRef);

        if (animalDoc.exists()) {
            animal = { id: animalDoc.id, ...animalDoc.data() };
            break; // намерено, излизаме от цикъла
        }
    }

    if (!animal) {
        render(html`<p>Животното не е намерено</p>`, mainEl);
        return;
    }
    render(html`
  <section class="animal-details">
  <h2 class="animal-name">${animal.name}</h2>
  <div class="animal-image-wrapper">
    <img src=${animal.image} alt=${animal.name} class="animal-image" />
  </div>
  <p class="animal-description">${animal.description}</p>
</section>
    `, mainEl);
}

function showAnimalDetails(animalId) {
    page(`/animal/${animalId}`);
}
