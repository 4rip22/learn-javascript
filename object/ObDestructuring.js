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


//membuat parameter dengan destructuring
let {firstName, lastName, age,address,regency,province} = data1;
let {firstName:firstName2, lastName:lastName2, age:age2,address:address2,regency:regency2,province:province2} = data2;

console.log("------");
console.log("DATA 1");
console.log("------");

console.log("Nama :", data1.firstName, data1.lastName);
console.log("Umur :",data1.age);
console.log("Kabupaten :",data1.regency);
console.log("Provinsi :",data1.province);

console.log("------");
console.log("DATA 2");
console.log("------");

console.log("Nama :", data2.firstName, data2.lastName);
console.log("Umur :",data2.age);
console.log("Kabupaten :",data2.regency);
console.log("Provinsi :",data2.province);