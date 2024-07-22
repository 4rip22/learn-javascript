//constructor menggunakan function
function mobil(merk, color,year){
    this.merk = merk;
    this.color = color;
    this.year = year;
}
//membuat object dari constructor 
var mobil1 = new mobil("honda", "merah", 2020);
var mobil2 = new mobil("toyota", "biru", 2022);

console.log("----------");
console.log("DATA MOBIL TIER C")
console.log("----------");

console.log("Merk mobil :",mobil1.merk);
console.log("Warna mobil :",mobil1.color);
console.log("Tahun mobil :",mobil1.year);

console.log("----------");
console.log("DATA MOBIL TIER B");
console.log("----------");

console.log("Merk mobil :",mobil2.merk);
console.log("Warna mobil :",mobil2.color);
console.log("Tahun mobil :", mobil2.year);