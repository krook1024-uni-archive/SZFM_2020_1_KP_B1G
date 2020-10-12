# Rendszerre vonatkozó szabályok, rendeletek

Felhasználói adatok védelmére vonatkozó irányelvek betartása.
Az EU, GDPR rendelkezéseinek betartása a személyes adatok védelmében.
[Teljes GDPR dokumentum](https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679&from=HU)
A sütikre vonatkozó kormányzati rendelet betartása.
MVC szemléletmód használata.
A szükséges programozási konvenciók betartása.

# Igényelt üzleti folyamatok modellje

## Felhasználókezelés 

![img/felhasznalokezeles.png](img/felhasznalokezeles.png)

## Karbantartás

![img/karbantartas.png](img/karbantartas.png)

## Autóbeszerzés

![img/autobeszerzes.png](img/autobeszerzes.png)

## Céges kapcsolattartás

![img/ceges_kapcs.png](img/ceges_kapcs.png)

# Képernyőtervek 

A képernytervek a Figma nevű web-alapú szerkesztővel készültek. 
Az alábbi tervek csak wireframe jellegűek, a projekt fő elrendezését határozzák meg, a kész dizájn ettől eltérő lehet.  

## Kezdőlap

![img/screen_design/cars-listed.png](img/screen_design/cars-listed.png)

## Regisztráció 

![img/screen_design/register.png](img/screen_design/register.png)

## Belépés

![img/screen_design/login.png](img/screen_design/login.png)

## Autó bérlés 

![img/screen_design/rent-car.png](img/screen_design/rent-car.png)

# Követelménylista

Az ügyfél a következő kérésekkel van felénk.

## Felhasználói interfész

1. Felhasználók létrehozása, bejelentkezés.
2. Autók listázása.
3. Autók bérlésének lehetősége megadott szabályokkal.
4. Kapcsolat statikus oldal megjelenítése.

## Admin interfész

1. Autók CRUD.
2. Autók szervízlapja.
3. Felhasználók CRUD.
4. Bérlések CRUD.

# Megfeleltetés, hogyan fedik le a funkciók a követelményeket

```
F_n: felhasználói interfész funkciói
A_n: felhasználói interfész funkciói
```

- F1 lefedi a felhasználókezelés első felét.
- F2 lefedi az autók kezelését.
- F3 lefedi az autók bérlését.
- F4 lefedi a céges kapcsolattartás részt.
- A1 lefedi az autókkal kapcsolatos kéréseket.
- A2 lefedi az autók szükségleteinek nyilvántartását.
- A3 lefedi a felhasználókkezelés második felét.
- A4 lefedi a bérlések kezelését.

# Fogalomszótár 

## Rendszerrel kapcsolatos fogalmak 

**vendég felhasználó:** Olyan felhasználó, aki nincs regisztrálva a 
rendszerben, csak korlátozott funkciókat ér el. 

**admin:** A cég alkalmazottja, aki a rendszer admin felületén keresztül
tudja kezelni a bérelhető autókat, leírásukat, illetve a felhasználók által
leadott kölcsönzési kérelmeket. 

## Fejlesztéssel kapcsolatos fogalmak 

**HTML:** A HTML (angolul: HyperText Markup Language=hiperszöveges jelölőnyelv)
egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, és mára már
internetes szabvánnyá vált a W3C (World Wide Web Consortium) támogatásával.

Forrás: [https://hu.wikipedia.org/wiki/HTML](https://hu.wikipedia.org/wiki/HTML)

**Cross-Platform:** A platformfüggetlenség vagy többplatformosság, illetve multi-platform
fogalma olyan számítógépes programokra, operációs rendszerekre, programozási nyelvekre
vagy más számítógépes szoftverekre és implementációikra vonatkozik, amelyek több
számítógépes platformon képesek működni. 

Forrás: [https://hu.wikipedia.org/wiki/Platformf%C3%BCggetlens%C3%A9g](https://hu.wikipedia.org/wiki/Platformf%C3%BCggetlens%C3%A9g)

**JavaScript:** A JavaScript programozási nyelv egy objektumorientált, prototípus alapú
szkriptnyelv, amelyet weboldalakon elterjedten használnak.

Forrás:[https://hu.wikipedia.org/wiki/JavaScript](https://hu.wikipedia.org/wiki/JavaScript)

**Node.js**: A Node.js egy szoftverrendszer, melyet skálázható internetes alkalmazások, mégpedig 
webszerverek készítésére hoztak létre. A programok JavaScript-ben írhatók, eseményalapú, aszinkron
I/O-val a túlterhelés minimalizálására és a skálázhatóság maximalizálására.

Forrás: [https://hu.wikipedia.org/wiki/Node.js](https://hu.wikipedia.org/wiki/Node.js)

**Express.js**: Az Express.js vagy Express nyílt forráskódú egy back-end keretrendszer Node.js-hez,
amit web applikációk és API-k fejlesztésére használnak. 

Forrás: [https://en.wikipedia.org/wiki/Express.js](https://en.wikipedia.org/wiki/Express.js)

**MongoDB:** A MongoDB egy platformfüggetlen dokumetum-orientált NoSQL adatbázis, ami
JSON szerű dokumentumokban tárolja az adatokat. 

Forrás: [https://en.wikipedia.org/wiki/MongoDB](https://en.wikipedia.org/wiki/MongoDB)

**React:** A React (vagy ReactJS) egy open-source JavaScript keretrendszer, amit felhasználói felületek
kiépítésére használnak. 

Forrás: [https://en.wikipedia.org/wiki/React_(web_framework)](https://en.wikipedia.org/wiki/React_(web_framework))

**Reszponzív weboldal:** A reszponzív weboldal (RWD) egy olyan megközelítéssel tervezett weboldal, amelynek
a célja az, hogy optimális megjelenést biztosítson - könnyű olvashatóság, egyszerű navigáció a lehető legkevesebb
átméretezéssel és görgetéssel - a legkülönfélébb eszközökön.

**CRUD:** Create, Read, Update, Delete:
https://en.wikipedia.org/wiki/Create,_read,_update_and_delete

Forrás: [https://hu.wikipedia.org/wiki/Reszponz%C3%ADv_weboldal](https://hu.wikipedia.org/wiki/Reszponz%C3%ADv_weboldal)
