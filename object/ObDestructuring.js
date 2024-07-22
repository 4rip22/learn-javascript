//destructuring
const data1 = {
    firstName : "arip",
    lastName : "saputra",
    age : 20,
    address : "Gunung Kemala",
    regency : "Pesisir Barat",
    province : "lampung"
   
};

const data2 = {
    firstName : "salman",
    lastName : "almuthari",
    age : 19,
    address : "Gunung kemala",
    regency : "Pesisir Barat",
    province : "lampung"
   
};

const data3 = {
    firstName : "fuad",
    lastName : "hamidan",
    age : 19,
    address : "Kedaton",
    regency : "Bandar Lampung",
    province : "lampung"
};

//membuat parameter dengan destructuring
let {firstName, lastName, age,address,regency,province} = data1;
let {firstName:firstName2, lastName:lastName2, age:age2,address:address2,regency:regency2,province:province2} = data2;
let {firstName:firstName3, lastName:lastName3, age:age3,address:address3,regency:regency3,province:province3} = data3;

console.log("------");
console.log("DATA 1");
console.log("------");

console.log("Nama :", data1.firstName, data1.lastName);
console.log("Umur :",data1.age);
console.log("Alamat :", data1 .address);
console.log("Kabupaten :",data1.regency);
console.log("Provinsi :",data1.province);

console.log("------");
console.log("DATA 2");
console.log("------");

console.log("Nama :", data2.firstName, data2.lastName);
console.log("Umur :",data2.age);
console.log("Alamat :", data2 .address);
console.log("Kabupaten :",data2.regency);
console.log("Provinsi :",data2.province);

console.log("------");
console.log("DATA 3");
console.log("------");

console.log("Nama :", data3.firstName, data3.lastName);
console.log("Umur :", data3.age);
console.log("Alamat :", data3 .address);
console.log("Kabupaten :", data3.regency);
console.log("Provinsi :", data3.province);