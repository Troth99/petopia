import { createUserWithEmailAndPassword } from "firebase/auth";
import { mainEl, render, html, page } from "../constants/constants.js"
import { auth } from "../config/firebaseInit.js"
import { registerHandler } from "../services/registrationAuthntication.js";






export default function showRegister() {
    render(registrationTemplate(), mainEl);


    const confirmPwEL = document.getElementById('toggleConfirmPassword');
    if (confirmPwEL) {
        console.log('Бутонът toggleConfirmPassword е намерен.');

        confirmPwEL.addEventListener('click', () => {
            let confirmPwType = document.getElementById('confirm-password');
            let normalPwEl = document.getElementById('password');

            if (normalPwEl && confirmPwType) {
                normalPwEl.type = normalPwEl.type === 'password' ? 'text' : 'password';
                confirmPwType.type = confirmPwType.type === 'password' ? 'text' : 'password';
            } else {
            }
        });
    } else {

    }
}



function registrationTemplate() {
    return html`
     <div class="register-wrapper">
    <div class="background-image"></div>

    <div class="register-container">
        <h2>Регистрирай се в Pettopia 🐾</h2>
        <form method="POST" class="register-form" @submit=${registerHandler} >
            <div class="input-group">
                <label for="username">Потребителско име</label>
                <input type="text" id="username" name="username" placeholder="Въведи потребителско име" required>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Въведи своя email" required>
            </div>
            <div class="input-group">
        <label for="phone">Телефонен номер</label>
        <input type="tel" id="phone" name="phone" placeholder="Въведи телефонен номер" required>
            </div>
            <div class="input-group">
             <label for="password">Парола</label>
                 <div class="password-container">
                 <input type="password" id="password" name="password" placeholder="Въведи парола" required>
          
                    </div>
                    </div>
                        <div class="input-group">
                            <label for="confirm-password">Потвърди паролата</label>
                            <div class="password-container">
                             <input type="password" id="confirm-password" name="confirm-password" placeholder="Повтори паролата" required>
                            <button type="button" id="toggleConfirmPassword">Покажи парола</button>
                        </div>
                        </div>
            <button type="submit" class="register-btn">Регистрация 🐾</button>
            <p id="error-message" style="color: red; display: none;"></p>
            <p class="login-link">Вече имаш акаунт? <a href="/login">Вход</a></p>
        </form>
    </div>
</div>
    `
}


// export const errorMessage = document.getElementById("error-message");

