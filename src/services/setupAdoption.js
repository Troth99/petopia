import { addDoc, collection } from "firebase/firestore";
import { mainEl, render, html } from "../constants/constants";
import { db } from "../config/firebaseInit";
import { getUserFromLocalStorage } from "../utils/utils";

export async function setupAdoptForm(e, animalId) {
    e.preventDefault()
    const form = e.currentTarget;
    const formData = new FormData(form)
    const adopterName = formData.get('adopterName');
    const adopterEmail = formData.get('adopterEmail');
    const adopterPhone = formData.get('adopterPhone');
    const adopterMessage = formData.get('adopterMessage');

    const user = getUserFromLocalStorage();
    if (!user) {
        alert('Моля, влезте в профила си, за да подадете заявка.');
        return;
    }


    const adoptionData = {
        animalId,
        adopterName,
        adopterEmail,
        adopterPhone,
        adopterMessage,
        userId: user.uid,
        status: "pending",
        createdAt: new Date().toISOString()
    };

    console.log(adoptionData)
    try {
        await addDoc(collection(db, 'adoptions'), adoptionData);
        render(successMessageTemplate(), mainEl)
        form.reset();
    } catch (error) {
        alert('Възникна грешка при изпращане на заявката.');
        console.error(error);
    }
    ;
}

function successMessageTemplate() {
    return html`
    <section class="success-message">
        <h2>Успешно пратихте заявката!</h2>
          <p>
    Благодарим ви, че искате да осиновите домашен любимец. 
    Може да я проследите от 
    <a href="/adoptation" class="track-link">тук</a>.
  </p>
    </section>
    `;
}