import { mainEl, render, html } from "../constants/constants.js";


export default function showDogsCategoryView() {

  render(dogsCategoriesTemplate(), mainEl)
  const footer = document.querySelector('footer');

  if (footer) {
    footer.style.position = "relative"
  }

}


function dogsCategoriesTemplate() {
  return html`
     <section class="dogs-categories">
      <h2 id="dogs-categories">Категории за кучета</h2>

      <ul>
        <li><a href="/dogs/small">Малки породи</a></li>
        <li> <a href="/dogs/medium">Средни породи</a></li>
        <li><a href="/dogs/large">Големи породи</a></li>
        <li> <a href="/dogs/short-hair">Късокосмести</a></li>
        <li> <a href="/dogs/long-hair">Дългокосмести</a></li>
        <li> <a href="/dogs/popular">Най-популярни породи</a></li>
      </ul>
     </section>
    `;
}