//Meminta input nama dan umur (gunakan variabel langsung, tidak perlu input dari user).
//Menampilkan pesan seperti: "Halo [nama], tahun depan umurmu [umur+1] tahun."
//Gunakan tipe data yang sesuai.

function hello (nama: string, umur: number) : string {
    return `Halo ${nama}, tahun depan umurmu ${umur+1} tahun.`;
    // tanda petik yang dipakai yg dibawah tombol esc (backtick)
}

const mahasiswa = "Andy"
const umur = 19;
console.log(hello(mahasiswa,umur));
