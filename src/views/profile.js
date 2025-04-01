
import { page, render, html, mainEl } from "../constants/constants.js";


export default function profileView() {

    render(profileTemplate(), mainEl)

}


function profileTemplate() {
    return html`
    <h2>TO DO PROFILE PAGE !!!</h2>

    `
}