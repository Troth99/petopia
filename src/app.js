
import "../src/config/firebaseInit"
import { page } from "./constants/constants.js"
import loginView from "./views/login.js"



page('/login', loginView)
page.start()