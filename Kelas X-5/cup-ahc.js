// Array yang berisi nama-nama anak
const anak = ["Khalisa", "Nashifa", "Balqis", "Syifana", "Najmia", "Tsabita", "Rizka", 
"Gyani", "Farah", "Avika", "Fariza", "Azifa", "Hauro", "Faras", "Azizah", "Ghina", "Khayyara", 
"Najwa", "Zaskia", "Naumi", "Mozaskia", "Naila", "Alfiya", "Faikha", "Azena", 
"Aisyah", "Khanifah", "Intan", "Nurul"];

// Mengacak array anak
anak.sort(() => Math.random() - 0.5);

// Membagi anak menjadi kelompok-kelompok dengan masing-masing 5 orang
const kelompok = [];
const jumlahKelompok = Math.floor(anak.length / 5);
const sisaAnak = anak.length % 5;

let mulaiIndex = 0;
for (let i = 0; i < jumlahKelompok; i++) {
    kelompok.push(anak.slice(mulaiIndex, mulaiIndex + 5));
    mulaiIndex += 5;
}

// Menambahkan kelompok dengan 4 orang jika ada sisa anak
if (sisaAnak > 0) {
    kelompok.push(anak.slice(mulaiIndex, mulaiIndex + sisaAnak));
}

// Menampilkan hasil kelompok
kelompok.forEach((grup, index) => {
    console.log(`Kelompok ${index + 1}: ${grup.join(', ')}`);
});
