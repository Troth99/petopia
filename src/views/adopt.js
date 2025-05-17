import { html, render, mainEl } from "../constants/constants.js";
import { getUserFromLocalStorage } from "../utils/utils.js";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseInit.js";
import { setupAdoptForm } from "../services/setupAdoption.js";

async function findAnimalById(animalId) {
    const collections = ['cat-breeds', 'breeds', 'rabbit-breeds']; 
    
    for (const col of collections) {
        const animalDoc = await getDoc(doc(db, col, animalId));
        if (animalDoc.exists()) {
            return { id: animalDoc.id, ...animalDoc.data(), collection: col };
        }
    }
    return null; 
}

export async function showAdoptionForm(ctx) {
    const user = getUserFromLocalStorage();
    const animalId = ctx.params.id;

    const animal = await findAnimalById(animalId);
    
    console.log('User:', user);
    console.log('Animal:', animal);

    if (user && animal) {
        render(adoptionFormTemplate(animal), mainEl);
    } else {
        render(loginPromptTemplate(), mainEl);
    }
}

function adoptionFormTemplate(animal) {
    return html`
    <section class="adoption-form">
        <h2>Формуляр за осиновяване на домашен любимец!</h2>
        <div class="animal-preview">
            <img src="${animal.image}" alt="${animal.category}" />
            <p>${animal.description}</p>
        </div>
        <form @submit=${(e) => setupAdoptForm(e, animal.id)}>
            <label for="adopter-name">Вашето име:</label>
            <input type="text" id="adopter-name" name="adopterName" required />

            <label for="adopter-email">Вашият имейл:</label>
            <input type="email" id="adopter-email" name="adopterEmail" required />

            <label for="adopter-phone">Телефон:</label>
            <input type="tel" id="adopter-phone" name="adopterPhone" required />

            <label for="adopter-message">Съобщение:</label>
            <textarea id="adopter-message" name="adopterMessage" required></textarea>

            <button type="submit">Изпрати</button>
        </form>
    </section>
    `;
}

function loginPromptTemplate() {
    return html`
    <section class="login-prompt">
        <div class="login-prompt-container">
            <h2>Моля, влезте в профила си или се регистрирайте</h2>
            <p>Ако нямате акаунт, можете да се <a href="/register" class="link-button">регистрирате</a>.</p>
            <p>Ако вече имате акаунт, моля, <a href="/login" class="link-button">влезте</a>.</p>
        </div>
    </section>
    `;
}

