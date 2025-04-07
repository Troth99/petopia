import {deleteUser,  updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../config/firebaseInit.js";
import { page } from "../constants/constants.js";


export async function changePwHandler(e, user){
    e.preventDefault()
   
    const pwForm = new FormData(e.currentTarget);
    const currentPassword = pwForm.get('currentPassword');
    const newPassword = pwForm.get("password");
    const rePass = pwForm.get("confirm-password");

    if(newPassword !== rePass){
        return alert('Паролите не съвпадат!');
    }
    try {
        // Повторно удостоверяване на потребителя
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(auth.currentUser, credential);

        // Смяна на паролата
        await updatePassword(auth.currentUser, newPassword);
        page.redirect("/success-change-pw");
    } catch (error) {
        console.error("Грешка при смяна на паролата:", error.message);
        alert("Възникна грешка: " + error.message);
    }

}

export async function deleteAccountHandler(e, user){
    e.preventDefault()
    const confirmation = confirm("Сигурни ли сте, че искате да изтриете акаунта си? Това действие е необратимо.");
    if (!confirmation) return;

    const currentPassword = prompt("Моля, въведете текущата си парола, за да потвърдите изтриването на акаунта:");

    try {

        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(auth.currentUser, credential);

      
        await deleteUser(auth.currentUser);

      
        localStorage.removeItem("firebase.user");

        alert("Акаунтът е изтрит успешно.");
        page.redirect("/");
    } catch (error) {
        console.error("Грешка при изтриване на акаунта:", error.message);
        alert("Възникна грешка: " + error.message);
    }
}