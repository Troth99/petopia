
import { page, render, html, mainEl } from "../constants/constants.js";
import { changePwHandler } from "../services/changePwService.js";
import { getUserFromLocalStorage } from "../utils/utils.js";

export default function changePwView() {
    const user = getUserFromLocalStorage()
    console.log(user)
    render(changePw(user), mainEl)

}

function changePw(user) {

    return html`
  <div class="edit-profile-wrapper">
            <h2>Смяна на парола</h2>
            <form id="edit-profile-form" @submit=${(e) => changePwHandler(e, user)} >

                <div class="input-group">
    <label for="currentPassword">Текуща парола</label>
    <input type="password" id="currentPassword" name="currentPassword" placeholder="Въведете текущата си парола" required>
</div>
                <div class="input-group">
                    <label for="password">Нова парола</label>
                    <input type="password" id="password" name="password" placeholder="Въведете нова парола">
                </div>
                <div class="input-group">
                    <label for="password">Повтори новата парола</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Въведете нова парола">
                </div>
                <button type="submit" class="save-profile-btn">Запази промените</button>
            </form>
        </div>
`

}