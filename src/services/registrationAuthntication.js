import { createUserWithEmailAndPassword } from "firebase/auth";
import { mainEl, render, html, page } from "../constants/constants.js"
import { auth } from "../config/firebaseInit.js"

export async function registerHandler(e) {
    e.preventDefault()
    console.log("Събитието е спрянo");
    const reigsterForm = new FormData(e.currentTarget)
    const entries = Object.fromEntries(reigsterForm)

    const username = entries.username
    const email = entries.email;
    const password = entries.password
    const confirmPassword = entries["confirm-password"]

    console.log({ username, email, password, confirmPassword })

    if (password !== confirmPassword) {
        showError('Паролите не съвпадат!')
        return;
    }

    function showError(message) {
        setTimeout(() => {
            const errorMessage = document.getElementById("error-message");
            if (errorMessage) {
                errorMessage.innerText = message;
                errorMessage.style.display = "block";
            } else {
                console.error("Не мога да намеря #error-message!");
            }
        }, 0);
    }

    const registerUser = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("Регистрация успешна!", user);
            localStorage.setItem('firebase.user', JSON.stringify(user));
            page.redirect('/');

        } catch (error) {
            console.error("Грешка при регистрация:", error.message);

            let errorText = error.message.replace(/^Firebase: /, '').split('(')[0].trim();

            if (error.code === "auth/email-already-in-use") {
                errorText = "Имейлът вече е използван. Моля, използвайте друг.";
            } else if (error.code === "auth/weak-password") {
                errorText = "Паролата трябва да е поне 6 символа дълга.";
            } else if (error.code === "auth/invalid-email") {
                errorText = "Имейлът е в невалиден формат.";
            } else {
                errorText = "Възникна грешка при регистрация. Моля, опитайте отново.";
            }

            // 🔥 Вземи елемента преди да го използваш!
            const errorMessage = document.getElementById("error-message");
            if (errorMessage) {
                errorMessage.innerText = errorText;
                errorMessage.style.display = "block";
            } else {
                console.error("❌ Не мога да намеря #error-message в DOM-а!");
            }
        }
    }
    registerUser(email, password);
}