import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseInit";
import { page } from "../constants/constants";


export async function addCategoryDogHandler(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const breedData = Object.fromEntries(formData.entries());

    console.log(breedData)

    try {
        await addDoc(collection(db, "breeds"), {
            image: breedData.breedImage,
            description: breedData.breedDescription,
            size: breedData.breedSize,
            category: breedData.breedCategory,
            temperament: breedData.breedTemperament,
            weight: breedData.breedWeight,
            height: breedData.breedHeight,
            coatType: breedData.breedCoatType,
            lifespan: breedData.breedLifespan,
            origin: breedData.breedOrigin,
            energyLevel: breedData.breedEnergyLevel,
            healthIssues: breedData.breedHealthIssues,
            createdAt: new Date().toISOString(),
        })
        page.redirect('/dogs')
    } catch (error) {
        alert('Грешка при добаваня на породата!' + error.message)
    }
}