//promise
const mahasiswa = new Promise(resolve =>{
    setTimeout(()=>{
        resolve([{
            nama : 'arip saputra',
            umur : 18,
            alamat : 'sukarame',
            jurusan : 'ilmu mancing',
            fakultas : 'ilmu padi'
        },
        {    
            nama : 'joko',
            umur : 19,
            alamat : 'bumi manti 1',
            jurusan : 'ilmu mancing',
            fakultas : 'ilmu padi'
        },
        {
            nama : 'joni',
            umur : 20,
            alamat : 'bumi manti 2',
            jurusan : 'ilmu mancing',
            fakultas : 'ilmu padi'
        },
        {
            nama : 'markonah',
            umur : 19,
            alamat : 'bumi manti 1',
            jurusan : 'ilmu mancing',
            fakultas : 'ilmu padi'
        },
        {
            nama : 'daniel',
            umur : 20,
            alamat : 'bumi manti 1',
            jurusan : 'ilmu mancing',
            fakultas : 'ilmu padi'
        },
        {
            nama : 'abangku',
            umur : 20,
            alamat : 'bumi manti 1',
            jurusan : 'ilmu mancing',
            fakultas : 'ilmu padi'
        },
        {
            nama : 'abang abangan',
            umur : 19,
            alamat : 'bumi manti 1',
            jurusan : 'ilmu mancing',
            fakultas : 'ilmu padi'
        },
        {
            nama : 'rendi',
            umur : 19,
            alamat : 'bumi manti 3',
            jurusan : 'ilmu mancing',
            fakultas : 'ilmu padi'
        }
])
    }, 3000);
});

const matkulWajib = new Promise(resolve =>{
    setTimeout(()=>{
        resolve([{
            nama_matkul : 'pemrograman web',
            dosen : 'dr.joko kendil S.T, M.Kom',
            sks : 3,
            jadwal : 'senin - jumat',
            waktu : '10.00 - 12.00'
        },
        {
            nama_matkul : 'pemrograman mobile',
            dosen : 'joni PhD',
            sks : 3,
            jadwal : 'selasa - kamis',
            waktu : '07.30 - 09.30'
        },
        {
            nama_matkul : 'pemrograman desktop',
            dosen : 'menyala S.T, M.Kom',
            sks : 2,
            jadwal : 'rabu - jumat',
            waktu : '11.10 - 12.15'
        },
        {
            nama_matkul : 'bahasa indonesia',
            dosen : 'dr. rizki S.p, M. Pd',
            sks : 2,
            jadwal : 'senin',
            waktu : '07.30 - 09.30'
        },
        {
            nama_matkul : 'bahasa inggris',
            dosen : 'dr. rizki S.p, M. Pd',
            sks : 3,
            jadwal : 'senin-rabu',
            waktu : '15.30 - 17.00'
        },
        {
            nama_matkul : 'basis data',
            dosen : 'perdi S.T, M.Kom',
            sks : 3,
            jadwal : 'rabu-kamis',
            waktu : '10.30 - 12.00'

        }
    ])
    }, 3000)
})
Promise.all([mahasiswa, matkulWajib])
    .then(Response => {
        const [mhs, matkul] = Response;
        console.log("Data Mahasiswa");
        console.table(mhs);
        console.log("Data Matkul Wajib");
        console.table(matkul);
    });

