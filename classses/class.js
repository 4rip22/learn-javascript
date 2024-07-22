class hewan{
    constructor(nama, jenis, warna, umur){
        this.nama = nama;
        this.jenis = jenis;
        this.warna = warna;
        this.umur = umur;
    }
    //method get gunannya untuk mengambil data
    getUmur(){
        console.log("Hewan ini berumur ", this.umur,"Tahun");
    }
    //method set gunanya untuk mengisi data
    setUmur(umur){
        this.umur = umur;
        console.log("Hewan ini berumur ", this.umur,"Tahun");
    }
    setUmur1(umur){
        this.umur = umur;
        console.log("Hewan ini berumur ", this.umur,"Tahun");
    }
    //method
    display(){
        console.log("Hewan ini adalah ", this.nama, this.jenis, this.warna);
    }
    //method
    display2(){
        console.log("Hewan ini adalah ", this.jenis, this.warna);
    }
    display3(){
        console.log("Hewan ini adalah ", this.nama, this.warna);
    }

};
const hewan1 = new hewan("harimau", "mamalia", "biru",5);
const hewan2 = new hewan("bebek", "mamalia", "kuning"); 
const hewan3 = new hewan("kucing", "mamalia", "hitam");

console.log("----------------------------------------");
hewan1.display();
hewan1.getUmur();
console.log("----------------------------------------");
hewan2.display2();
hewan2.setUmur(10);
console.log("----------------------------------------");
hewan3.display3()
hewan3.setUmur1(15);

