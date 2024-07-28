//constructor function
const Mahasiswa1 = function(){
    nama = "Arip Saputra";
    umur = 18;
    alamat = "Gunung Kemala Induk";
    this.sayHello = () => {
        console.log(`Hello, Nama saya ${nama}`,`,Umur saya ${umur} Tahun`,`,Alamat saya ${alamat}.`);
    }
}
const Mahasiswa2 = function(){
    this.nama = "rafif maulana";
    this.Umur = 19;
    this.alamat = "Misterius";
    this.sayHello =() => {
        console.log(`Hello, Nama saya ${this.nama}`,`Umur saya ${this.Umur}`,`Alamat saya ${this.alamat}.`)
    }
}
//instance of constructor
const mahasiswa1 = new Mahasiswa1();
const mahasiswa2 = new Mahasiswa2();

//keyword this
mahasiswa1.sayHello();
mahasiswa2.sayHello();
