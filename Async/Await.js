//Async Await
function cobaPromise(){
    return new Promise((resolve, reject )=> {  
    const clock = 3000;
    if(clock < 3000){
        setTimeout(() => {
            resolve('selesai');
        }, 2000);
        }else{
            reject('gagal');
        }
     })
}

async function coba(){
    try{
        const cobalagi = await cobaPromise();
        console.log(cobalagi);
    }catch(err){
        console.error(err);
    }
}

coba();