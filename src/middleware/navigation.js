import { headerEl, render, html } from "../constants/constants.js";
import { getUserFromLocalStorage } from "../utils/utils.js";
import { showHideCategories, showHideToys, } from "./showHideCategories.js";
import { setupDropdown } from "./showHideMenu.js";



document.addEventListener('DOMContentLoaded', function () {
    showHideCategories();
    showHideToys()
    setupDropdown();

});
export default function showNavigation(ctx, next) {
    const user = getUserFromLocalStorage()

    render(navigationTemplate(user), headerEl)
    setupDropdown();

    next()
}

function loggedInUser(user) {
    const isAdmin = user.email === "troth@abv.bg";

    return html`
<li class="relative">
<span id="profile-link" class="profile-link-btn">
    <span class="profile-icon"></span>
</span>
  <div class="dropdown-content-menu">
    <div class="dropdown-item"><a href="/profile">Моят профил</a></div>

    <div class="dropdown-item"><a href="/addoptation">Преглед на процес за осиновяване</a></div>
    <div class="dropdown-item"><a href="/settings">Поддръжка</a></div>
    <div class="dropdown-item"><a href="/change-password/${user.uid}">Сменяне на парола</a></div>
    <div class="dropdown-item"><a href="/settings">Връщане на домашен любимец</a></div>
    ${isAdmin
            ? html`<div class="dropdown-item"><a href="/add-animal">Добавяне на животно</a></div>`
            : ""}
    ${isAdmin 
        ? html`<div class="dropdown-item"><a href="/adminpanel">Админ панел</a></div>`
            : ""}
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
function navigationTemplate(user) {
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
                <li class="dropdown">
                    <a href="#" class="dropbtn">Категории</a>
                    <div class="dropdown-content">
                        <a href="/cats">Котки</a>
                        <a href="/dogs">Кучета</a>
                         <a href="/rabbits">Зайчета</a>
                         <a href="/roddent">Гризачи</a>
                    </div>


                </li>
                <li class="dropdown-toys">
                    <a href="#" class="dropbtn-toys">Играчки</a>
                    <div class="dropdown-content-toys">
                        <a href="/cat-toys">Играчки за котки</a>
                        <a href="/dog-toys">Играчки за кучета</a>
                        <a href="/bird-toys">Играчки за птици</a>
                        <a href="#">Други</a>
                    </div>

                    
                </li>
            </ul>
        </nav>
        <!-- Търсачка по средата -->
<form id="searchForm" class="search-bar" autocomplete="off">
  <input type="text" id="searchInput" placeholder="Въведете порода...">
  <button type="submit" class="search-button">🔍</button>
  <ul id="suggestions" ></ul>
</form>

        <!-- Навигация и профил вдясно -->

        <div class="user-actions">
            <ul>
                ${user ? loggedInUser(user) : guest()}
            </ul>
        </div>
    </div>
    `
}

