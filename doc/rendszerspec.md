# A rendszer célja

Rendszerünk célja roppant egyszerű. Autókölcsönző cégünknek hozunk létre egy
online alkalmazást, így a vásárlóink számára megkönnyítjük magát a kölcsönzést.
Továbbá alkalmazottaink számára is egyszerűbbek és elérhetőbbek lesznek a
szolgáltatások.

Fontos megjegyezni, hogy rendszerünkben különbséget teszünk vendég/felhasználó
illetve admin között. Azokat a felhasználókat akik még nem regisztráltak, vendégnek
hívjuk, így ők csak általános információkat láthatnak egyes gépjárművekről.

Ha a vásárló szeretné jobban átlátni egyes gépjármű állapotát/adatát, szükséges
regisztrálnia ami egy külön felületen lesz elérhető.

Külön szolgáltatást nyújtunk saját alkalmazottainknak is (admin), akik az online
rendszerben tudják ezentúl kezelni a kölcsönzéseket, nyilvántartásokat illetve
karbantartást. Ez a felület viszont a mindenképpen a "design" elé helyezi a
funkcionalitást.

# Projektterv

# Üzleti folyamatok modellje

# Követelmények

# Funkcionális terv

# Fizikai környezet

# Absztrakt domain modell

# Architekturális terv

# Implementációs terv

# Adatbázis terv

## Bevezetés

Az alkalmazás adatainak tárolására a MongoDB nevű adatbázist fogjuk használni.
A MongoDB egy flexibilis, jó skálázhatósággal rendelkező NoSQL  adatbázis. 
Az adatokat JSON-höz hasonló dokumentumokban tárolja, az adatok 
struktúrája
szempontjából nagyobb rugalmasságot biztosít, mint egy SQL adatbázis, 
ugyanis nincs szükség előre definiálni a táblákat, ezek közötti kapcsolatokat. 

## Kollekciók 

Az adatbázis három kollekciót fog tartalmazni, amik a következőek: 
+ user - a felhasználók adatai 
+ car - a bérelhető autók adatai 
+ rent - a bérlések adatai 


# Telepítési terv

# Tesztterv

# Karbantartási terv
