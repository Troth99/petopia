import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseInit.Js";



export async function getChihuahuaInfo() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'chihuahua'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}

export async function getAllPomeranian() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'pomeranian'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}

export async function getAllYokrshireTerier() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'yorkshire-terrier'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}

export async function getAllMops() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'pug'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}

export async function getAllDashshund() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'dachshund'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}

export async function getAllShitZu() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'shih-tzu'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}

export async function getAllFrenchBuldog() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'french-bulldog'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}

export async function getAllMaltese() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'maltese'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}
export async function getAllPekinese() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'pekingese'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}
export async function getAllKingDogs() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'cavalier-king-charles'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}

export async function getAllEnglishCockerSpaniel() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'english-cocker-spaniel'))
        const querySnapshot = await getDocs(q)

        const breeds = []
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() })
        })
        return breeds
    } catch (error) {
        console.error("Грешка при извличане на данни за Чихуахуа:", error.message);
        throw error;
    }
}


