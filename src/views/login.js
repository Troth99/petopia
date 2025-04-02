import { signInWithEmailAndPassword } from "@firebase/auth"
import { render, html, page, mainEl } from "../constants/constants.js"
import { doc, getDoc } from "firebase/firestore"; // Импортирайте Firestore
import { auth } from "../config/firebaseInit.js";
import { db } from "../config/firebaseInit.js";
import { getUserFromLocalStorage } from "../utils/utils.js"


export default function loginView() {

  render(loginTemplate(), mainEl)
}


function loginTemplate() {
  return html`

  <div class="login-container">
    <h2>Влез в светът на домашните любимци!</h2>
    <form action="#" method="POST" class="login-form" @submit=${loginSubmitHandler}>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email" required>
      </div>
      <div class="input-group">
        <label for="password">Парола</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>
      </div>
      <p id="error-message" style="color: red; display: none;"></p>
      <button type="submit" class="submit-btn">Влез 🐾</button>
      <p class="signup-link">Нямаш профил? <a href="/register">Регистрация</a></p>
    </form>
  </div>
    `
}

async function loginSubmitHandler(e) {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)

  const { email, password } = Object.fromEntries(formData);

  console.log({ email, password })


  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredentials.user;

    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    let phone = "";
    if (userDoc.exists()) {
        phone = userDoc.data().phone || ""; // Вземете телефона от Firestore
    } else {
        console.warn("Документът за потребителя не съществува в Firestore.");
    }

     localStorage.setItem("firebase.user", JSON.stringify({
            email: user.email,
            displayName: user.displayName || "",
            phone: phone, // Добавяне на телефона
            uid: user.uid,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime
        }));

    page.redirect('/')
  } catch (error) {
    console.error("Грешка при вход:", error.message);

    // Увери се, че errorMessage е наличен
    const errorMessage = document.getElementById("error-message");

    if (errorMessage) {
      // Обработка на конкретни грешки от Firebase
      if (error.code === 'auth/user-not-found') {
        console.error("Потребителят не е намерен.");
        errorMessage.innerText = 'Потребителят не е намерен. Моля, проверете имейла си.';
      } else if (error.code === 'auth/wrong-password') {
        console.error("Грешна парола.");
        errorMessage.innerText = 'Грешна парола. Опитайте отново.';
      } else if (error.code === 'auth/invalid-email') {
        console.error("Невалиден имейл.");
        errorMessage.innerText = 'Невалиден имейл. Моля, въведете валиден имейл адрес.';
      } else {
        // Други грешки
        console.error("Неочаквана грешка:", error.message);
        errorMessage.innerText = 'Неочаквана грешка. Моля, опитайте отново.';
      }
      errorMessage.style.display = 'block';  // Покажи съобщението за грешка
    } else {
      console.error("Елементът за грешка не беше намерен.");
    }
  }

}