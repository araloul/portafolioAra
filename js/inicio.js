/*Declaramos*/ 
let writing = document.getElementById("writing");
let comenzar = document.getElementById("comenzar");
let pulsa = document.getElementById("pulsa");
let bottom = document.getElementById("bottom");

/*Funcion*/ 
let writing1  = (text = "", tiempo= 1700,  etiqueta = "") =>{
  return new Promise(resolve =>{
    let arrayCaracteres = text.split("")
    etiqueta.innerHTML="";
    let cont = 0;
    let escribir = setInterval(function(){
      etiqueta.innerHTML += arrayCaracteres [cont]
      cont++;
      if(cont === arrayCaracteres.length){
        clearInterval(escribir)
        resolve();
      }

    },tiempo)/*let escribir */
  });//promesa
  }/*let writing1*/ 

  async function startAnimations(){

 await writing1("Bienvenidxs", 100, writing);
  //await writing1("cargando...",300,loading);
  await writing1("Pulsa",100,pulsa );
  // await writing1("para comenzar", 100, comenzar);
document.getElementById("startButton").style.display = "block";

  }
  startAnimations();

