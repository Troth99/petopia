import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseInit";
import { page } from "../constants/constants";


export async function addCategoryRabbitHandler(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const breedData = Object.fromEntries(formData.entries());

    console.log(breedData)

    try {
        await addDoc(collection(db, "rabbit-breeds"), {
            image: breedData.rabbitImage,
            description: breedData.rabbitDescription,
            size: breedData.rabbitSize,
            temperament: breedData.rabbitTemperament,
            weight: breedData.rabbitWeight,
            height: breedData.rabbitHeight,
            coatType: breedData.rabbitCoatType,
            lifespan: breedData.rabbitLifespan,
            origin: breedData.rabbitOrigin,
            energyLevel: breedData.rabbitEnergyLevel,
            healthIssues: breedData.rabbitHealthIssues,
            createdAt: new Date().toISOString(),
        })
        page.redirect('/rabbits')
    } catch (error) {
        alert('Грешка при добаваня на породата!' + error.message)
    }
}