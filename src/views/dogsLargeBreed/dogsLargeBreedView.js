import { mainEl, render, html } from "../../constants/constants.js";


export default function largeBreedView() {

    render(largeBreedTemplate(), mainEl)
   
}


function largeBreedTemplate() {
    return html`
    <section class="small-dogs">
      <h2 id="small-dogs-title">Големи породи кучета</h2>
      <div class="dog-cards">
         <div class="dog-card">
          <a href="/dogs/german-shepherd">
            <span class="dog-image german-shepherd"></span>
            <h3>Немска овчарка</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/golden-retriever">
            <span class="dog-image golden-retriever"></span>
            <h3>Голдън Ретривър</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/labrador">
            <span class="dog-image labrador"></span>
            <h3>Лабрадор</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/english-mastiff">
            <span class="dog-image english-mastiff"></span>
            <h3>Мастиф</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/saint-bernard">
            <span class="dog-image saint-bernard"></span>
            <h3>Санбернар</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/newfoundland">
            <span class="dog-image newfoundland"></span>
            <h3>Нюфаундленд</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/kavkaz-shepherd">
            <span class="dog-image kavkaz-shepherd"></span>
            <h3>Кавказка овчарка</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/kangal">
            <span class="dog-image kangal"></span>
            <h3>Кангал</h3>
          </a>
        </div>
      </div>
    </section>
    `;
}