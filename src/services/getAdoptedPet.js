import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseInit.Js";

export async function getAdoptedPetsByUser(userId) {
  if (!userId) throw new Error('userId is undefined');

  const adoptionRef = collection(db, "adoptions");
  const q = query(adoptionRef, 
                  where('userId', '==', userId),
                  where('status', '==', 'approved'));

  const querySnapshot = await getDocs(q);
  const pets = [];
  querySnapshot.forEach(doc => pets.push({ id: doc.id, ...doc.data() }));
  return pets;
}

export async function getAnimalById(animalId) {
  if (!animalId) throw new Error('Invalid animal ID');

  const collections = ['breeds', 'cat-breeds', 'rabbit-breeds'];

  for (const col of collections) {
    const docRef = doc(db, col, animalId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
  }

  throw new Error('Animal not found in any collection');
}