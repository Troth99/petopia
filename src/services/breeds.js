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