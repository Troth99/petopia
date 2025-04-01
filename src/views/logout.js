import { page } from "../constants/constants.js";
import { getUserFromLocalStorage } from "../utils/utils.js";

export default function logout() {
    localStorage.clear()
    page.redirect('/')

}