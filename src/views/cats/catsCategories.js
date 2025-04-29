import { mainEl, render, html } from "../../constants/constants.js";


export default function showCatsCategories() {

  render(catsCategoriesTemplate(), mainEl)
  const footer = document.querySelector('footer');

  if (footer) {
    footer.style.position = "relative"
  }

}


function catsCategoriesTemplate() {
  return html`
  <section class="cats-categories">
  <h2 id="cats-categories">Открий своята порода котка</h2>
  <div class="cat-category-grid">
    
    <a href="/cats/indoor" class="cat-category">
      <h3>За дома</h3>
      <p>Котки, които се чувстват чудесно в апартамент.</p>
    </a>
    
    <a href="/cats/long-hair" class="cat-category">
      <h3>С дълга козина</h3>
      <p>Пухкави красавици с разкошна козина.</p>
    </a>
    
    <a href="/cats/hypoallergenic" class="cat-category">
      <h3>Хипоалергенни</h3>
      <p>Подходящи за хора с алергии.</p>
    </a>
    
    <a href="/cats/friendly" class="cat-category">
      <h3>Дружелюбни</h3>
      <p>Идеални за семейства с деца.</p>
    </a>
    
    <a href="/cats/intelligent" class="cat-category">
      <h3>Интелигентни</h3>
      <p>Котки, които впечатляват с ума си.</p>
    </a>
    
    <a href="/cats/exotic" class="cat-category">
      <h3>Екзотични</h3>
      <p>Редки и уникални породи от цял свят.</p>
    </a>

  </div>
</section>
    `;
}