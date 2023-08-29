let soy = document.getElementsByClassName("soy")[0];
let desarrolladora = document.getElementsByClassName("desarrolladora")[0];
let estudie = document.getElementsByClassName("estudie")[0];

let soy1 = (text = "", tiempo = 1700, className = "") => {
    return new Promise(resolve => {
        let arrayCaracteres = text.split("");
        className.innerHTML = "";
        let cont = 0;
        let escribir = setInterval(function () {
            className.innerHTML += arrayCaracteres[cont];
            cont++;
            if (cont === arrayCaracteres.length) {
                clearInterval(escribir);
                resolve();
            }
        }, tiempo);
    });
}

async function startAnimations() {
    await soy1("Soy Aranza Quijano P.", 100, soy);
    await soy1("DESARROLLADORA FRONTEND", 100, desarrolladora);
    
   document.getElementsByClassName("estudie")[0].style.display = "block";
   let estudie = document.getElementsByClassName("estudie")[0];
   
   setTimeout(function () {
    estudie.style.display = "block";
}, 5000);
    

}
startAnimations();
