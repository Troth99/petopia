import { mainEl, render, html } from "../../constants/constants.js";


export default function showRabbitCategories() {

  render(rabbitCategoriesTemplate(), mainEl)
  const footer = document.querySelector('footer');

  if (footer) {
    footer.style.position = "relative"
  }

}


function rabbitCategoriesTemplate() {
  return html`
<section class="rabbits-categories">
  <h2 id="rabbits-categories">Открий своето зайче</h2>

  <div class="rabbit-category-grid">
    <a href="/rabbit/indoor" class="rabbit-category">
      <h3>Домашни</h3>
      <p>Зайчета, които се чувстват чудесно у дома.</p>
    </a>

    <a href="/rabbit/mini" class="rabbit-category">
      <h3>Мини</h3>
      <p>Малки, сладки и лесни за отглеждане.</p>
    </a>

    <a href="/rabbit/gigantic" class="rabbit-category">
      <h3>Гигантски</h3>
      <p>Впечатляващи по размер, но нежни по сърце.</p>
    </a>
  </div>
</section>
  `;
}