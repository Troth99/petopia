import { mainEl ,render, html} from "../constants/constants.js";


export default function showPetCollection(){

    render(petColelctionTemplate(), mainEl)

    const footer = document.querySelector("footer");
    if (footer) {
        const contentHeight = document.body.offsetHeight;
        const windowHeight = window.innerHeight;

        if (contentHeight < windowHeight) {
            footer.style.position = "absolute";
            footer.style.bottom = "0";
        } else {
            footer.style.position = "relative";
        }
    }


}


function petColelctionTemplate(){
    return html `
      
        <section class="pet-collection">
            <h2 id="pet-collection-title">Открий своя любимец</h2>
            <div class="categories">
                <div class="category">
                    <a href="/dogs">
                        <span class="category-icon dogs-icon"></span>
                        <h3>Кучета</h3>
                    </a>
                </div>
                <div class="category">
                    <a href="/cats">
                        <span class="category-icon cats-icon"></span>
                        <h3>Котки</h3>
                    </a>
                </div>
                <div class="category">
                    <a href="/birds">
                        <span class="category-icon birds-icon"></span>
                        <h3>Птици</h3>
                    </a>
                </div>
                <div class="category">
                    <a href="/cats">
                        <span class="category-icon rabbit-icon"></span>
                        <h3>Зайчета</h3>
                    </a>
                </div>
                <div class="category">
                    <a href="/rodents">
                        <span class="category-icon rodents-icon"></span>
                        <h3>Гризачи</h3>
                    </a>
                </div>
            </div>
        </section>
    `;
}
