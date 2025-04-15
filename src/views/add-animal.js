import { db } from "../config/firebaseInit.js";
import { collection, addDoc } from "firebase/firestore";
import { html, render } from "../constants/constants.js";


export default async function addAnimalView() {
    
    render(addBreedTemplate(), document.querySelector("main"));
  
    };

function addBreedTemplate() {
    return html`
  <section class="animal-categories">
    <h2>Изберете категория за добавяне</h2>
    <div class="categories-container">
        <a href="/add-dog" class="category-card">
            <span>Добавяне на куче</span>
        </a>
        <a href="/add-cat" class="category-card">
            <span>Добавяне на котка</span>
        </a>
        <a href="/add-bird" class="category-card">
            <span>Добавяне на птица</span>
        </a>
        <a href="/add-rabbit" class="category-card">
            <span>Добавяне на зайче</span>
        </a>
        <a href="/add-rodent" class="category-card">
            <span>Добавяне на гризачи</span>
        </a>
        <a href="/add-fishes" class="category-card">
            <span>Добавяне на рибки</span>
        </a>
        <a href="/add-other" class="category-card">
            <span>Добавяне на друго животно</span>
        </a>
    </div>
</section>
    `;
}