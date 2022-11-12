'use strict'
//Punto 1
let title = document.querySelector('title').textContent;
console.log(title);

let Elem = document.querySelectorAll('dd');
let integrante1 = ``
let integrante2 = ``

// Elem[0] Primer Nombre Integrante 1
// Elem[1] Segundo Nombre Integrante 1
// Elem[2] Primer Apellido Integrante 1
// Elem[3] Segundo Apellido Integrante 1
// Elem[4] Primer Nombre Integrante 2
// Elem[5] Segundo Nombre Integrante 2
// Elem[6] Primer Apellido Integrante 2
// Elem[7] Segundo Apellido Integrante 2

//Punto 3
if ((Elem[1].innerHTML != '')) {
    integrante1 = `Integrante 1: "${Elem[0].innerHTML} ${Elem[1].innerHTML} ${Elem[2].innerHTML.toLocaleUpperCase()} ${Elem[3].innerHTML.toLocaleUpperCase()}"`
    if (Elem[3].innerHTML != '') {
        integrante1 = `Integrante 1: "${Elem[0].innerHTML} ${Elem[1].innerHTML} ${Elem[2].innerHTML.toLocaleUpperCase()} ${Elem[3].innerHTML.toLocaleUpperCase()}"`
    } else {
        integrante1 = `Integrante 1: "${Elem[0].innerHTML} ${Elem[1].innerHTML} ${Elem[2].innerHTML.toLocaleUpperCase()}"`
    }
} else {
    integrante1 = `Integrante 1: "${Elem[0].innerHTML} ${Elem[2].innerHTML.toLocaleUpperCase()} ${Elem[3].innerHTML.toLocaleUpperCase()}"`
    if (Elem[3].innerHTML != '') {
        integrante1 = `Integrante 1: "${Elem[0].innerHTML} ${Elem[2].innerHTML.toLocaleUpperCase()} ${Elem[3].innerHTML.toLocaleUpperCase()}"`
    } else {
        integrante1 = `Integrante 1: "${Elem[0].innerHTML} ${Elem[2].innerHTML.toLocaleUpperCase()}"`
    }
}

if (Elem[5].innerHTML != '') {
    integrante2 = `Integrante 2: "${Elem[4].innerHTML} ${Elem[5].innerHTML} ${Elem[6].innerHTML.toLocaleUpperCase()} ${Elem[7].innerHTML.toLocaleUpperCase()}"`
    if (Elem[7].innerHTML != '') {
        integrante2 = `Integrante 2: "${Elem[4].innerHTML} ${Elem[5].innerHTML} ${Elem[6].innerHTML.toLocaleUpperCase()} ${Elem[7].innerHTML.toLocaleUpperCase()}"`
    } else {
        integrante2 = `Integrante 2: "${Elem[4].innerHTML} ${Elem[5].innerHTML} ${Elem[6].innerHTML.toLocaleUpperCase()}"`
    }
} else {
    integrante2 = `Integrante 2: "${Elem[4].innerHTML} ${Elem[6].innerHTML.toLocaleUpperCase()} ${Elem[7].innerHTML.toLocaleUpperCase()}"`
    if (Elem[7].innerHTML != '') {
        integrante2 = `Integrante 2: "${Elem[4].innerHTML} ${Elem[6].innerHTML.toLocaleUpperCase()} ${Elem[7].innerHTML.toLocaleUpperCase()}"`
    } else {
        integrante2 = `Integrante 2: "${Elem[4].innerHTML} ${Elem[6].innerHTML.toLocaleUpperCase()}"`
    }
}

console.log(`'-----'\n${integrante1}\n${integrante2}\n'-----''`);

//Función para cambiar de color (Punto 4)
function cambiarColor (param1,param2) {
    let colorPrompt = prompt("Escribe un color en inglés para remarcar las coincidencias. Ej: red, blue");
    param1.style.color=`${colorPrompt}`
    param2.style.color=`${colorPrompt}`
};

// Punto 4
    if (Elem[0].innerHTML == Elem[4].innerHTML) {
        console.log(`Se encontraron coincidencias en el nombre: ${Elem[0].innerHTML}`);
        cambiarColor(Elem[0],Elem[4]);
    } else if (Elem[0].innerHTML == Elem[5].innerHTML) {
        console.log(`Se encontraron coincidencias en el nombre: ${Elem[0].innerHTML} `),
        cambiarColor(Elem[0],Elem[5]);
    } else if (Elem[1].innerHTML == Elem[4].innerHTML) {
        console.log(`Se encontraron coincidencias en el nombre: ${Elem[1].innerHTML} `);
        cambiarColor(Elem[1],Elem[4]);
    } else if ((Elem[1].innerHTML != "" && Elem[5].innerHTML != "") && (Elem[1].innerHTML == Elem[5].innerHTML)) {
        console.log(`Se encontraron coincidencias en el nombre: ${Elem[1].innerHTML} `);
        cambiarColor(Elem[1],Elem[5]);
    } else {
        console.log("No se encontraron coincidencias en los nombres de los integrantes.");
        let coincidenciaApellidos = window.confirm("¿Desea comparar si hay coincidencias entre los apellidos de los integrantes?")
        if(coincidenciaApellidos == true){
            if (Elem[2].innerHTML == Elem[6].innerHTML) {
                console.log(`Se encontraron coincidencias en el apellido: ${Elem[2].innerHTML}`);
                cambiarColor(Elem[2],Elem[6]);
            } else if (Elem[2].innerHTML == Elem[7].innerHTML) {
                console.log(`Se encontraron coincidencias en el apellido: ${Elem[2].innerHTML}`),
                cambiarColor(Elem[2],Elem[7]);
            } else if (Elem[3].innerHTML == Elem[6].innerHTML && Elem[3].innerHTML != "") {
                console.log(`Se encontraron coincidencias en el apellido: ${Elem[3].innerHTML}`);
                cambiarColor(Elem[3],Elem[6]);
            } else if (Elem[3].innerHTML == Elem[7].innerHTML && Elem[3].innerHTML != "") {
                console.log(`Se encontraron coincidencias en el apellido: ${Elem[3].innerHTML}`);
                cambiarColor(Elem[3],Elem[7]);
            } else{
                console.log("No hay coincidencias entre los apellidos de los integrantes.");
            }
        }
    }

