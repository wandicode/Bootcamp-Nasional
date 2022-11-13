/** Jangan mengubah Kode di Bawah ini! */
const mahasiswa = [
  {
    nama: 'Royhan',
    nim: 20017001,
    mk: [
      { nama: 'Pemrograman Web', 
      kuis: 65, 
      uts: 80,
      uas: 75 
    },

      { nama: 'Mobile Programming', 
      kuis: 70, 
      uts: 80, 
      uas: 70 
    },

      { nama: 'Ethical Hacking', 
      kuis: 75, 
      uts: 70, 
      uas: 75 
    },
  ],
},

// dictionary 2

  {
    nama: 'Reyhan',
    stambuk: 20017002,
    mk: [
      { nama: 'Pemrograman Web', kuis: 70, uts: 80, uas: 75 },
      { nama: 'Mobile Programming', kuis: 70, uts: 80, uas: 80 },
      { nama: 'Ethical Hacking', kuis: 80, uts: 70, uas: 75 },
    ],
  },
];

const panjang= mahasiswa.length;

/** 1 :
 * Buatlah sebuah function tanpa parameter yang berfungsi untuk
 * menampilkan nilai uas mk Pemrograman Web pada Array of Object mahasiswa
 */
// TODO 1: Ketikkan kode Anda di bawah ini!
function tampilNilaiPemogramanWeb(){
  console.log(mahasiswa[0].mk[0]);
  }



/** 2 :
 * Buatlah sebuah function dengan parameter nama yang berfungsi untuk
 * menampilkan nilai uas mk Pemrograman Web pada Array of Object mahasiswa
 * berdasarkan nama mahasiswa
 */
// TODO 2: Ketikkan kode Anda di bawah ini!
function tampilkanNilai(data) {
  for (let i = 0; i <data.length; i++) {
    console.log(data[i].nama, ":", data[i].mk[0].uas);
  }
}

// TODO 5: ketikkan kode anda dibawah ini 


tampilkanNilai(mahasiswa);
tampilNilaiPemogramanWeb();