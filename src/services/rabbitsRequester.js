import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseInit.Js";



export async function getAllHomeRabbits() {
    try {
        const breedsRef = collection(db, "rabbit-breeds");
        const q = query(breedsRef, where('size', '==', 'indoor'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за домашни котки:", error.message);
        throw error;
    }
}

export async function getAllMiniRabbits() {
    try {
        const breedsRef = collection(db, "rabbit-breeds");
        const q = query(breedsRef, where('size', '==', 'mini'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за домашни котки:", error.message);
        throw error;
    }
}

export async function getAllGiganticRabbits() {
    try {
        const breedsRef = collection(db, "rabbit-breeds");
        const q = query(breedsRef, where('size', '==', 'gigantic'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за домашни котки:", error.message);
        throw error;
    }
}