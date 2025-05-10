import { db } from "../config/firebaseInit.js";
import { collection, addDoc } from "firebase/firestore";
import { html, mainEl, render } from "../constants/constants.js";
import { addCategoryRabbitHandler } from "../services/addRabbitCategory.js";


export default async function addRabbitView() {
    render(addRabbitTemplate(), document.querySelector("main"));


  
}
function addRabbitTemplate() {
    return html`
      <section class="add-breed">
            <h2>Добавяне на зайче в базата данни</h2>
            <form id="add-breed-form" @submit=${addCategoryRabbitHandler}>
                

                <label for="breed-image">Снимка на породата (URL):</label>
                <input type="text" id="cat-image" name="rabbitImage" required>

                <label for="breed-description">Описание:</label>
                <textarea id="breed-description" name="rabbitDescription" placeholder="Добавете описание на породата..." required></textarea>

                <label for="breed-size">Тип:</label>
                <select id="breed-size" name="rabbitSize" required>
                    <option value="indoor">Домашен</option>
                    <option value="mini">Мини</option>
                    <option value="gigantic">Гигандски</option>
                </select>
                <label for="breed-temperament">Темперамент:</label>
                <input type="text" id="breed-temperament" name="rabbitTemperament" placeholder="Пример: дружелюбен, активен" required>

                <label for="breed-weight">Тегло (кг):</label>
                <input type="text" id="breed-weight" name="rabbitWeight" placeholder="Пример: 1-3 кг" required>

                <label for="breed-height">Височина (см):</label>
                <input type="text" id="breed-height" name="rabbitHeight" placeholder="Пример: 15-23 см" required>

                <label for="breed-coat-type">Тип козина:</label>
                <select id="breed-coat-type" name="rabbitCoatType" required>
                    <option value="short">Късокосместа</option>
                    <option value="long">Дългокосместа</option>
                    <option value="medium">Средна дължина</option>
                </select>

                <label for="breed-lifespan">Продължителност на живота (години):</label>
                <input type="text" id="breed-lifespan" name="rabbitLifespan" placeholder="Пример: 12-20 години" required>

                <label for="breed-origin">Произход:</label>
                <input type="text" id="breed-origin" name="rabbitOrigin" placeholder="Пример: Мексико" required>

                <label for="breed-energy-level">Ниво на енергия:</label>
                <select id="breed-energy-level" name="rabbitEnergyLevel" required>
                    <option value="low">Ниско</option>
                    <option value="medium">Средно</option>
                    <option value="high">Високо</option>
                </select>

                <label for="breed-health-issues">Често срещани здравословни проблеми:</label>
                <textarea id="breed-health-issues" name="rabbitHealthIssues" placeholder="Пример: Проблеми с очите, ставите"></textarea>
                

                <button type="submit">Добави порода</button>
            </form>
        </section>
    `;
}
