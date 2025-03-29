
import "../src/config/firebaseInit"
import { page } from "./constants/constants.js"
import { showHomePage } from "./views/home.js"
import loginView from "./views/login.js"


page('/', showHomePage)
page('/login', loginView)
page.start()