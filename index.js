const readline = require("readline");
const { tambah, kurang, kali, bagi, pangkat, faktorial, isPrima, modulus, absolut, maksimum, minimum, bulatkan } = require("./solution");

// Buat interface untuk membaca input pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Tampilkan menu operasi
console.log("=== Kalkulator Sederhana ===");
console.log("1. Tambah");
console.log("2. Kurang");
console.log("3. Kali");
console.log("4. Bagi");
console.log("5. Pangkat");
console.log("6. Faktorial");
console.log("7. Cek Bilangan Prima");
console.log("8. Modulus");
console.log("9. Nilai Absolut");
console.log("10. Maksimum");
console.log("11. Minimum");
console.log("12. Bulatkan");

// Minta pengguna memilih operasi
rl.question("Pilih operasi (1-12): ", (opsi) => {
  let a, b;

  // Operasi yang membutuhkan dua angka
  if (["1", "2", "3", "4", "5", "8", "10", "11"].includes(opsi)) {
    rl.question("Masukkan angka pertama: ", (num1) => {
      rl.question("Masukkan angka kedua: ", (num2) => {
        a = parseFloat(num1);
        b = parseFloat(num2);
        kalkulasi(opsi, a, b);
      });
    });

    // Operasi yang hanya membutuhkan satu angka
  } else if (["6", "7", "9", "12"].includes(opsi)) {
    rl.question("Masukkan angka: ", (num) => {
      a = parseFloat(num);
      kalkulasi(opsi, a);
    });
  } else {
    console.log("Pilihan tidak valid!");
    rl.close();
  }
});

// Fungsi untuk menghitung berdasarkan opsi
function kalkulasi(opsi, a, b = null) {
  let hasil;
  switch (opsi) {
    case "1":
      hasil = tambah(a, b);
      break;
    case "2":
      hasil = kurang(a, b);
      break;
    case "3":
      hasil = kali(a, b);
      break;
    case "4":
      hasil = bagi(a, b);
      break;
    case "5":
      hasil = pangkat(a, b);
      break;
    case "6":
      hasil = faktorial(a);
      break;
    case "7":
      hasil = isPrima(a) ? "Bilangan Prima" : "Bukan Bilangan Prima";
      break;
    case "8":
      hasil = modulus(a, b);
      break;
    case "9":
      hasil = absolut(a);
      break;
    case "10":
      hasil = maksimum(a, b);
      break;
    case "11":
      hasil = minimum(a, b);
      break;
    case "12":
      hasil = bulatkan(a);
      break;
    default:
      hasil = "Operasi tidak dikenal";
  }
  console.log("Hasil:", hasil);
  rl.close();
}
