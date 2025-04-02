import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { mainEl, render, html, page } from "../constants/constants.js"
import { auth } from "../config/firebaseInit.js"
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../config/firebaseInit.js"

export async function registerHandler(e) {
    e.preventDefault()
    console.log("Събитието е спрянo");
    const reigsterForm = new FormData(e.currentTarget)
    const entries = Object.fromEntries(reigsterForm)

    const username = entries.username
    const email = entries.email;
    const phoneNumber = entries.phone
    const password = entries.password
    const confirmPassword = entries["confirm-password"]

    
    if (password !== confirmPassword) {
        showError('Паролите не съвпадат!')
        return;
    }
    
    function showError(message) {
        setTimeout(() => {
            const errorMessage = document.getElementById("error-message");
            if (errorMessage) {
                errorMessage.innerText = message;
                errorMessage.style.display = "block";
            } else {
                console.error("Не мога да намеря #error-message!");
            }
        }, 0);
    }
    
    const registerUser = async (email, password, username, phoneNumber) => {
        console.log({ username, email, phone: phoneNumber, password, confirmPassword })
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: username
            });

            console.log("Регистрация успешна!", user);

            await saveUserToFirestore(user.uid, username, email, phoneNumber);

            localStorage.setItem('firebase.user', JSON.stringify({
                email: user.email,
                displayName: user.displayName,
                phone: phoneNumber, 
                uid: user.uid,
                creationTime: user.metadata.creationTime, 
                lastSignInTime: user.metadata.lastSignInTime 
            }));
            page.redirect('/');

        } catch (error) {
            console.error("Грешка при регистрация:", error.message);

            let errorText = error.message.replace(/^Firebase: /, '').split('(')[0].trim();

            if (error.code === "auth/email-already-in-use") {
                errorText = "Имейлът вече е използван. Моля, използвайте друг.";
            } else if (error.code === "auth/weak-password") {
                errorText = "Паролата трябва да е поне 6 символа дълга.";
            } else if (error.code === "auth/invalid-email") {
                errorText = "Имейлът е в невалиден формат.";
            } else {
                errorText = "Възникна грешка при регистрация. Моля, опитайте отново.";
            }

           
            const errorMessage = document.getElementById("error-message");
            if (errorMessage) {
                errorMessage.innerText = errorText;
                errorMessage.style.display = "block";
            } else {
                console.error("❌ Не мога да намеря #error-message в DOM-а!");
            }
        }
    }
    registerUser(email, password, username, phoneNumber);
}

async function saveUserToFirestore(userId, username, email, phone) {
    try {
        const userDocRef = doc(db, "users", userId);
        await setDoc(userDocRef, {
            displayName: username,
            email: email,
            phone: phone,
            createdAt: new Date().toISOString(),
        });
        console.log("Потребителските данни са съхранени успешно в Firestore.");
    } catch (error) {
        console.error("Грешка при съхраняване на потребителските данни в Firestore:", error.message);
    }
}