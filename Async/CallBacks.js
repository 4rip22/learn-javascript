//Asynchronouse callback menggunakan javascript murni
// function getDataMahasiswa(url,success,error){
//     const xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//              if(xhr.status === 200){
//                 success(xhr.response);
//              }else if(xhr.status === 404){
//                 error();
//              }
//         }
//     }
//     xhr.open("GET",url);
//     xhr.send();
// }

// getDataMahasiswa("../data/mahasiswa.json", result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));

// },() => {

// });
// console.log("selesai");

//menggunakan jQuery
console.log('mulai');
$.ajax({
    url: "../data/mahasiswa.json",
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');
