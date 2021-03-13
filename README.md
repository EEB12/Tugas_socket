# Penugasan Kedua NCC

Projek collaborative whiteboard dengan memanfaatkan penggunaan socket.io. 

## How To Run

Masukkan command *"node app.js"* pada terminal anda.

## Features

Fitur - fitur yang tersedia di aplikasi :\
    1. Fitur Menulis Text\
    2. Fitur Menghapus\
    3. Fitur ganti room\

## Tata Cara Penggunaan Aplikasi

Terdapat 3 endpoint yang dapat diakses oleh user, collaborative, password, dan broadcast. Masing - masing memiliki alur yang berbeda - beda dalam penggunaannya.

Untuk collaborative, setelah user menjalankan program, user diminta untuk menginput nama masing - masing. Setelah itu, user bisa menggunakan fitur yang ada pada room dengan leluasa.

Untuk password room, setelah user menjalankan program, user diminta untuk menginput nama masing - masing, kemudian memasukkan password yang telah di tetapkan untuk room tersebut. Jika password yang dimasukkan salah, maka user tidak dapat masuk ke dalam room.

Untuk broadcast, setelah user menjalankan program, user diminta untuk menginput nama masing - masing. Jika nama user tidak ditetapkan sebagai room master, maka user tidak dapat menggunakan fitur papan tulis dan hanya bisa menggunakan fitur text chatting di dalam room.
