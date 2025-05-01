import { db } from "../config/firebaseInit.js";
import { collection, addDoc } from "firebase/firestore";
import { html, render } from "../constants/constants.js";
import { addCategoryCatHandler } from "../services/addCatCategory.js";


export default async function addCatView() {
    render(addCatBreedTemplate(), document.querySelector("main"));


  
}
function addCatBreedTemplate() {
    return html`
      <section class="add-breed">
            <h2>Добавяне на котка в базата данни</h2>
            <form id="add-breed-form" @submit=${addCategoryCatHandler}>
                

                <label for="breed-image">Снимка на породата (URL):</label>
                <input type="text" id="cat-image" name="catImage" required>

                <label for="breed-description">Описание:</label>
                <textarea id="breed-description" name="catDescription" placeholder="Добавете описание на породата..." required></textarea>

                <label for="breed-size">Тип:</label>
                <select id="breed-size" name="catSize" required>
                    <option value="indoor">За дома</option>
                    <option value="long-hair">С дълга козина</option>
                    <option value="hypoallergenic">Хипоалергенни</option>
                    <option value="friendly">Дружелюбни</option>
                    <option value="intelligent">Интелигентни</option>
                    <option value="exotic">Екзотични</option>
                </select>
                <label for="breed-temperament">Темперамент:</label>
                <input type="text" id="breed-temperament" name="catTemperament" placeholder="Пример: дружелюбен, активен" required>

                <label for="breed-perfect">Подходящ за:</label>
                <input type="text" id="breed-perfect" name="catPerfect" placeholder="Пример: апартамет, къща" required>

                <label for="breed-weight">Тегло (кг):</label>
                <input type="text" id="breed-weight" name="catWeight" placeholder="Пример: 1-3 кг" required>

                <label for="breed-height">Височина (см):</label>
                <input type="text" id="breed-height" name="catHeight" placeholder="Пример: 15-23 см" required>

                <label for="breed-coat-type">Тип козина:</label>
                <select id="breed-coat-type" name="catCoatType" required>
                    <option value="short">Късокосместа</option>
                    <option value="long">Дългокосместа</option>
                    <option value="medium">Средна дължина</option>
                </select>

                <label for="breed-lifespan">Продължителност на живота (години):</label>
                <input type="text" id="breed-lifespan" name="catLifespan" placeholder="Пример: 12-20 години" required>

                <label for="breed-origin">Произход:</label>
                <input type="text" id="breed-origin" name="catOrigin" placeholder="Пример: Мексико" required>

                <label for="breed-energy-level">Ниво на енергия:</label>
                <select id="breed-energy-level" name="catEnergyLevel" required>
                    <option value="low">Ниско</option>
                    <option value="medium">Средно</option>
                    <option value="high">Високо</option>
                </select>

                <label for="breed-health-issues">Често срещани здравословни проблеми:</label>
                <textarea id="breed-health-issues" name="catHealthIssues" placeholder="Пример: Проблеми с очите, ставите"></textarea>
                

                <button type="submit">Добави порода</button>
            </form>
        </section>
    `;
}

