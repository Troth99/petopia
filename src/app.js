
import "../src/config/firebaseInit"
import { page } from "./constants/constants.js"
import showNavigation from "./middleware/navigation.js"
import changePwView from "./views/changePW.js"
import showDogsCategoryView from "./views/dogsCategories.js"
import editView from "./views/edit.js"
import { showHomePage } from "./views/home.js"
import loginView from "./views/login.js"
import logout from "./views/logout.js"
import showPetCollection from "./views/petCollection.js"
import profileView from "./views/profile.js"
import showRegister from "./views/register.js"
import sucessChangePwView from "./views/successChangePw.js"
import showDogsBreedView from "./views/dogsSmallBreed/smallBreedDogs.js"
import addBreedView from "./views/addBreed.js"
import showChihuahuaView from "./views/dogsSmallBreed/chihuahua/showChihuahuaView.js"
import { showAdoptionForm } from "./views/adopt.js"
import addAnimalView from "./views/add-animal.js"
import addDogVeiw from "./views/addBreed.js"
import showPomeranianView from "./views/dogsSmallBreed/pomeran/showPomeranView.js"
import showYorkshireTerierView from "./views/dogsSmallBreed/yorkshire/yorshire-terier.js"
import showMopsView from "./views/dogsSmallBreed/poms/poms.js"
import showDashshundView from "./views/dogsSmallBreed/dachshund/dachshund.js"
import showShitZu from "./views/dogsSmallBreed/shih-tzu/shih-tzu.js"
import showFrenchBuldog from "./views/dogsSmallBreed/french-bulldog/french-bulldog.js"
import showMalteseView from "./views/dogsSmallBreed/maltese/maltese.js"
import showPekineseView from "./views/dogsSmallBreed/pekingese/pekingese.js"
import showKingCharsView from "./views/dogsSmallBreed/cavalier-king-charles/cavalier-king-charles.js"
import meidumBreedView from "./views/dogsMediumBreed/mediumsBreedsDogs.js"
import showEnglishCckerSpanielView from "./views/dogsMediumBreed/english-cocker-spaniel/english-cocker-spaniel.js"




page(showNavigation)
page('/', showHomePage)
page('/login', loginView)
page('/register', showRegister)
page('/logout', logout)
page('/profile', profileView)
page('/edit/:id', editView)
page('/change-password/:id', changePwView)
page('/success-change-pw', sucessChangePwView)
page('/petcollection', showPetCollection)
page('/dogs', showDogsCategoryView)
page('/dogs/small', showDogsBreedView)

page('/dogs/chihuahua', showChihuahuaView)
page('/adopt/:id', showAdoptionForm)
page('/add-animal', addAnimalView)
page('/add-dog', addDogVeiw)
page('/dogs/pomeranian', showPomeranianView)
page('/dogs/yorkshire-terrier', showYorkshireTerierView)
page('/dogs/pug', showMopsView)
page('/dogs/dachshund', showDashshundView)
page('/dogs/shih-tzu', showShitZu)
page('/dogs/french-bulldog', showFrenchBuldog)
page('/dogs/maltese', showMalteseView)
page('/dogs/pekingese', showPekineseView)
page('/dogs/cavalier-king-charles', showKingCharsView)

//medium dogs breed
page('/dogs/medium', meidumBreedView)
page('/dogs/English-Cocker-Spaniel', showEnglishCckerSpanielView)
page.start()