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

export async function getAllBeagles() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'beagle'))
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

export async function getAllAustiranShepherd() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'australian-shepherd'))
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

export async function getAllBullTeriers() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'bull-terrier'))
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

export async function getAllShetlandSheepdog() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'shetland-sheepdog'))
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

export async function getAllChowChow() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'chow-chow'))
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

export async function getAllFinishSpitz() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'finnish-spitz'))
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

export async function getAllPHaraonDog() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'pharaoh-hound'))
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


export async function getAllBirthdaySpanel() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'brittany-spaniel'))
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


export async function getAllNorwegianElkhoud() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'norwegian-elkhound'))
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

export async function getAllGermanShepherd() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'german-shepherd'))
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

export async function getAllGoldenRetriever() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'golden-retriever'))
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

export async function getAllLabrador() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'labrador'))
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

export async function getAllMastiff() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'english-mastiff'))
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

export async function getAllSaintBernard() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'saint-bernard'))
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

export async function getALlnewfoundland() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'newfoundland'))
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

export async function getAllkavkazshepherd() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'kavkaz-shepherd'))
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

export async function getALlKangal() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('category', '==', 'kangal'))
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




//къса козина кучета
export async function getAllShortCoatBreeds() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('coatType', '==', 'short'));
        const querySnapshot = await getDocs(q);

        const breeds = [];
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() });
        });
        return breeds;
    } catch (error) {
        console.error("Грешка при извличане на данни за кучетата с къса козина:", error.message);
        throw error;
    }
}

//дълга козина кучета
export async function getAllLongHairCoatDogs() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('coatType', '==', 'long'));
        const querySnapshot = await getDocs(q);

        const breeds = [];
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() });
        });
        return breeds;
    } catch (error) {
        console.error("Грешка при извличане на данни за кучетата с къса козина:", error.message);
        throw error;
    }
}

//средна козина кучета
export async function getAllMediumHairDogs() {
    try {
        const breedsRef = collection(db, "breeds");
        const q = query(breedsRef, where('coatType', '==', 'medium'));
        const querySnapshot = await getDocs(q);

        const breeds = [];
        querySnapshot.forEach((doc) => {
            breeds.push({ id: doc.id, ...doc.data() });
        });
        return breeds;
    } catch (error) {
        console.error("Грешка при извличане на данни за кучетата с къса козина:", error.message);
        throw error;
    }
}







