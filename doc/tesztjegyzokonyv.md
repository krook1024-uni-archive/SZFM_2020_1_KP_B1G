# Teszt jegyzőkönyv 

## API Endpointok manuális tesztelése 

### Tesztelés menetéről
*(Tóth Csaba)*

A tesztelés során a Backend API Endpoint-jaira alkalmazok HTTP kéréseket
a [Postman](https://www.postman.com/) alklamazással. 
A teszt során a car, user, rent endpointok lesznek tesztelve. 

### Car Endpoints 
*(Tóth Csaba)*

**GET REQUEST**

**Elvárások**: 

+ A válasz kilistázza az adatbázisban található autókat 
+ Az Car modellnek megfelelő adatokat kapunk 
+ Autentikáció nélkül is működik 

**Eredmények**

A működés az elvártnak megfelelő. 

![car_get](img/car_get.png)

**POST REQUEST**

**Elvárások**

+ A hozzáadott autó kerüljön be az adatbázisba 
+ A sémának nem megfelelő autó ne kerüljön be az adatbázisba 
+ Autentikáció nélkül ne lehessen autót hozzadni 

**Eredménnyek** 

A működés az elvártnak megelelő  

Autentikáció hiányában válaszként egy 401-es Unathorized Status code-ot kapunk. 

![car_post](img/car_post.jpg)

Ha nem a sémának megelelő autót küldünk, nem kerül be az adatbázisba. 

![car_post2](img/car_post2.jpg)

Ha a sémának megelelő autót küldünk és autentikációnk is van, 
az autó sikeresen felkerül az adatbázisba. 

![car_post3](img/car_post3.jpg)

**PUT REQUEST**

**Elvárások**
+ Csak autentikációval rendelkező user által hajtható végre
+ Csak valid id-val rendelkező autót lehet update-elni. 

**Eredmények** 

Autentikáció hiányában válaszként egy 401-es Unathorized Status code-ot kapunk. 

![car_post](img/car_put.jpg)

Nem létező id-val rendelkező autót nem lehet update-elni. 

![car_put2](img/car_put2.jpg)

Ha valid id-jű autót update-elünk a sémának megfelelően és autentikáció is van az autó adatai az elvárásoknak megfelelően frissülnek. 

![car_put3](img/car_put3.jpg)

**DELETE REQUEST**

**Elvárások**
+ Csak valid id-val rendelkező autót lehessen törölni 
+ Csak autentkációval rendelkező user törölhessen

**Eredmények**

Autentikáció hiányában válaszként egy 401-es Unathorized Status code-ot kapunk. 

![car_delete](img/car_delete.jpg)

Nem létező id-val rendelkező autót nem lehet törölni.

![car_delete](img/car_del2.jpg)

Ha valid id-jű autót törlünk és autentikáció is van az autó az elvárásoknak megfelelően törlődik. 

![car_delete](img/car_del3.jpg)


### User Endpoints 
*(Tóth Csaba)*

**GET REQUEST**

**Elvárások**: 

+ A válasz kilistázza az adatbázisban található felhasználókat 
+ Az User modellnek megfelelő adatokat kapunk 
+ Autentikáció nélkül nem működik

**Eredmények**

Autentikáció hiányában válaszként egy 401-es Unathorized Status code-ot kapunk. 

![user_get](img/user_get.jpg)

Ha van autentikáció a sémának megfelelő adatokkal kilistázza a felhasználókat. 

![user_get2](img/user_get2.jpg)

**POST REQUEST**

**Elvárások**

+ A hozzáadott user kerüljön be az adatbázisba 
+ A sémának nem megfelelő user ne kerüljön be az adatbázisba 
+ Autentikáció nélkül ne lehessen user-t hozzádni 

**Eredmények**

**Eredmények**

Autentikáció hiányában válaszként egy 401-es Unathorized Status code-ot kapunk. 

![user_get](img/user_put.jpg)

Ha nem a sémának megelelő user-t küldünk, nem kerül be az adatbázisba. 

![user_get2](img/user_post.jpg)

Ha van autentikáció a user a sémának megfelelő az új user az elvártnak megfelelően bekrül az adatbázisba. 

![user_post](img/user_post2.jpg)

**PUT REQUEST**

**Elvárások**
+ Csak autentikációval rendelkező user által hajtható végre
+ Csak valid id-val rendelkező usert lehet update-elni.  

**Eredmények**

Autentikáció hiányában válaszként egy 401-es Unathorized Status code-ot kapunk. 

![user_put](img/user_put1.jpg)

Nem valid id-val rendelkező user-t nem lehet update-elni. 

![user_put](img/user_put2.jpg)

Ha valid id-val rendlkező user-t akarunk frissíteni, illetve rendlkezünk admin autentikációval, akkor megfelelően működik. 

![user_put](img/user_put3.jpg)

**DELETE REQUEST**

**Elvárások**
+ Csak admin autentikációval rendlkező felhasználó törölhet 
+ Csak valid id-val rendelkező felhasználót lehet törölni. 

**Eredmények**

Autentikáció hiányában válaszként egy 401-es Unathorized Status code-ot kapunk. 

![user_delete](img/user_delete1.jpg)

Nem valid id-val rendelkező user-t nem lehet törölni. 

![user_delete](img/user_delete2.jpg)

Ha van admin autentikációja a user-nek illetve a törölni kívánt user id-ja létezik akkor megfelelően működik. 

![user_delete](img/user_delete3.jpg)














