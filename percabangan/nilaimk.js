const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan nilai matakuliah: ', (jawaban) => {
  const nilai = parseInt(jawaban);

  if (nilai >= 76 && nilai <= 100) {
    console.log("Anda Lulus");
  }
  else if (nilai >= 71 && nilai <= 75) {
    console.log("Anda Lulus");
  }
  else if (nilai >= 66 && nilai <= 70) {
    console.log("Anda Lulus");
  }
  else if (nilai >= 61 && nilai <= 65) {
    console.log("Anda Lulus");
  }
  else if (nilai >= 56 && nilai <= 60) {
    console.log("Anda Lulus");
  }
  else if (nilai >= 50 && nilai <= 55) {
    console.log("Anda Lulus Bersyarat");
  } else {
    console.log("Anda Tidak Lulus");
  }

  switch(true) {
    case (nilai >= 76 && nilai <= 100):
      console.log("A");
      break;
    case (nilai >= 71 && nilai <= 75):
      console.log("B+");
      break;
    case (nilai >= 66 && nilai <= 70):
      console.log("B");
      break;
    case (nilai >= 61 && nilai <= 65):
      console.log("C+");
      break;
    case (nilai >= 56 && nilai <= 60):
      console.log("C");
      break;
    case (nilai >= 50 && nilai <= 55):
      console.log("D");
      break;
    default:
      console.log("E");
  }

  rl.close();
});
