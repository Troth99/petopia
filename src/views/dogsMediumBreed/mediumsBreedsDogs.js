import { mainEl, render, html } from "../../constants/constants.js";


export default function meidumBreedView() {

    render(mediumBreedTemplate(), mainEl)
   
}


function mediumBreedTemplate() {
    return html`
    <section class="small-dogs">
      <h2 id="small-dogs-title">Средни породи кучета</h2>
      <div class="dog-cards">
         <div class="dog-card">
          <a href="/dogs/English-Cocker-Spaniel">
            <span class="dog-image English-Cocker-Spaniel"></span>
            <h3>Английски кокер шпаньол</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/Beagle">
            <span class="dog-image beagle"></span>
            <h3>Бигъл</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/Australian-shepherd">
            <span class="dog-image australian-shepherd"></span>
            <h3>Австралийска овчарка</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/Bull-terrier">
            <span class="dog-image Bull-Terrier"></span>
            <h3>Бультериѐр </h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/Shetland-sheepdog">
            <span class="dog-image Shetland-sheepdog"></span>
            <h3>Шетландска овчарка</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/chow-chow">
            <span class="dog-image Chow-Chow"></span>
            <h3>Чао Чао</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/finnish-spitz">
            <span class="dog-image finnish-spitz"></span>
            <h3>Финландско шпице</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/pharaoh-hound">
            <span class="dog-image Pharaoh-Hound"></span>
            <h3>Фараоново куче</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/brittany-spaniel">
            <span class="dog-image Brittany-Spaniel"></span>
            <h3>Британи шпаньол</h3>
          </a>
        </div>
        <div class="dog-card">
          <a href="/dogs/norwegian-elkhound">
            <span class="dog-image Norwegian-Elkhound"></span>
            <h3>Норвежки елкхунд</h3>
          </a>
        </div>
      </div>
    </section>
    `;
}