import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseInit.Js";



export async function getAllHomeCats() {
    try {
        const breedsRef = collection(db, "cat-breeds");
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

export async function getAllLongHairCats() {
    try {
        const breedsRef = collection(db, "cat-breeds");
        const q = query(breedsRef, where('size', '==', 'long-hair'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за котки с дълга козина:", error.message);
        throw error;
    }
}

export async function getAllhypoallergenicCats() {
    try {
        const breedsRef = collection(db, "cat-breeds");
        const q = query(breedsRef, where('size', '==', 'hypoallergenic'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за хипоалергенни котки:", error.message);
        throw error;
    }
}

export async function getAllFriendlyCats() {
    try {
        const breedsRef = collection(db, "cat-breeds");
        const q = query(breedsRef, where('size', '==', 'friendly'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за хипоалергенни котки:", error.message);
        throw error;
    }
}

export async function getAllInteligentCats() {
    try {
        const breedsRef = collection(db, "cat-breeds");
        const q = query(breedsRef, where('size', '==', 'intelligent'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за хипоалергенни котки:", error.message);
        throw error;
    }
}

export async function getAllExoticCats() {
    try {
        const breedsRef = collection(db, "cat-breeds");
        const q = query(breedsRef, where('size', '==', 'exotic'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за хипоалергенни котки:", error.message);
        throw error;
    }
}
