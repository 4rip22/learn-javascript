//array filter

var number = [1,2,3,4,5,6,7,8];
var number1 = number.filter(function(e){
    return e < 7 ;
});
console.log(number1.join(" "));
//output
// 1 2 3 4 5 6 