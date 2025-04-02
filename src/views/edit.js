
import { page, render, html, mainEl } from "../constants/constants.js";
import { submitEditHandler } from "../services/editService.js";
import { getUserFromLocalStorage } from "../utils/utils.js";

export default function editView() {
    const user = getUserFromLocalStorage()
    console.log(user)
    render(editTemplate(user), mainEl)

}

function editTemplate(user) {

    return html`
  <div class="edit-profile-wrapper">
            <h2>Редактиране на профила</h2>
            <form id="edit-profile-form" @submit=${(e) => { submitEditHandler(e) }}>
                <div class="input-group">
                    <label for="displayName">Потребителско име</label>
                    <input type="text" id="displayName" name="displayName" value="${user.displayName || ''}" required>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" value="${user.email}" required>
                </div>
                <div class="input-group">
                    <label for="phone">Телефонен номер</label>
                    <input type="tel" id="phone" name="phone" value="${user.phone || ''}">
                </div>
                <div class="input-group">
    <label for="currentPassword">Текуща парола</label>
    <input type="password" id="currentPassword" name="currentPassword" placeholder="Въведете текущата си парола" required>
</div>
                <div class="input-group">
                    <label for="password">Нова парола</label>
                    <input type="password" id="password" name="password" placeholder="Въведете нова парола">
                </div>
                <button type="submit" class="save-profile-btn">Запази промените</button>
            </form>
        </div>
`

}