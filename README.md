# api-sejutaCita

Berikut adalah API User Sejuta Cita menggunakan Express JS by Yohanes Krisna Yana Javista.

## Dokumentasi
Untuk Link Dokumentasi bisa klik [disini](http://34.101.65.182/api-docs/).

Base URL : http://34.101.65.182/

**CREDENTIAL Admin (Body API Login)**
```json
{
    "username": "admin001",
    "password": "admin001"
}
```

**CREDENTIAL USER 1 (Body API Login)**
```json
{
    "username": "yohaneskrisna",
    "password": "sejutaCitaKrisna"
}
```

**CREDENTIAL USER 2 (Body API Login)**
```json
{
    "username": "userKrisna",
    "password": "userKrisna001"
}
```

## Diagram
### Login : 
Gambar dibawah ini adalah diagram yang menjelaskan alur proses Login :

![Login](doc/login.drawio.png)

### Refresh Token : 
Gambar dibawah ini adalah diagram yang menjelaskan alur proses refresh Token :

![Refresh Token](doc/refresh%20Token.drawio.png)

### User Details (All Users) : 
Gambar dibawah ini adalah diagram yang menjelaskan alur proses mengambil data user dari database :

![Detail User](doc/User%20Detail.drawio.png)

### Get Users (For Admin) : 
Gambar dibawah ini adalah diagram yang menjelaskan alur proses get all users :

![All Users](doc/Get%20Users.drawio.png)


### Create Users (For Admin) : 
Gambar dibawah ini adalah diagram yang menjelaskan alur proses add user :

![Create Users](doc/Create%20Users.drawio.png)

### Get User By ID (For Admin) : 
Gambar dibawah ini adalah diagram yang menjelaskan alur proses get user by ID :

![Get Users By ID](doc/Get%20User%20By%20ID.drawio.png)

### Update Users By ID (For Admin) : 
Gambar dibawah ini adalah diagram yang menjelaskan alur proses update user :

![Update Users](doc/Update%20User.drawio.png)

### Delete Users By ID (For Admin) : 
Gambar dibawah ini adalah diagram yang menjelaskan alur proses delete user :

![Delete Users](doc/Delete%2User.drawio.png)
