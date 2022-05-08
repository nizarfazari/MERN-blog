 "dependencies": {
    "body-parser": "^1.20.0" => untuk request pada json ,
    "express": "^4.18.1" => digunakan untuk routing,
    "express-validator": "^6.14.0" => untuk mengvalidasi pada bagian controller,
    "mongoose": "^6.3.2" => untuk menghubungkan ke monggodb
     "multer": "^1.4.4" => middleware untuk menghadle multipart/form data
  }
secara prinsip.
- - save ini bermakna bahwa package ini bersifat required atau di perlukan agar aplikasi ini bisa berjalan dengan baik.
sedangkan kalau
- - save-dev ini bermakna bahwa package yang di gunakan hanya bersifat optional saja, dia hanya di pakai saat proses development saja. Sedangkan saat proses prduction package nya tidak di gunakan lagi.