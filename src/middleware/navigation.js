import { headerEl, render, html } from "../constants/constants.js";
import { getUserFromLocalStorage } from "../utils/utils.js";
import { showHideCategories, } from "./showHideCategories.js";
import { setupDropdown } from "./showHideMenu.js";



document.addEventListener('DOMContentLoaded', function () {
    showHideCategories();
    setupDropdown();
   
});
export default function showNavigation(ctx, next) {
    const user = getUserFromLocalStorage()
    let userId;

    if (user) {
        userId = user.uid
    }
    render(navigationTemplate(userId), headerEl)
    setupDropdown();
   
    next()
}

function loggedInUser() {
    return html`
<li class="relative">
<span id="profile-link" class="profile-link-btn">
    <span class="profile-icon"></span>
</span>
  <div class="dropdown-content-menu">
    <div class="dropdown-item"><a href="/profile">Моят профил</a></div>
    <div class="dropdown-item"><a href="/settings">Настройки</a></div>
    <div class="dropdown-item"><a href="/settings">Преглед на покупките</a></div>
    <div class="dropdown-item"><a href="/settings">Поддръжка</a></div>
    <div class="dropdown-item"><a href="/settings">Сменяне на парола</a></div>
    <div class="dropdown-item"><a href="/settings">Връщане на домашен любимец</a></div>
    <div class="dropdown-item"><a href="/logout">Изход</a></div>
  </div>
</li>
                
    `
}

function guest() {
    return html`
    
    <li><a href="/register" id="register-link">Регистрация</a></li>
    <li><a href="/login" id="login-link">Вход</a></li>
    `
}
function navigationTemplate(userId) {
    return html`

    <div class="header-container">
        <!-- Лого -->
        <div class="logo">
            <a href="/">
            <span class="sr-only">Pettopia Logo</span>
            </a>
        </div>

        <nav class="nav-menu">
            <ul>
                <li><a href="/" id="home-link">Начало</a></li>
                <li><a href="#" id="ads-link">Обяви</a></li>
                <li class="dropdown">
                    <a href="#" class="dropbtn">Категории</a>
                    <div class="dropdown-content">
                        <a href="/cats">Котки</a>
                        <a href="/dogs">Кучета</a>
                        <a href="/birds">Птици</a>
                         <a href="/rabbits">Зайчета</a>
                         <a href="/roddent">Гризачи</a>
                         <a href="/fishes">Рибки</a>
                        <a href="#">Други</a>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- Търсачка по средата -->
        <div class="search-bar">
            <input type="text" placeholder="Търсене...">
            <button type="submit" class="search-button">🔍</button>
        </div>

        <!-- Навигация и профил вдясно -->

        <div class="user-actions">
            <ul>
                ${userId ? loggedInUser() : guest()}
            </ul>
        </div>
    </div>
    `
}

