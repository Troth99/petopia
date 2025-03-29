import { mainEl ,render, html} from "../constants/constants.js";


export function showHomePage(){
    render(homwPageTemplate(), mainEl)
}

function homwPageTemplate(){
    return html `

    <section class="hero">
        <div class="hero-text">
            <h2>Намерете своя нов най-добър приятел! 🐾</h2>
            <p>Разгледайте нашите сладки домашни любимци и дайте им нов дом.</p>
            <a href="#" class="btn">Разгледайте любимците</a>
        </div>
        <div class="hero-image"></div>
    </section>

    <section class="about">
    <div class="container">
        <h2>За нас</h2>
        <div class="about-content">
            <div class="about-image">

            </div>
            <div class="about-text">
                <p>Нашата мисия е да помагаме на бездомните животни да намерят нови домове и любящи семейства.</p>
                <p>Ние вярваме, че всеки домашен любимец заслужава шанс за по-добър живот, и се стремим да улесним процеса на осиновяване за всички.</p>
            </div>
        </div>
    </div>
</section>

<section class="adoption-steps">
    <div class="container">
        <h2>Как да осиновя?</h2>
        <ol>
            <li><span class="step-number">1</span> Изберете любимец, който ви харесва.</li>
            <li><span class="step-number">2</span> Попълнете формата за осиновяване.</li>
            <li><span class="step-number">3</span> Свържете се с нас за допълнителна информация.</li>
            <li><span class="step-number">4</span> Запишете се за осиновяването и вземете новия си приятел вкъщи!</li>
        </ol>
    </div>
</section>

<section class="help-us">
    <div class="container">
        <div class="help-us-content">
            <div class="help-us-text">
                <h2>Как можем да помогнем?</h2>
                <p>Не можете да осиновите? Не се притеснявайте! Всяка помощ е важна. Ето как можете да помогнете:</p>
                <ul>
                    <li>Дарете храна или играчки за животни.</li>
                    <li>Станете доброволец и помагайте на място.</li>
                    <li>Направете финансово дарение, за да ни помогнете да осигурим здравеопазване на животните.</li>
                </ul>
                <a href="#" class="btn">Научете повече</a>
            </div>
            <div class="help-us-image">
    
            </div>
        </div>
    </div>
</section>


<section class="faq">
    <div class="container">
        <h2>Често задавани въпроси</h2>
        <dl>
            <dt>Какви са условията за осиновяване?</dt>
            <dd>Ние изискваме попълване на форма за осиновяване и кратко интервю, за да се уверим, че ще осигурите безопасен дом за животното.</dd>
            
            <dt>Какво включва осиновяването?</dt>
            <dd>Всички осиновени животни са ваксинирани, кастрирани и с микрочип. Ще получите и пакет с основни консумативи.</dd>

            <dt>Мога ли да върна животното, ако не се справям?</dt>
            <dd>Да, можем да ви помогнем в такъв случай. Нашият екип ще осигури всички необходими стъпки.</dd>
        </dl>
    </div>
</section>



    `
}