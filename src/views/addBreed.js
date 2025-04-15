import { db } from "../config/firebaseInit.js";
import { collection, addDoc } from "firebase/firestore";
import { html, render } from "../constants/constants.js";
import { addCategoryDogHandler } from "../services/addCategory.js";


export default async function addDogVeiw() {
    render(addBreedTemplate(), document.querySelector("main"));

    // Добавяне на слушатели след рендиране на шаблона
    const breedSizeSelect = document.getElementById("breed-size");
    const breedCategorySelect = document.getElementById("breed-category");

    if (!breedSizeSelect || !breedCategorySelect) {
        console.error("Елементите breed-size или breed-category не са намерени.");
        return;
    }

    const sizeToCategories = {
        small: [
            { value: "chihuahua", text: "Чихуахуа" },
            { value: "pomeranian", text: "Померан" },
            { value: "yorkshire-terrier", text: "Йоркширски териер" },
            { value: "pug", text: "Мопс" },
            { value: "dachshund", text: "Дакел" },
            { value: "shih-tzu", text: "Ши Тцу" },
            { value: "french-bulldog", text: "Френски булдог" },
            { value: "maltese", text: "Малтийска болонка" },
            { value: "pekingese", text: "Пекинез" },
            { value: "cavalier-king-charles", text: "Кавалер Кинг Чарлз шпаньол" },
        ],
        medium: [
            { value: "beagle", text: "Бийгъл" },
            { value: "border-collie", text: "Бордър Коли" },
            { value: "bulldog", text: "Булдог" },
        ],
        large: [
            { value: "german-shepherd", text: "Немска овчарка" },
            { value: "golden-retriever", text: "Голдън Ретривър" },
            { value: "labrador", text: "Лабрадор" },
        ],
    };

    function updateCategories(size) {
        breedCategorySelect.innerHTML = "";

        sizeToCategories[size].forEach((category) => {
            const option = document.createElement("option");
            option.value = category.value;
            option.textContent = category.text;
            breedCategorySelect.appendChild(option);
        });
    }

    breedSizeSelect.addEventListener("change", (e) => {
        const selectedSize = e.target.value;
        updateCategories(selectedSize);
    });

    // Инициализиране на категориите за "Малък" размер
    updateCategories("small");
}
function addBreedTemplate() {
    return html`
      <section class="add-breed">
            <h2>Добавяне на нова порода</h2>
            <form id="add-breed-form" @submit=${addCategoryDogHandler}>
                

                <label for="breed-image">Снимка на породата (URL):</label>
                <input type="text" id="breed-image" name="breedImage" required>

                <label for="breed-description">Описание:</label>
                <textarea id="breed-description" name="breedDescription" placeholder="Добавете описание на породата..." required></textarea>

                <label for="breed-size">Размер:</label>
                <select id="breed-size" name="breedSize" required>
                    <option value="small">Малък</option>
                    <option value="medium">Среден</option>
                    <option value="large">Голям</option>
                </select>
                <label for="breed-category">Категория:</label>
                <select id="breed-category" name="breedCategory" required>
    
                </select>
                <label for="breed-temperament">Темперамент:</label>
                <input type="text" id="breed-temperament" name="breedTemperament" placeholder="Пример: дружелюбен, активен" required>

                <label for="breed-weight">Тегло (кг):</label>
                <input type="text" id="breed-weight" name="breedWeight" placeholder="Пример: 1-3 кг" required>

                <label for="breed-height">Височина (см):</label>
                <input type="text" id="breed-height" name="breedHeight" placeholder="Пример: 15-23 см" required>

                <label for="breed-coat-type">Тип козина:</label>
                <select id="breed-coat-type" name="breedCoatType" required>
                    <option value="short">Късокосместа</option>
                    <option value="long">Дългокосместа</option>
                    <option value="medium">Средна дължина</option>
                </select>

                <label for="breed-lifespan">Продължителност на живота (години):</label>
                <input type="text" id="breed-lifespan" name="breedLifespan" placeholder="Пример: 12-20 години" required>

                <label for="breed-origin">Произход:</label>
                <input type="text" id="breed-origin" name="breedOrigin" placeholder="Пример: Мексико" required>

                <label for="breed-energy-level">Ниво на енергия:</label>
                <select id="breed-energy-level" name="breedEnergyLevel" required>
                    <option value="low">Ниско</option>
                    <option value="medium">Средно</option>
                    <option value="high">Високо</option>
                </select>

                <label for="breed-health-issues">Често срещани здравословни проблеми:</label>
                <textarea id="breed-health-issues" name="breedHealthIssues" placeholder="Пример: Проблеми с очите, ставите"></textarea>
                

                <button type="submit">Добави порода</button>
            </form>
        </section>
    `;
}

