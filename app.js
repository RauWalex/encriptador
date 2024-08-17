let elementoTexto = document.getElementById("textoUsuario");
selecionarId("limpiarTexto").style.visibility="hidden";
// fucion para eliminar el texto despues de que la tag p "texto" tenga el foco
function eliminarTexto() {

    if (elementoTexto.textContent.trim() ==="Ingresa el texto aqui") {
        elementoTexto.setAttribute("style","color:white");
        return elementoTexto.innerHTML = "";
    }
}
// fucion para regresar el texto despues de que la tag p "texto" pierda el foco
function regresarTexto(){

    if(elementoTexto.textContent.trim() === ""){
        return document.getElementById("textoUsuario").innerText="Ingresa el texto aqui";
    } 
}
//esta funcion borra el contenido en elemento respuesta y el texto del usuario ¿
function restaurar(){
    mostrarElemento("muneco");
    mostrarElemento("m1");
    mostrarElemento("m2");
    selecionarId("respuesta").innerHTML="";
    ocultarElemento("respuesta");
    selecionarId("limpiarTexto").style.visibility="hidden";
    selecionarId("textoUsuario").innerHTML="Ingresa el texto aqui";
    
}
//funcion que selecciona un elemento del DOM
function selecionarId(elemento){
    return document.getElementById(elemento);
}
//funcion que muestra un elemento
function mostrarElemento(elemento){
    return document.getElementById(elemento).hidden=false;
}
//funcion que oculta un elemento
function ocultarElemento(elemento){

    return document.getElementById(elemento).hidden=true;
}
//funcion que cambia el texto de cuadro de dialogo
function cambiarTexto(){
    if(selecionarId("textoUsuario").innerHTML==="Ingresa el texto aqui"){

    }
    if(selecionarId("respuesta").innerHTML===""){
    } else{
        let cambioRespuesta=document.getElementById("respuesta").innerHTML;
        let cambioTexto=document.getElementById("textoUsuario").innerHTML;
        selecionarId("respuesta").innerHTML=cambioTexto;
        selecionarId("textoUsuario").innerHTML=cambioRespuesta;
        selecionarId("copy").style.opacity=1;
    }

}
//funcio que copia el texto 
function copiarRespuesta(){
    if(selecionarId("respuesta").innerHTML===""){

    }if(selecionarId("textoUsuario").innerHTML==="Ingresa el texto aqui"){

    }else{
        let texto=document.getElementById("respuesta");
        navigator.clipboard.writeText(texto.textContent);
        selecionarId("copy").style.opacity = 0.5;
    }
    
}
