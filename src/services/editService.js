import { updateProfile, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../config/firebaseInit.js";
import { page } from "../constants/constants.js";

export async function updateUserProfile({ displayName, email, phone, password, currentPassword }) {
    const user = auth.currentUser;

    if (!user) {
        throw new Error("Няма влязъл потребител. Моля, влезте отново.");
    }

    try {
        // Повторно удостоверяване
        if (currentPassword) {
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);
        }

        // Актуализиране на displayName
        if (displayName) {
            await updateProfile(user, { displayName });
        }

        // Актуализиране на email
        if (email && email !== user.email) {
            await updateEmail(user, email);
        }

        // Актуализиране на парола
        if (password) {
            await updatePassword(user, password);
        }

        // Актуализиране на телефонния номер (само в localStorage)
        const storedUser = JSON.parse(localStorage.getItem("firebase.user")) || {};
        const updatedUser = {
            ...storedUser,
            displayName: displayName || storedUser.displayName,
            email: email || storedUser.email,
            phone: phone || storedUser.phone,
        };

        // Съхраняване на актуализираните данни в localStorage
        localStorage.setItem("firebase.user", JSON.stringify(updatedUser));
    } catch (error) {
        console.error("Грешка при актуализиране на профила:", error.message);
        throw error;
    }
}

export async function submitEditHandler(e) {
    e.preventDefault();

    const formEditData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formEditData);

    try {
        await updateUserProfile({
            displayName: updatedData.displayName,
            email: updatedData.email,
            phone: updatedData.phone,
            password: updatedData.password,
            currentPassword: updatedData.currentPassword, // Добавете текущата парола за повторно удостоверяване
        });
        page.redirect('/profile');
    } catch (error) {
        alert("Възникна грешка: " + error.message);
    }
}