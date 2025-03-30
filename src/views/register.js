import { mainEl ,render, html} from "../constants/constants.js"



export default function showRegister(){
    render(registrationTemplate(), mainEl);
}

function registrationTemplate(){
    return html `
     <div class="register-wrapper">
    <div class="background-image"></div>

    <div class="register-container">
        <h2>Регистрирай се в Pettopia 🐾</h2>
        <form action="#" method="POST" class="register-form">
            <div class="input-group">
                <label for="username">Потребителско име</label>
                <input type="text" id="username" name="username" placeholder="Въведи потребителско име" required>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Въведи своя email" required>
            </div>
            <div class="input-group">
                <label for="password">Парола</label>
                <input type="password" id="password" name="password" placeholder="Въведи парола" required>
            </div>
            <div class="input-group">
                <label for="confirm-password">Потвърди паролата</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Повтори паролата" required>
            </div>
            <button type="submit" class="register-btn">Регистрация 🐾</button>
            <p class="login-link">Вече имаш акаунт? <a href="/login">Вход</a></p>
        </form>
    </div>
</div>
    
    `
}