import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseInit";
import { page } from "../constants/constants";

export async function addCategoryCatHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const breedData = Object.fromEntries(formData.entries());

    console.log(breedData);

    try {
       
        await addDoc(collection(db, "cat-breeds"), {
            image: breedData.catImage,  
            description: breedData.catDescription,
            size: breedData.catSize,
            temperament: breedData.catTemperament,
            perfect: breedData.catPerfect,
            weight: breedData.catWeight,
            height: breedData.catHeight,
            coatType: breedData.catCoatType,
            lifespan: breedData.catLifespan,
            origin: breedData.catOrigin,
            energyLevel: breedData.catEnergyLevel,
            healthIssues: breedData.catHealthIssues,
            createdAt: new Date().toISOString(), 
        });

      
        page.redirect('/cats');  
    } catch (error) {
        alert('Грешка при добавяне на котка в базата данни!!! ' + error.message);
    }
}