import { mainEl, render, html } from "../../constants/constants.js";


export default function smallDogsBreedView() {

    render(smallDogsBreedTemplate(), mainEl)
   
}


function smallDogsBreedTemplate() {
    return html`
    <section class="small-dogs">
      <h2 id="small-dogs-title">Малки породи кучета</h2>
      <div class="dog-cards">
        <div class="dog-card">
          <a href="/dogs/chihuahua">
            <span class="dog-image chihuahua"></span>
            <h3>Чихуахуа</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/pomeranian">
            <span class="dog-image pomeranian"></span>
            <h3>Померан</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/yorkshire-terrier">
            <span class="dog-image yorkshire-terrier"></span>
            <h3>Йоркширски териер</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/pug">
            <span class="dog-image pug"></span>
            <h3>Мопс</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/dachshund">
            <span class="dog-image dachshund"></span>
            <h3>Дакел</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/shih-tzu">
            <span class="dog-image shih-tzu"></span>
            <h3>Ши Тцу</h3>
          </a>
        </div>

        <div class="dog-card">
          <a href="/dogs/maltese">
            <span class="dog-image maltese"></span>
            <h3>Малтийска болонка</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/pekingese">
            <span class="dog-image pekingese"></span>
            <h3>Пекинез</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/cavalier-king-charles">
            <span class="dog-image cavalier-king-charles"></span>
            <h3>Кавалер Кинг Чарлз шпаньол</h3>
          </a>
        </div>
      </div>
    </section>
    `;
}