import { updateProfile, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../config/firebaseInit.js";
import { page } from "../constants/constants.js";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseInit.js";

export async function updateUserProfile({ displayName, email, phone, password, currentPassword }) {
    const user = auth.currentUser;

    if (!user) {
        throw new Error("Няма влязъл потребител. Моля, влезте отново.");
    }

    try {
  
        if (currentPassword) {
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);
        }

    
        if (displayName) {
            await updateProfile(user, { displayName });
        }

     
        if (email && email !== user.email) {
            await updateEmail(user, email);
        }

    
        if (password) {
            await updatePassword(user, password);
        }

        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
            displayName: displayName || user.displayName,
            email: email || user.email,
            phone: phone || "", // Актуализиране на телефона
        });
      
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