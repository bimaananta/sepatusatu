class Sepatu{
    constructor(merk, jumlah, status){
        this.merk = merk;
        this.jumlah = jumlah;
        this.status = status;
        this.jumlahReStock;
    }

    jual(){
        if(this.status === "tidak aktif"){
            console.log("Aktifkan Penjualan Terlebih Dahulu.")
        }
        else if(this.jumlah === 0){
            console.log("Harap Restock Kembali Barang Sebelum Dijual");
        }
        else{
            this.jumlah--;
            console.log(`Sepatu ${this.merk} terjual, kini sisa ${this.jumlah}.`);
        }
    }
    aktifkan(){
        if(this.status === "aktif"){
            console.log(`Penjualan Sepatu ${this.merk} sudah diaktifkan.`)
        }
        else{
            this.status = "aktif";
            console.log(`Sepatu ${this.merk} kini aktif dijual`);
        }
    }
    reStock(jumlahReStock){
        console.log(`Jumlah Sepatu ${this.merk} Bertambah dari ${this.jumlah} jadi ${this.jumlah += jumlahReStock}`);
        this.jumlah += jumlahReStock
    }
}
let sepatuAdidas = new Sepatu("Adidas", 10, "tidak aktif");

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <style>
//     html{
//         width: 100%;
//         height: 100vh;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .container{
//         width: 600px;
//         height: 600px;
//         border: 2px solid black;
//         display: flex;
//         flex-wrap: wrap;
//         transform: scale(0.7);
//     }
//     .kotak{
//         width: 180px;
//         height: 180px;
//         margin: 10px;
//         background-color: red;
//         transition: all 0.2s;
//     }
// </style>
// <body>
//     <div class="container">
//         <div class="kotak"></div>
//         <div class="kotak"></div>
//         <div class="kotak"></div>
//         <div class="kotak"></div>
//         <div class="kotak"></div>
//         <div class="kotak"></div>
//         <div class="kotak"></div>
//         <div class="kotak"></div>
//         <div class="kotak"></div>
//     </div>
//     <script>
//         const kotak = document.querySelectorAll(".kotak");

//         kotak.forEach(function(box){
//             box.addEventListener('click', function(){
//               var warna = randomWarna();
//               this.style.backgroundColor = warna;
//             })
//         });

//         function randomWarna(){
//             var randomNum = Math.random();
//             if(randomNum >= 0.0 && randomNum <= 0.1){
//                 return randomNum = "red";
//             }
//             else if(randomNum >= 0.1 && randomNum <= 0.2){
//                 return randomNum = "blue";
//             }
//             else if(randomNum >= 0.3 && randomNum <= 0.4){
//                 return randomNum = "green";
//             }
//             else if(randomNum >= 0.4 && randomNum <= 0.5){
//                 return randomNum = "yellow";
//             }
//             else if(randomNum >= 0.5 && randomNum <= 0.6){
//                 return randomNum = "white";
//             }
//             else if(randomNum >= 0.7 && randomNum <= 0.8){
//                 return randomNum = "orange";
//             }
//         }
//     </script>
// </body>
// </html>