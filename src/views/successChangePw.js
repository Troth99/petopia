import { render, html, mainEl } from "../constants/constants.js";


export default function sucessChangePwView(){
    const footer = document.querySelector('footer')

    if(footer){
        footer.style.display = 'none'
    }
        render(successChangePWTemplate(), mainEl);
}


function successChangePWTemplate(){
    return html `
    <div class="success-wrapper">
            <h2>Паролата е сменена успешно!</h2>
            <p>Вашата парола беше успешно актуализирана.</p>
            <a href="/profile" class="profile-link">Върнете се към профила си</a>
        </div>
    `
}