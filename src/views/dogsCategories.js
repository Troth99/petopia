import { mainEl ,render, html} from "../constants/constants.js";


export default function showDogsCategoryView(){

    render(dogsCategoriesTemplate(), mainEl)

}


function dogsCategoriesTemplate(){
    return html `
      <h2>to do dogs categories</h2>
    `;
}