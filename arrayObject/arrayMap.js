//map
var numbers = [1, 2, 3, 4, 5];
var numbers1 = numbers.map(function(e){ 
    return e * 10;
});
console.log(numbers1.join(" "));