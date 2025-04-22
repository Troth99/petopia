import { mainEl, render, html } from "../../constants/constants.js";
import { getAllLongHairCoatDogs, getAllShortCoatBreeds } from "../../services/breeds";
import { auth } from "../../config/firebaseInit.js";

export default async function longHaiDogsView() {
    const longCoatDogs = await getAllLongHairCoatDogs();
    render(longCoatTemplate(longCoatDogs), mainEl);
}

function longCoatTemplate(longCoatDogs) {

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
            small: "Малък",
            medium: "Среден",
            large: "Голям",
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

                await deleteDoc(doc(db, "breeds", breedId));
                alert("Записът беше успешно изтрит!");
                location.reload();
            } catch (error) {
                console.error("Грешка при изтриването на запис:", error);
                alert("Не успяхме да изтрием записа.");
            }
        }
    }

    return html`
<section class="short-hair-wrapper">
    <h2 class="short-hair-title">Дългокосместа Кучета</h2>

    <div class="short-hair-section">
        ${longCoatDogs.length === 0
            ? html`<p class="short-hair-empty">Няма налични кучета с дълга козина в момента.</p>`
            : longCoatDogs.map(
                (breed) => html`
                    <div class="short-hair-card">
                        <img src="${breed.image}" class="short-hair-image" />
                        <div class="short-hair-details">
                            <p><strong>Описание:</strong> ${breed.description}</p>
                            <p><strong>Размер:</strong> ${translateSize(breed.size)}</p>
                            <p><strong>Темперамент:</strong> ${breed.temperament}</p>
                            <p><strong>Тегло:</strong> ${breed.weight}</p>
                            <p><strong>Височина:</strong> ${breed.height}</p>
                            <p><strong>Тип козина:</strong> ${translateCoatType(breed.coatType)}</p>
                            <p><strong>Продължителност на живота:</strong> ${breed.lifespan}</p>
                            <p><strong>Произход:</strong> ${breed.origin}</p>
                            <p><strong>Ниво на енергия:</strong> ${translateEnergyLevel(breed.energyLevel)}</p>
                            <p><strong>Здравословни проблеми:</strong> ${breed.healthIssues}</p>
                        </div>
                        <div class="short-hair-actions">
                            <a href="/adopt/${breed.id}" class="short-hair-adopt">Попълнете формуляр за осиновяване</a>
                            ${auth.currentUser?.email === 'troth@abv.bg'
                                ? html`
                                    <button class="short-hair-delete" @click="${() => deleteBreed(breed.id)}">Изтрий</button>
                                  `
                                : ''}
                        </div>
                    </div>
                `
            )}
    </div>
</section>
    `;
}