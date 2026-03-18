// Buat fungsi sapaan yang dapat menerima parameter
// Jika parameter string, kembalikan "Halo, [nama]".
// Jika parameter number, kembalikan "Umur: [umur] tahun".
// Gunakan union type dan conditional.

function sapaan(input: string | number): string {
    if (typeof input === "string") {
        return `Halo, ${input}`;
    }
    else if (typeof input === "number") {
        return `umur = ${input} tahun`;
    }

    return "input tidak valid"
}

console.log (sapaan("Andy"));
console.log (sapaan(19));