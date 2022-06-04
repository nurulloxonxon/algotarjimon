let Input = document.querySelector("input");
let H2 = document.querySelector("h2");
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let label = document.querySelector("label")
let h3Natija = document.querySelector(".natija")
let box = document.querySelector(".box")
btn1.style.display = "none"
let box_ichida = document.querySelector(".box_ichida")
let lang = false

let UsaFlag = document.createElement("img")
let UzbFlag = document.createElement("img")
UsaFlag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
UzbFlag.src = 'https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg'

box_ichida.appendChild(UsaFlag)
box_ichida.appendChild(UzbFlag)

btn1.addEventListener("keypress", (e) => {
   console.log("sadsad", e.key);
})

function Changelanguage() {
   if (lang === false) {
      UsaFlag.src = "https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg"
      UzbFlag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
      btn1.style.display = "block"
      btn2.style.display = "none"
      lang = true
      label.innerHTML = 'Uzbek tili'
      h3Natija.innerHTML = 'English Language'
      Input.value = ""
      H2.innerHTML = ""

   } else {
      UsaFlag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
      UzbFlag.src = 'https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg'
      label.innerHTML = 'English Language'
      h3Natija.innerHTML = 'Uzbek tili'
      btn1.style.display = "none"
      btn2.style.display = "block"
      lang = false
      Input.value = ""
      H2.innerHTML = ""

   }
}
let natija

