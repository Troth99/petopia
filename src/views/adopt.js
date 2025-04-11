import { html, render, mainEl } from "../constants/constants.js";

export async function showAdoptionForm(ctx) {
  
    render(adoptionFormTemplate(), mainEl);
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