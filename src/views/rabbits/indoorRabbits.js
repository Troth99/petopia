import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseInit.js";
import { mainEl, render, html } from "../../constants/constants.js";
import { getAllHomeRabbits } from "../../services/rabbitsRequester.js";

export default async function showAllIndoorRabbits() {
    const indoorRabbits = await getAllHomeRabbits();
    render(indorRabbits(indoorRabbits), mainEl);
}

function indorRabbits(exoticCats) {

    function translateCoatType(coatType) {
        const coatTypeTranslations = {
            short: "Късокосместа",
            long: "Дългокосместа",
            medium: "Средна дължина",
        };
        return coatTypeTranslations[coatType] || coatType;
    }


    function translateSize(size) {
        const sizeTranslations = {
            indoor: "За дома",
            mini: "Мини",
            gigantic: "Гигантски",
        };
        return sizeTranslations[size] || size;
    }


    function translateEnergyLevel(energyLevel) {
        const energyLevelTranslations = {
            low: "Ниско",
            medium: "Средно",
            high: "Високо",
        };
        return energyLevelTranslations[energyLevel] || energyLevel;
    }


    async function deleteBreed(breedId) {
        if (confirm("Сигурни ли сте, че искате да изтриете този запис?")) {
            try {

                await deleteDoc(doc(db, "rabbit-breeds", breedId));
                alert("Записът беше успешно изтрит!");
                location.reload();
            } catch (error) {
                console.error("Грешка при изтриването на запис:", error);
                alert("Не успяхме да изтрием записа.");
            }
        }
    }

    return html`
        <section class="chihuahua-info">
            <h2>Зайчета за дома</h2>

            ${exoticCats.length === 0
            ? html`<p class="no-data">Няма налични зайчета за дома за осиновяване в момента. </p>`
            : exoticCats.map(
                (breed) => html`
                          <div class="breed-card">
                              <img src="${breed.image}" class="breed-image" />
                              <div class="breed-details">
                                  <p><strong>Описание:</strong> ${breed.description}</p>
                                  <p><strong>Категория:</strong> ${translateSize(breed.size)}</p>
                                  <p><strong>Темперамент:</strong> ${breed.temperament}</p>
                                  <p><strong>За какво е подходящ:</strong> ${breed.perfect}</p>
                                  <p><strong>Тегло:</strong> ${breed.weight}</p>
                                  <p><strong>Височина:</strong> ${breed.height}</p>
                                  <p><strong>Тип козина:</strong> ${translateCoatType(breed.coatType)}</p>
                                  <p><strong>Продължителност на живота:</strong> ${breed.lifespan}</p>
                                  <p><strong>Произход:</strong> ${breed.origin}</p>
                                  <p><strong>Ниво на енергия:</strong> ${translateEnergyLevel(breed.energyLevel)}</p>
                                  <p><strong>Здравословни проблеми:</strong> ${breed.healthIssues}</p>
                              </div>
                              <div class="adoption-link">
                                  <a href="/adopt/${breed.id}" class="adopt-button">Попълнете формуляр за осиновяване</a>
                                  ${auth.currentUser?.email === 'troth@abv.bg'
                        ? html`
                                            <button class="delete-button" @click="${() => deleteBreed(breed.id)}">Изтрий</button>
                                        `
                        : ''}
                              </div>
                          </div>
                      `
            )}
        </section>
    `;
}