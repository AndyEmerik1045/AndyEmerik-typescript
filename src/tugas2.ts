//Tugas 2: Menggunakan Interface
// Buat file src/tugas2.ts. Definisikan interface Buku dengan properti:
    // judul (string)
    // pengarang (string)
    // tahunTerbit (number)
    // tersedia (boolean)
// Buat satu objek buku dan tampilkan semua propertinya

interface buku {
    judul: string; 
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean
}

function objekBuku (book:buku) : void {
    console.log (`${book.judul} - ${book.pengarang} - ${book.tahunTerbit} - ${book.tersedia}`);
}

const data: buku = {
    judul: "Data Analysis for Beginner", 
    pengarang: "Budi Sutomo", 
    tahunTerbit: 2024,
    tersedia: true
};

objekBuku(data);