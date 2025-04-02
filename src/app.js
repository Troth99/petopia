
import "../src/config/firebaseInit"
import { page } from "./constants/constants.js"
import showNavigation from "./middleware/navigation.js"
import editView from "./views/edit.js"
import { showHomePage } from "./views/home.js"
import loginView from "./views/login.js"
import logout from "./views/logout.js"
import profileView from "./views/profile.js"
import showRegister from "./views/register.js"


page(showNavigation)
page('/', showHomePage)
page('/login', loginView)
page('/register', showRegister)
page('/logout', logout)
page('/profile', profileView)
page('/edit/:id', editView)
page.start()