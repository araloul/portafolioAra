let writing = str => {
    let arrFromStr = str.split("");
    let i = 0;
    let printStr = setInterval(function() {
      document.querySelector('.container').style.display = "block";
      document.querySelector('.container').innerHTML += arrFromStr[i];
      i++;
      if (i === arrFromStr.length) {
        clearInterval(printStr);
      }
    }, 100);
  };

  // Llama a la función para que muestre el contenido de la clase "container"
  writing(document.querySelector('.container').innerText);



// let writing = str =>{
//     let arrFromStr = str.split("");
//     let i = 0;
//     let printStr   = setInterval (function(){
//         document.body.innerHTML+= arrFromStr[i]; i++;
//         if (i === arrFromStr.length){
//             clearInterval(printStr);
//         }
//     },100);
// };

