import { signInWithEmailAndPassword } from "@firebase/auth"
import { render, html, page, mainEl } from "../constants/constants.js"
import { auth } from "../config/firebaseInit.js"


export default function loginView() {

    render(loginTemplate(), mainEl)
}


function loginTemplate() {
    return html`

  <div class="login-container">
    <h2>Login</h2>
    <form action="#" method="POST" class="login-form" @submit=${loginSubmitHandler}>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email" required>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>
      </div>
      <button type="submit" class="submit-btn">Login</button>
      <p class="signup-link">Don't have an account? <a href="#">Sign up</a></p>
    </form>
  </div>
    `
}

async function loginSubmitHandler(e){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const {email, password} = Object.fromEntries(formData);

    console.log({email, password})


    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    } catch (error) {
        console.error(error.message)
    }
}