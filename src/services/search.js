import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseInit.js";

async function countBreeds() {
  const querySnap = await getDocs(collection(db, "breeds"));
  console.log("Брой животни в базата:", querySnap.size);
}

countBreeds();

async function printAllCategories() {
  const querySnap = await getDocs(collection(db, "breeds"));
  const categories = [];
  querySnap.forEach(doc => {
    const data = doc.data();
    if (data.category) categories.push(data.category);
  });
  console.log(categories); 
}

printAllCategories();

async function printAllCatCategories() {
  const querySnap = await getDocs(collection(db, "cat-breeds"));
  const categories = [];
  querySnap.forEach(doc => {
    const data = doc.data();
    if (data.category) categories.push(data.category);
  });
  console.log(categories); 
}

printAllCatCategories();

const breeds = [
  { name: "Померан" },
  { name: "Златен ретривър" },
  { name: "Немска овчарка" },
  { name: "Кангал" },
  { name: "Кавалер Кинг Чарлз шпаньол" },
  { name: "Йоркширски териер" },
  { name: "Чау-чау" },
  { name: "Финландски шпиц" },
  { name: "Австралийска овчарка" },
  { name: "Ши-тцу" },
  { name: "Норвежки елкхаунд" },
  { name: "Английски мастиф" },
  { name: "Шетландска овчарка" },
  { name: "Малтийска болонка" },
  { name: "Английски кокер шпаньол" },
  { name: "Дакел" },
  { name: "Сенбернар" },
  { name: "Бултериер" },
  { name: "Лабрадор" },
  { name: "Бийгъл" },
  { name: "Мопс" },
  { name: "Чихуахуа" },
  { name: "Бретон шпаньол" }
];


const breedLinks = {
  "Чихуахуа": "/dogs/chihuahua",
  "Померан": "/dogs/pomeranian",
  "Йоркширски териер": "/dogs/yorkshire-terrier",
  "Мопс": "/dogs/pug",
  "Дакел": "/dogs/dachshund",
  "Ши-тцу": "/dogs/shih-tzu",
  "Френски булдог": "/dogs/french-bulldog",
  "Малтийска болонка": "/dogs/maltese",
  "Пекинез": "/dogs/pekingese",
  "Кавалер Кинг Чарлз шпаньол": "/dogs/cavalier-king-charles",
  "Английски кокер шпаньол": "/dogs/English-Cocker-Spaniel",
  "Бийгъл": "/dogs/Beagle",
  "Австралийска овчарка": "/dogs/Australian-shepherd",
  "Бултериер": "/dogs/Bull-terrier",
  "Шетландска овчарка": "/dogs/Shetland-sheepdog",
  "Чау-чау": "/dogs/chow-chow",
  "Финландски шпиц": "/dogs/finnish-spitz",
  "Фараоново куче": "/dogs/pharaoh-hound",
  "Бретон шпаньол": "/dogs/brittany-spaniel",
  "Норвежки елкхаунд": "/dogs/norwegian-elkhound",
  "Немска овчарка": "/dogs/german-shepherd",
  "Златен ретривър": "/dogs/golden-retriever",
  "Лабрадор": "/dogs/labrador",
  "Английски мастиф": "/dogs/english-mastiff",
  "Сенбернар": "/dogs/saint-bernard",
  "Нюфаундленд": "/dogs/newfoundland",
  "Кавказка овчарка": "/dogs/kavkaz-shepherd",
  "Кангал": "/dogs/kangal"
};
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');
  const form = document.getElementById('searchForm');

  if (!input || !suggestions || !form) return; 

input.addEventListener('input', function() {
  const value = this.value.toLowerCase();
  suggestions.innerHTML = '';
  if (value.length > 0) {
    const filtered = breeds.filter(breed => breed.name.toLowerCase().includes(value));
    filtered.forEach(breed => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = breed.name;
      li.appendChild(span);
      li.addEventListener('click', function() {
        input.value = breed.name;
        suggestions.innerHTML = '';
      });
      suggestions.appendChild(li);
    });
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = input.value.trim();
  if (breedLinks[value]) {
    window.location.href = breedLinks[value];
    return;
  }
  input.value = '';
  suggestions.innerHTML = '';
});
});