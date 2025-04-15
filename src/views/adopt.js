import { html, render, mainEl } from "../constants/constants.js";
import { auth } from "../config/firebaseInit.js";
import { getUserFromLocalStorage } from "../utils/utils.js";

export async function showAdoptionForm(ctx) {
    const user = getUserFromLocalStorage()
        if (user) {
            render(adoptionFormTemplate(), mainEl);  
        } else {
            render(loginPromptTemplate(), mainEl);  
        }

}
function adoptionFormTemplate() {
    return html`
    <section class="adoption-form">
        <h2>Формуляр за осиновяване на </h2>
        <form >
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
