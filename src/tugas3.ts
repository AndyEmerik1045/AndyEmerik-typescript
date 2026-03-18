//  Buat class Lingkaran dengan properti jariJari (number). 
// Tambahkan method hitungLuas() yang mengembalikan luas lingkaran (π * r²). Buat objek dan tampilkan luasnya.

class Lingkaran {
    public luasLingkaran(jariJari: number): string {
        let r = jariJari;
        const phi = 3.14; 
        let hasil = phi * r**2;
        return `Hasil Luas Lingkaran dengan jari-jari ${r} adalah ${hasil}`
    }
}

const piring = new Lingkaran();
console.log(piring.luasLingkaran(13));
