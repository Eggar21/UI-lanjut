# eggarfickianto

## Pembaruan: Fitur Kategori & Perombakan UI Modern

Saya telah berhasil menambahkan fitur **Kategori** dan merombak total antarmuka pengguna (UI) dengan desain yang modern dan responsif.

### Fitur yang Diimplementasikan

#### 1. Kategori (Categories)
* **Pilihan Kategori:** Saat menambahkan tugas, Anda kini dapat memilih kategori: *Personal* (Pribadi), *Work* (Pekerjaan), *Shopping* (Belanja), atau *Urgent* (Mendesak).
* **Lencana Visual:** Setiap tugas akan menampilkan lencana (*badge*) berwarna yang sesuai dengan kategorinya untuk identifikasi cepat.
* **Integrasi Store:** Pinia store kini telah diperbarui untuk menyimpan data kategori secara persisten.

#### 2. Perombakan UI Modern (Modern UI Overhaul)
* **Design System:** Mengimplementasikan sistem desain baru menggunakan variabel CSS untuk menjaga konsistensi warna, spasi, dan tipografi (menggunakan font Inter).
* **Cards & Shadows:** Menggunakan tata letak berbasis kartu (*card-based layout*) dengan bayangan lembut (*soft shadows*) untuk tampilan yang lebih bersih dan elegan.
* **Interaksi:** Menambahkan efek *hover* pada tombol dan daftar item, serta transisi halus (*smooth transitions*) saat menambah atau menghapus item.
* **Responsif:** Tata letak kini sepenuhnya responsif dan tampil rapi (terpusat) di berbagai ukuran layar.

### LINK VIDEO PRESENTASI 
https://docs.google.com/videos/d/1WG0CV5wnTee5YU178ccsj0Y7L4n2kvX4eL7yNpQbwS0/edit?usp=sharing 

### LINK TUGAS
https://github.com/Eggar21/UI-lanjut.git


#### 1. BEFORE
![alt text](image-1.png)

#### 2. AFTER
![alt text](image.png)


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