function EngToUzb() {
   let value = Input.value.toLowerCase()
   let natija


   switch (value) {
      case "pen":
         natija = "ruchka"
         IMAGE.src = "https://m.media-amazon.com/images/I/71LbzzDezeL._AC_SY355_.jpg"
         break;
      case "desk":
         natija = "stol"
         IMAGE.src = "https://www.ikea.com/us/en/images/products/malm-desk-black-brown__0735973_pe740307_s5.jpg"
         break;
      case "car":
         natija = "mashina"
         IMAGE.src = "data:image/jpeg;base64,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"
         break;
      case "elephant":
         natija = "fil"
         IMAGE.src = "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg"
         break;
      case "enjoy":
         natija = "rohatlaning"
         break
      case "engine":
         natija = "motor"
         break
      case "apple":
         natija = "olma"
         IMAGE.src = "https://m.media-amazon.com/images/I/918YNa3bAaL._SX679_.jpg"
         break
      case "glass":
         natija = "shisha"
         IMAGE.src = "https://m.media-amazon.com/images/I/31OEvRveV3L._SY355_.jpg"
         break
      case "glasses":
         natija = "Ko'zoynak"
         IMAGE.src = "https://upload.wikimedia.org/wikipedia/commons/a/af/Glasses_black.jpg"
         break
      case "pencil":
         natija = "qalam"
         IMAGE.src = "https://cdn.shopify.com/s/files/1/0027/1089/6705/products/Havest_CedarPencil_1024x1024@2x.jpg?v=1576593212"
         break
      case "pencilcase":
         natija = "qalam solgich kashalog"
         IMAGE.src = "https://media.istockphoto.com/photos/pencil-case-picture-id509844260"
         break
      case "pencilcase":
         natija = "qalam solgich kashalog"
         IMAGE.src = "https://media.istockphoto.com/photos/pencil-case-picture-id509844260"
         break
      case "beautiful":
         natija = "chiroyli"
         break
      case "handsome":
         natija = "kelishgan"
         break
      case "relative":
         natija = "qarindosh"
         break
      case "father":
         natija = "ota"
         break
      case "bicycle":
         natija = "velosiped"
         break
      case "magic":
         natija = "sehir"
         break
      case "mansion":
         natija = "dang'illam uy"
         break
      case "running water":
         natija = "oqar suv"
         break
      case "air condition":
         natija = "konditsioner"
         break
      case "carpet":
         natija = "gilam"
         break
      case "below":
         natija = "past tomon"
         break
      case "share":
         natija = "bo'lishmoq"
         break
      case "fabric":
         natija = "mato"
         break
      case "shanty town":
         natija = "qashshoqlar yashaydigan shahar"
         break
      case "homeless":
         natija = "uysiz"
         break
      case "shelter":
         natija = "turar joy"
         break
      case "wet":
         natija = "nam"
         break
      case "climate":
         natija = "iqlim"
         break
      case "mild":
         natija = "mayin"
         break
      case "chimmey":
         natija = "mo'ri"
         break
      case "sloping roof":
         natija = "qiya tom"
         break
      case "chalet":
         natija = "kulba"
         break
      case "avalanche":
         natija = "qor ko'chkisi"
         break
      case "upper":
         natija = "yuqori"
         break
      case "heat":
         natija = "issiqlik"
         break
      case "fall off":
         natija = "qulab tushmoq"
         break
      case "depend on":
         natija = "ga bog'liq bo'lmoq"
         break
      case "circuit":
         natija = "sxema"
         break
      case "beton":
         natija = "concrete"
         break
      case "noodle":
         natija = "lag'mon"
         break
      case "paint":
         natija = "chizmoq"
         break
      case "weather":
         natija = "fasl"
         break
      case "present":
         natija = "sovg'a"
         break
      case "control":
         natija = "boshqarmoq"
         break
      case "store":
         natija = "do'kon"
         break
      case "sew":
         natija = "tikmoq"
         break
      case "page":
         natija = "sahifa"
         break
      case "raqamli":
         natija = "digital"
         break
      case "product":
         natija = "mahsulot"
         break
      case "date":
         natija = "xurmo"
         break
      case "root":
         natija = "ildiz"
         break
      case "pollen":
         natija = "gul changi"
         break
      case "wear":
         natija = "kiymoq"
         break
      case "carry":
         natija = "tashimoq"
         break
      case "wheel":
         natija = "g'ildirak"
         break
      case "steel":
         natija = "po'lat"
         break
      case "fiz":
         natija = "o'rnatmoq"
         break
      case "print":
         natija = "nashr qilmoq"
         break
      case "dough":
         natija = "hamir"
         break
      case "mosque":
         natija = "masjid"
         break
      case "grow":
         natija = "o'smoq"
         break
      case "donut":
         natija = "ponchik"
         break
      case "engine":
         natija = "motor"
         break
      case "together":
         natija = "birga"
         break
      case "decorate":
         natija = "bezatmoq"
         break
      case "cloack":
         natija = "palto"
         break
      case "bark":
         natija = "daraxt po'chog'i"
         break
      case "leaf":
         natija = "barg"
         break
      case "protect":
         natija = "himoya qilmoq"
         break
      case "wind":
         natija = "shamol"
         break
      case "full moon":
         natija = "to'lin oy"
         break
      case "called":
         natija = "deb atalmoq"
         break
      case "shade":
         natija = "soya"
         break
      case "shape":
         natija = "shakl"
         break
      case "crescent moon":
         natija = "yarm oy"
         break
      case "belt":
         natija = "belbog'"
         break
      case "tool":
         natija = "aspob uskuna"
         break
      case "waste":
         natija = "chiqindi"
         break
      case "mould":
         natija = "qolip"
         break
      case "wall":
         natija = "devor"
         break
      case "throw away":
         natija = "tashlab yubormoq"
         break
      case "liquid":
         natija = "suyuqlik"
         break
      case "column":
         natija = "ustun"
         break
      case "floor":
         natija = "qavat"
         break
      case "flour":
         natija = "un"
         break
      case "jewelry":
         natija = "zargarlik buyumlari"
         break
      case " sit":
         natija = "o'rindiq"
         break
      case "lake":
         natija = "masalan"
         break
      case "martial art":
         natija = "jangovor sanat"
         break
      case "candle":
         natija = "sham"
         break
      case "blossom":
         natija = "gullash"
         break
      case "heavy":
         natija = "og'ir"
         break
      case "hug":
         natija = "quchmoq"
         break
      case "striper":
         natija = "yo'l-yo'l cjiziqli"
         break
      case "colorfull":
         natija = "rangbarang"
         break
      case "visit":
         natija = "tashrif buyurmoq"
         break
      case "hammer":
         natija = "bolg'a"
         break
      case "trunk":
         natija = "daraxt tanasi"
         break
      case "waste":
         natija = "chiqindi"
         break
      case "giant":
         natija = "gigant"
         break
      case "hihg":
         natija = "baland"
         break
      case "hill":
         natija = "tepalik"
         break
      case "sauce":
         natija = "sous"
         break
      case "nearly":
         natija = "deyarli"
         break
      case "sell":
         natija = "sotmoq"
         break

      case "car":
         natija = "mashina"
         break;
      case "create":
         natija = "yaratmoq"
         break
      case "cook":
         natija = "pishirmoq"
         break;
      case "cooker":
         natija = "oshpaz"
         break;
      case "cake":
         natija = "to'rt , kremli pishiriq"
         break
      case "carriage":
         natija = "qafas"
         break;
      case "cabbage":
         natija = "karam"
         break;
      case "cat":
         natija = "mushuk"
         break
      case "console":
         natija = "kengash"
         break;
      case "cold":
         natija = "Salqin"
         break;
      case "color":
         natija = "Rang"
         break
      case "cloud":
         natija = "bulut"
         break;
      case "clothe":
         natija = "kiyim"
         break;
      case "cancel":
         natija = "bekor qilmoq"
         break
      case "clean":
         natija = "tozalamoq"
         break;
      case "copy":
         natija = "nusxalamoq"
         break;
      case "cope":
         natija = "yutmoq, g'alaba qozonmoq"
         break
      case "career":
         natija = "ish faoliyati"
         break;
      case "cut":
         natija = "kesmoq"
         break;
      case "close":
         natija = "berk"
         break
      case "clam":
         natija = "tastiqlamoq"
         break;
      case "crop":
         natija = "cho'pak"
         break;
      case "call":
         natija = "qong'irioq qilmoq"
         break
      case "camera":
         natija = "kamera"
         break;
      case "can":
         natija = "bajara olmoq"
         break;
      case "cost":
         natija = "Narx"
         break
      case "cofee":
         natija = "qahva"
         break;
      case "cow":
         natija = "Sigir"
         break;
      case "cap":
         natija = "Kepka"
         break
      case "cause":
         natija = "Sabab bo'lmoq"
         break;
      case "cave":
         natija = "G'or"
         break;
      case "Code":
         natija = "kod"
         break
      case "cede":
         natija = "Bermoq"
         break;
      case "celebrate":
         natija = "Nishonlamoq"
         break;
      case "cell":
         natija = "Xujayra"
         break
      case "cement":
         natija = "Sement"
         break;
      case "center":
         natija = "Markaz"
         break;
      case "centeral":
         natija = "Markaziy"
         break
      case "cartoon":
         natija = "Multfilm"
         break;
      case "carrot":
         natija = "sabzi"
         break;
      case "carefully":
         natija = "Extiyotkorlik"
         break
      case "charm":
         natija = "MAstunkorlik"
         break;
      case "chart":
         natija = "Diagramma"
         break;
      case "chat":
         natija = "chat"
         break
      case "cheer":
         natija = "qichqirmoq"
         break;
      case "cabal":
         natija = "g'or"
         break;
      case "cabbage":
         natija = "karam"
         break
      case "cabinet":
         natija = "kabinet,xona,bolma"
         break;
      case "cable":
         natija = "habel,shnur"
         break
      case "cable car":
         natija = "sim arqonli transport"
         break;
      case "cabman":
         natija = "taksi xaydovchi"
         break
      case "cabsteng":
         natija = "taksi / keb to'xtadigan joy"
         break;
         natija = "kasal"
         break
      case "tall":
         natija = "uzun"
         break
      case "tail":
         natija = "dum"
         break
      case "take":
         natija = "olmoq"
         break
      case "took":
         natija = "olmoq so'zini past simple shakli"
         break
      case "taken":
         natija = "olmoq so'zini  perfect shakli"
         break
      case "talk":
         natija = "gaplashmoq"
         break
      case "the":
         natija = "aniq article"
         break
      case "target":
         natija = "nishon"
         break
      case "text":
         natija = "teks"
         break
      case "time":
         natija = "vaqt , marta"
         break
      case "top":
         natija = "ustgi qism"
         break
      case "type":
         natija = "tur xil"
         break
      case "touch":
         natija = "tegmoq"
         break
      case "tiger":
         natija = "yo'lbars"
         break
      case "throw":
         natija = "irg'itmoq"
         break
      case "threw":
         natija = "irg'itmoq so'zini past shakli"
         break
      case "tool":
         natija = "asbob , buyum"
         break
      case "through":
         natija = "orqali"
         break
      case "try":
         natija = "harakat qilmoq"
         break
      case "thooth":
         natija = "tish"
         break
      case "theeth":
         natija = "tishlar"
         break
      case "true":
         natija = "to'g'ri"
         break
      case "tree":
         natija = "daraxt"
         break
      case "this":
         natija = "bu yaqindagi narsaga"
         break
      case "that":
         natija = "bu uzoqdagi narsaga"
         break
      case "those":
         natija = "bu yaqindagi narsalarga"
         break
      case "these":
         natija = "bu uzoqdagi narsarlarga"
         break
      case "big":
         natija = "katta"
         break;
      case "pen":
         natija = "ruchka"
         break;
      case "case":
         natija = "quti sumka"
         break
      case "mother":
         natija = "Ona," + " " + "mom"
         break
      case "bag":
         natija = "sumka"
         break
      case "basic":
         natija = "asosiy"
         break;
      case "blood":
         natija = "qon"
         break
      case "brother":
         natija = "aka , uka"
         break
      case "black":
         natija = "qora"
         break
      case "bump":
         natija = "urib olmoq"
         break;
      case "break":
         natija = "sindirmoq tanafus"
         break
      case "book":
         natija = "Kitob , buyurtma bermoq"
         break
      case "bar":
         natija = "bar"
         break
      case "bloot":
         natija = "qorayish"
         break;
      case "blouse":
         natija = "bluza"
         break
      case "blazer":
         natija = "kapshonkali kurtka"
         break
      case "broad":
         natija = "keng"
         break
      case "band":
         natija = "musiqachilar guruhi"
         break;
      case "bean":
         natija = "loviya"
         break
      case "bread":
         natija = "non"
         break
      case "ballerian":
         natija = "balerina"
         break
      case "buy":
         natija = "sotib olmoq"
         break
      case "bought":
         natija = "sotib olmoq so'zini 2 va 3 o'tgan zamon shakli"
         break;
      case "become":
         natija = "bo'lmoq"
         break
      case "became":
         natija = "bo'lmoq so'zni 2 o'tgan zamon shakli"
         break
      case "be":
         natija = "To be , bo'lmoq"
         break
      case "bee":
         natija = "ari"
         break
      case "bit":
         natija = "urmoq"
         break;
      case "bitten":
         natija = "urmoq so'zni 3 o'tgan zamon shakli"
         break
      case "blow":
         natija = "esmoq,puflamoq"
         break
      case "body":
         natija = "tana"
         break
      case "button":
         natija = "tugma"
         break
      case "border":
         natija = "chegara"
         break;
      case "bottom":
         natija = "tub tagi"
         break
      case "babble":
         natija = "ming'illamoq g'uldiramoq"
         break
      case "babe":
         natija = "chaqaloq "
         break
      case "baby":
         natija = "chaqaloq"
         break
      case "baccy":
         natija = "tamaki"
         break;
      case "back":
         natija = "orqaga"
         break
      case "baker":
         natija = "novvoy"
         break
      case "background":
         natija = "orqa fon"
         break
      case "backpack":
         natija = "ryukzak"
         break
      case "bacon":
         natija = "cho'chqa go'shti"
         break;
      case "bacterium":
         natija = "bakteriya"
         break
      case "bad":
         natija = "yomon , kravat"
         break
      case "baddy":
         natija = "salbiy obraz"
         break
      case "bee":
         natija = "ari"
         break
      case "bit":
         natija = "urmoq"
         break;
      case "bitten":
         natija = "urmoq so'zni 3 o'tgan zamon shakli"
         break
      case "blow":
         natija = "esmoq,puflamoq"
         break
      case "box":
         natija = "quti"
         break
      case "if":
         natija = "agar"
         break
      case "in":
         natija = "ichida"
         break
      case "image":
         natija = "rasm"
         break
      case "index":
         natija = "indeks"
         break
      case "inline":
         natija = "ichida"
         break
      case "install":
         natija = "o'rnatmoq  "
         break
      case "internet":
         natija = "internet"
         break
      case "design":
         natija = "Dizayn";
         break;
      case "desire":
         natija = "Istak";
         break;
      case "desk":
         natija = "Yozuv stoli";
         break;
      case "desperate":
         natija = "Umidsiz";
         break;
      case "despite":
         natija = "Qaramasdan";
         break;
      case "destory":
         natija = "Halok";
         break;
      case "destruction":
         natija = "Vayron qilish";
         break;
      case "detail":
         natija = "Batafsil";
         break;
      case "determination":
         natija = "Aniqlash";
         break;
      case "determined":
         natija = "Belgilangan";
         break;
      case "develop":
         natija = "Rivojlantirish";
         break;
      case "device":
         natija = "Qurilma";
         break;
      case "devote":
         natija = "Bag / Ishlamoq";
         break;
      case "devoted":
         natija = "Sodiq";
         break;
      case "diagram":
         natija = "Diagrammasi";
         break;
      case "diamond":
         natija = "Olmos";
         break;
      case "diary":
         natija = "Kundalik Daftar";
         break;
      case "dictionary":
         natija = "Lug'at";
         break;
      case "die":
         natija = "Vafot";
         break;
      case "diet":
         natija = "Parhez";
         break;
      case "difference":
         natija = "Farq";
         break;
      case "different":
         natija = "Turli";
         break;
      case "difficult":
         natija = "Murakkab";
         break;
      case "difficulty":
         natija = "Qiyinchilik";
         break;
      case "dig":
         natija = "Chopmoq";
         break;
      case "dinner":
         natija = "Kechki Ovqat";
         break;
      case "direct":
         natija = "To'g'ri";
         break;
      case "direction":
         natija = "Yo'nalish";
         break;
      case "directly":
         natija = "To'g'ridan-To'g'ri";
         break;
      case "director":
         natija = "direktor";
         break;
      case "dirt":
         natija = "Loy";
         break;
      case "dirty":
         natija = "Iflos";
         break;
      case "dog":
         natija = "IT";
         break;
      case "disabled":
         natija = "O'chirilgan";
         break;
      case "disadvantage":
         natija = "Zarar";
         break;
      case "disagree":
         natija = "Kelishmay Qolmoq";
         break;
      case "disagreement":
         natija = "Ziddiyat";
         break;
      case "disappear":
         natija = "Yo'qoladi";
         break;
      case "disappoint":
         natija = "Ko'ngil Qoldirmoq";
         break;
      case "disappointed":
         natija = "Xafa";
         break;
      case "disappointing":
         natija = "Alam Qiladigan";
         break;
      case "disappointment":
         natija = "Afsus";
         break;
      case "disapproval":
         natija = "Ma'qullamaslik";
         break;
      case "disc":
         natija = "Disk";
         break;
      case "discipline":
         natija = "Intizom";
         break;
      case "discount":
         natija = "Chegirma";
         break;
      case "discover":
         natija = "Kashf";
         break;
      case "discovery":
         natija = "Kashfiyot";
         break;
      case "discuss":
         natija = "Muhokama";
         break;
      case "disease":
         natija = "Kasallik";
         break;
      case "disgust":
         natija = "Jirkanish";
         break;
      case "disgusted":
         natija = "Taajublanib";
         break;
      case "dish":
         natija = "Taom";
         break;
      case "dislike":
         natija = "Yoqtirmaslik";
         break;
      case "display":
         natija = "Displey";
         break;
      case "dissolve":
         natija = "Eritmoq";
         break;
      case "distance":
         natija = "Masofa";
         break;
      case "distribute":
         natija = "Tarqatish";
         break;
      case "distribution":
         natija = "Taqsimlash";
         break;
      case "district":
         natija = "Tuman";
         break;
      case "disturb":
         natija = "Tinchsizlantirmoq";
         break;
      case "disturbing":
         natija = "Xavotirli";
         break;
      case "divide":
         natija = "Ajratmoq";
         break;
      case "doctor":
         natija = "Shifokor";
         break;
      case "document":
         natija = "Hujjat";
         break;
      case "dollor":
         natija = "Dollar";
         break;
      case "domestic":
         natija = "Ichki";
         break;
      case "dominate":
         natija = "Hukmronlik Qilmoq";
         break;
      case "door":
         natija = "Eshik";
         break;
      case "double":
         natija = "Ikki Hissa";
         break;
      case "doubt":
         natija = "Shubha";
         break;
      case "down":
         natija = "Pastga";
         break;
      case "draft":
         natija = "Loyihasi";
         break;
      case "drag":
         natija = "Sudramoq";
         break;
      case "drama":
         natija = "Drama";
         break;
      case "draw":
         natija = "Chizish";
         break;
      case "dream":
         natija = "Tush";
         break;
      case "pen":
         natija = "ruchka"
         break;
      case "case":
         natija = "quti sumka"
         break
      case "mother":
         natija = "Ona," + " " + "mom"
         break
      case "live":
         natija = "jonli"
         break;
      case "aback":
         natija = "hayrata qoldirmoq"
         break;
      case "":
         natija = ""
         break;
      case "":
         natija = ""
         break;


      default:
         natija = "not found"
         break;
   }
   H2.innerHTML = " " + natija
   console.log();
}


let IMAGE = document.createElement("img");
IMAGE.className = "card"
box.appendChild(IMAGE)

IMAGE.src = "https://cdn-0.therandomvibez.com/wp-content/uploads/2020/09/Feeling-Empty-Quotes-1.jpg"

function UzbToEng() {
   let value = Input.value.toLowerCase()
   switch (value) {
      case "fil":
         natija = "elephant"
         IMAGE.src = "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg"
         break;
      case "olma":
         natija = "apple"
         IMAGE.src = "https://m.media-amazon.com/images/I/918YNa3bAaL._SX679_.jpg"
         break;
      case "kitob":
         natija = "book"
         IMAGE.src = "https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg?version=5.0.243"
         break;


      default:
         natija = "hech narsa yo'q"
         break;
   }
   H2.innerHTML = " " + natija


   console.log("EngToUzb");
}
