class Math{
  
  constructor(){
        
    this.pilihan = prompt("Pilih operator: ")
    this.proses() 
  }
  proses(){
    this.angka1 = parseInt(prompt("Angka Satu"))
    this.angka2 = parseInt(prompt("Angka Dua"))
    
    if(this.pilihan === "+"){this.tambah(this.angka1,this.angka2)}
    else if(this.pilihan === "-"){this.kurang(this.angka1,this.angka2)}
    else if(this.pilihan === "/"){this.bagi(this.angka1,this.angka2)}
    else if(this.pilihan === "*"){this.kali(this.angka1,this.angka2)}
    else if(this.pilihan === "%"){this.modulus(this.angka1,this.angka2)};
  };
  //this.tambah = (angka1,angka2) => {console.log(angka1 + angka2)})
  tambah(angka1,angka2){
    let hasil = angka1 + angka2
    console.log(hasil)
  };
  kurang(angka1,angka2){
    let hasil = angka1 - angka2
    console.log(hasil)
  };
  bagi(angka1,angka2){
    let hasil = angka1 / angka2
    console.log(hasil)
  };
  kali(angka1,angka2){
    let hasil = angka1 * angka2
    console.log(hasil)
  };
  modulus(angka1,angka2){
    let hasil = angka1 % angka2
    console.log(hasiil)
  };
}

new Math()