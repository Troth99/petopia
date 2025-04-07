
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseInit.js";
import { page, render, html, mainEl } from "../constants/constants.js";
import { getUserFromLocalStorage } from "../utils/utils.js";


export default function profileView() {
    const user = getUserFromLocalStorage()
    console.log(user)
    render(profileTemplate(user), mainEl)

}


function profileTemplate(user) {
    return html`
       <div class="profile-wrapper">
            <div class="profile-header">
                <h2 class="profile-name"> Добре дошли ${user.displayName}</h2>
                <p class="profile-email">${user.email}</p>
            </div>
            <div class="profile-content">
                <h3>Моите данни</h3>
                <ul class="profile-info">
                    <li><strong>Потребителско име:</strong> ${user.displayName}</li>
                    <li><strong>Email:</strong> ${user.email}</li>
                    <li><strong>Телефон:</strong> ${user.phone}</li>
                    <li><strong>Последно влизане:</strong> ${user.lastSignInTime}</li>
                </ul>
                <a href="/edit/${user.uid}" class="edit-profile-link"> Редактиране на профила</a>
            </div>
            <div class="profile-sections">
                <h3>Други секции</h3>
                <ul class="profile-menu">
                    <li><a href="/my-pets">Преглед на домашните любимци</a></li>
                    <li><a href="/support">Поддръжка</a></li>
                    <li><a href="/return-pet">Връщане на домашен любимец</a></li>
                    <li><a href="/logout">Изход</a></li>
                </ul>
            </div>
        </div>

    `
}