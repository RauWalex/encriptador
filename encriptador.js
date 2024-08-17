/*  << ¡Reglas de Encriptado!>>
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
//selecciona el objeto donde esta el texto del usuario
function encriptarTexto(){
    let textoOriginal = document.getElementById("textoUsuario").innerText;
    let textoEncriptado="";
    for (let i = 0; i < textoOriginal.length; i++) {
        const caracter = textoOriginal[i];
        if (caracter==="a"){
            textoEncriptado +="ai"
        }else if(caracter==="e"){
            textoEncriptado +="enter"
        }else if (caracter==="i") {
            textoEncriptado+="imes"
        }else if (caracter==="o") {
            textoEncriptado+="ober"
        }else if (caracter==="u") {
            textoEncriptado +="ufat"
        }else{textoEncriptado+=caracter}
    }
    //esto selecciona el elemento respuesta y pone el texto encriptado
    if (textoEncriptado == "Ingrentersai enterl tenterxtober aiqufatimes") {
        console.log("no hay ningun texto aqui");
    }else {
        let respuesta = selecionarId("respuesta");
        ocultarElemento("muneco");
        ocultarElemento("m1");
        ocultarElemento("m2");
        respuesta.innerHTML = textoEncriptado;
        mostrarElemento("respuesta");
        selecionarId("limpiarTexto").style.visibility="visible";
        selecionarId("copy").style.opacity=1;

        
    }
    return textoEncriptado;
}



