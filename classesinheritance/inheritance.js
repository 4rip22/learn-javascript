class instansi {
    constructor(nama, alamat, perusahaan){
        this.nama = nama;
        this.alamat = alamat;
    }
    display(){
        console.log("Nama : ",this.nama);
        console.log("Alamat : ",this.alamat);
    }
}

class Perusahaan extends instansi{
    constructor(nama, alamat, jabatan){
        super(nama, alamat);
        this.jabatan = jabatan;
    }
    display1(){
        super.display();
        console.log("Jabatan : ",this.jabatan);
    }
}

const instansi1 = new instansi("arip saputra", "kota bandung", "Ceo");
const Perusahaan1 = new Perusahaan("arip saputra", "kota bandung", "Ceo");
const instansi2 = new instansi("salman", "kota bandung", "Manager");
const perusahaan2 = new Perusahaan("salman", "kota bandung", "Manager")


instansi1.display();
perusahaan1.display1();
instansi2.display();
perusahaan2.display1();