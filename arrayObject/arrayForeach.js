// foreach

var num = [1,2,3,4,5,6,7,8];
var mahasiswa = ['arip','salman','fuad','akbar'];

// foreach dengan anonymous function 
num.forEach(function(e, i){
    console.log('Mahasiswa ke -' + (i+1) + ' adalah ' + e);
});
