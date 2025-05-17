import { signInWithEmailAndPassword } from "@firebase/auth"
import { render, html, page, mainEl } from "../constants/constants.js"
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"; // Импортирайте Firestore
import { auth } from "../config/firebaseInit.js";
import { db } from "../config/firebaseInit.js";
import { getUserFromLocalStorage } from "../utils/utils.js"


export async function loadAllAdoptions() {
  const querySnapshot = await getDocs(collection(db, "adoptions"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export default async function adminPanelView() {
  const adoptions = await loadAllAdoptions();
  render(adminPanelTempalte(adoptions), mainEl)
}


function adminPanelTempalte(adoptions) {
  return html`
    <section class="admin-adoptions">
      <h2>Заявки за осиновяване</h2>
      <table>
        <thead>
          <tr>
            <th>Потребител</th>
            <th>Имейл</th>
            <th>Телефон</th>
            <th>Животно</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          ${adoptions.map(adoption => html`
            <tr>
              <td>${adoption.adopterName}</td>
              <td>${adoption.adopterEmail}</td>
              <td>${adoption.adopterPhone}</td>
              <td>${adoption.animalId}</td>
              <td>
                <select @change=${e => onStatusChange(e, adoption.id)} .value=${adoption.status}>
                  <option value="pending">Чакаща</option>
                  <option value="approved">Одобрена</option>
                  <option value="rejected">Отхвърлена</option>
                </select>
              </td>
              <td>
                <button @click=${() => onDeleteAdoption(adoption.id)}>Изтрий</button>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    </section>
    `
}

async function onStatusChange(e, adoptionId) {
  const newStatus = e.target.value;
  const docRef = doc(db, "adoptions", adoptionId);
  try {
    await updateDoc(docRef, { status: newStatus });
    alert("Статусът беше актуализиран.");
  } catch (error) {
    console.error("Грешка при актуализация:", error);
    alert("Неуспешна актуализация.");
  }
}

async function onDeleteAdoption(adoptionId) {
  const confirmDelete = confirm("Сигурни ли сте, че искате да изтриете тази заявка?");
  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "adoptions", adoptionId));
    alert("Заявката беше изтрита успешно.");
    // Обнови списъка - примерно през функцията за зареждане и повторен render
  } catch (error) {
    console.error("Грешка при изтриване:", error);
    alert("Неуспешно изтриване.");
  }
}

