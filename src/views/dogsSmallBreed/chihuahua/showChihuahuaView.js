import { mainEl, render, html } from "../../../constants/constants.js";
import { getChihuahuaInfo } from "../../../services/breeds.js"




export default async function showChihuahuaView() {
    const chihuahuaData = await getChihuahuaInfo()
    render(chihuahuaTemplate(chihuahuaData), mainEl)

}


function chihuahuaTemplate(chihuahuaData) {
    function translateCoatType(coatType) {
        const coatTypeTranslations = {
            short: "Късокосместа",
            long: "Дългокосместа",
            medium: "Средна дължина",
        };
        return coatTypeTranslations[coatType] || coatType; // Връща превода или оригиналната стойност, ако няма превод
    }
    function translateSize(size) {
        const sizeTranslations = {
            small: "Малък",
            medium: "Среден",
            large: "Голям",
        };
        return sizeTranslations[size] || size; // Връща превода или оригиналната стойност, ако няма превод
    }

    // Функция за преобразуване на нивото на енергия
    function translateEnergyLevel(energyLevel) {
        const energyLevelTranslations = {
            low: "Ниско",
            medium: "Средно",
            high: "Високо",
        };
        return energyLevelTranslations[energyLevel] || energyLevel; // Връща превода или оригиналната стойност, ако няма превод
    }
    return html`
     <section class="chihuahua-info">
            <h2>Чихуахуа</h2>
            ${chihuahuaData.map(
        (breed) => html`
                    <div class="breed-card">
                        <img src="${breed.image}"  class="breed-image" />
                        <div class="breed-details">
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
                        <div class="adoption-link">
                            <a href="/adopt/${breed.id}" class="adopt-button">Попълнете формуляр за осиновяване</a>
                        </div>
                    </div>
                `
    )}
        </section>
    `;
}