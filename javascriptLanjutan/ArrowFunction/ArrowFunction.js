//arrow function
let Mahasiswa = ["arip saputra","salman","fuad hamidan","akbar","KAK GEM","KAK VIN","rifqi"];

//menggunakan arrow function 
let jmlhHuruf = Mahasiswa.map(nama => ({nama,jumlahHuruf:nama.length }));


console.table(jmlhHuruf); 

