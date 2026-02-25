// src/index.ts

function hello (nama: string, umur: number) : string {
    return `Selamat Datang ${nama}, ${umur} tahun, di PWL`;
    // tanda petik yang dipakai yg dibawah tombol esc (backtick)
}

const mahasiswa = "Andy"
const umur = 19;
console.log(hello(mahasiswa,umur));
