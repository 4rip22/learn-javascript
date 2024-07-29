//- Array.prototype.map() - Array.prototype.filter() - Array.prototype.reduce()

//filter 
const num = [3,4,1,-2,-3,10,57,2,-3,30];

// angka yang lebih dari 3
const newNum =num.filter(n => n >= 3 );
console.log(newNum);

//map
const number = [4,54,3,21,2,1,3,5,4,7];
//mengalikan semua angka di dalam array
const newNumber = number.map(n => n * 2);
console.log(newNumber);

//reduce
const number1 = [4,54,3,21,2,1,3,5,4,7];

//menjumlahkan semua angka di dalam array
const newNumber1 = number1.reduce((Value1, Value2) =>  Value1  + Value2 );
console.log(newNumber1);


//method chaning
const numbers = [2,3,4,5,6,7,8,9,10];

//cari angka > 4 
//kalikan semua angka di dalam array
//jumlahkan semua di dalam array

//filter:5,6,7,8,9,10 map:10,12,14,16,18,20 reduce:70
const hasil = numbers.filter(n => n > 4).map(n => n * 4).reduce((Value1, Value2) =>  Value1  + Value2 );
console.log(hasil)
