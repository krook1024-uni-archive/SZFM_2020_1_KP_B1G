# 🖥 SZFM_2020_1_KP_B1G

Ez a nagy projektünk a Szoftverfejlesztési módszertanok tárgyhoz.

## 🎳 A csapat

 - Füleky László - fulekylaszlo
 - Czinke Márton - CzinkeM
 - Tóth Csaba - tocsika7
 - Molnár Antal - krook1024

## Fejlesztoi munka soran...

- ...masold le a `.env.example` fajlt `.env` neven es toltsd ki az adatokat
  helyesen benne.
- Ezutan futtasd a `npm start` parancsot a fokonvytarban, ez el fogja inditani
  a klienst is.

Amennyiben szukseged van fejlesztoi adatokra az adatbazisban, futtasd a `node
filldb` parancsot.

## MongoDB

Az adatbazis szervert hasznalhatod helyileg, helyileg Dockeren keresztul, vagy
barmilyen szolgaltaton keresztul.


### Hasznalat Dockerrel

Telepitsd a `docker` es `docker-compose` csomagokat a favorizalt
csomagkezelovel.

A Dockeren keresztuli telepiteshez eleg futtatni a `./docker_start.sh`
parancsot, ez letrehoz egy Docker kornyezetet. Ezutan meg tudod nyitni a MongoDB
Express szolgaltatast a http://localhost:8081 cimen.
