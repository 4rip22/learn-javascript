// array method
// - join
// - push - pop - shift - unshift - slice - splice


var nama = ["rifqi", "rival", "riki"];

//pop menghilangkan data terakhir
nama.pop();
console.log(nama.join(" "));

//push menambahkan data
nama.push("arip","salman","fuad","hamidan");
console.log(nama.join(" "));

//shift menghilangkan data pertama
nama.shift();
console.log(nama.join(" "));

//unshift menambahkan data pertama
nama.unshift("rangga");
console.log(nama.join(" "));

//slice mengambil data
var nama1 = nama.slice(2,4);
console.log(nama1.join(" "));

//splice mengganti data
nama.splice(2,1,"nenek gayung","nenek");
console.log(nama.join(" "));
