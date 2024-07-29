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
