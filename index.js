// Kalkulator sederhana
const readline = require('readline');
const { tambah, kurang, kali, bagi, pangkat, faktorial, isPrima, modulus, absolut, maksimum, minimum, bulatkan } = require('./solution');

// Interface untuk membaca input dari user
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menampilkan menu
console.log('Kalkulator sederhana');
console.log('1. Penjumlahan');
console.log('2. Pengurangan');
console.log('3. Perkalian');
console.log('4. Pembagian');
console.log('5. Pangkat');
console.log('6. Faktorial');
console.log('7. Cek bilangan prima');
console.log('8. Modulus');
console.log('9. Absolut');
console.log('10. Maksimum');
console.log('11. Minimum');
console.log('12. Pembulatan');

// Meminta user untuk memilih menu
r1.question('Pilih menu: ', (menu) => {
    let a, b;

    // Operasi yang memerlukan dua angka
    if (["1", "2", "3", "4", "5", "8", "10", "11"].includes(menu)) {
        r1.question("Masukkan angka pertama: ", (angka1) => {
            a = parseFloat(angka1);
            r1.question("Masukkan angka kedua: ", (angka2) => {
                b = parseFloat(angka2);
                tampilkanHasil(menu, a, b);
                r1.close();
            });
        });
    
    // Operasi yang memerlukan satu angka
    } else if () {

    } else {
        console.log('Menu tidak valid');
        r1.close();
    }
});

// Fungsi untuk menghitung berdasarkan opsi

    