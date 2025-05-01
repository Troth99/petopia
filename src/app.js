
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
import showBeagleView from "./views/dogsMediumBreed/beagle/beagle.js"
import showAustralianShepherdView from "./views/dogsMediumBreed/australianShepherd/australianShepherd.js"
import showBullTerirerView from "./views/dogsMediumBreed/bullTerier/bullterier.js"
import showShetlandSheperd from "./views/dogsMediumBreed/shetlandSheperd/shetlandSheperd.js"
import showChowChowView from "./views/dogsMediumBreed/chowChow/chowChow.js"
import showFinishSpitzView from "./views/dogsMediumBreed/finishSpitz/finishSpitz.js"
import showPharaonView from "./views/dogsMediumBreed/pharaonHound/pharaohHound.js"
import showBrittanySpanel from "./views/dogsMediumBreed/brittanySpaniel/brittanySpaniel.js"
import showNorvegianElkhoundView from "./views/dogsMediumBreed/norwegianElkhound/norvegianElkhound.js"
import showShortHairCoatView from "./views/hairDogs/shortHairDogs.js"
import longHaiDogsView from "./views/hairDogs/longHairDogs.js"
import showMediumHairDogsView from "./views/hairDogs/mediumHaiDogs.js"
import largeBreedView from "./views/dogsLargeBreed/dogsLargeBreedView.js"
import showAllGermanShepherd from "./views/dogsLargeBreed/germanShephard/germanShephard.js"
import showALlGoldenRetriever from "./views/dogsLargeBreed/goldenRotreiver/golden.js"
import showAllLabradors from "./views/dogsLargeBreed/labrador/labrador.js"
import mastiffView from "./views/dogsLargeBreed/mastiff/mastiff.js"
import saintBernardView from "./views/dogsLargeBreed/saintBernar/saintBernar.js"
import newfoundlandView from "./views/dogsLargeBreed/newfoundland/newfoundland.js"
import kavkazShepherdView from "./views/dogsLargeBreed/kavkazShepherd/kavkazShepherd.js"
import showKangalView from "./views/dogsLargeBreed/kangal/kangal.js"
import showCatsCategories from "./views/cats/catsCategories.js"
import addCatView from "./views/addCatBreed.js"
import showALlHomeCats from "./views/cats/homeCats.js"
import showAllLongHairCats from "./views/cats/longHairCats.js"
import showAllHypoalegenicCats from "./views/cats/hypoalergenic.js"
import showAllFriendlyCats from "./views/cats/friendly.js"
import showAllInteligentCats from "./views/cats/intelligentCats.js"
import showAllExoticCats from "./views/cats/exoticCats.js"





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
page('/dogs/Beagle', showBeagleView)
page('/dogs/Australian-shepherd', showAustralianShepherdView)
page('/dogs/Bull-terrier', showBullTerirerView)
page('/dogs/Shetland-sheepdog', showShetlandSheperd)
page('/dogs/chow-chow', showChowChowView)
page('/dogs/finnish-spitz', showFinishSpitzView)
page('/dogs/pharaoh-hound', showPharaonView)
page('/dogs/brittany-spaniel', showBrittanySpanel)
page('/dogs/norwegian-elkhound', showNorvegianElkhoundView)

//short coat Dogs
page('/dogs/short-hair', showShortHairCoatView)
page('/dogs/long-hair', longHaiDogsView)
page('/dogs/medium-hair', showMediumHairDogsView)

//large dogs breed
page('/dogs/large', largeBreedView)
page('/dogs/german-shepherd', showAllGermanShepherd)
page('/dogs/golden-retriever', showALlGoldenRetriever)
page('/dogs/labrador', showAllLabradors)
page('/dogs/english-mastiff', mastiffView)
page('/dogs/saint-bernard', saintBernardView)
page('/dogs/newfoundland', newfoundlandView)
page('/dogs/kavkaz-shepherd', kavkazShepherdView)
page('/dogs/kangal', showKangalView)

//cats
page('/cats', showCatsCategories)
page('/add-cat', addCatView)
page('/cats/indoor', showALlHomeCats)
page('/cats/long-hair', showAllLongHairCats)
page('/cats/hypoallergenic', showAllHypoalegenicCats)
page('/cats/friendly', showAllFriendlyCats)
page('/cats/intelligent', showAllInteligentCats)
page('/cats/exotic', showAllExoticCats)
page.start()