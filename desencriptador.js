/*  << ¡Reglas de Encriptado!>>
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function desencriptarTexto(){
    let textoOriginal = selecionarId("textoUsuario").innerHTML;
    let textoDesencriptado="";
    for (let i = 0; i < textoOriginal.length; i++) {
        let caracter = textoOriginal[i];
        if (caracter==="a"){
            i++;
            caracter = textoOriginal[i];
            if (caracter==="i"){
                textoDesencriptado +="a"
            }
        }else if(caracter==="e"){
            i++;
            caracter=textoOriginal[i];
                if(caracter==="n"){
                    i++;
                    caracter=textoOriginal[i];
                    if(caracter==="t"){
                        i++;
                        caracter=textoOriginal[i];
                        if (caracter==="e"){
                            i++;
                            caracter=textoOriginal[i];
                            if(caracter==="r"){
                                textoDesencriptado+="e";
                        }
                    }   
                }   
                    
            }
        }else if(caracter==="i"){
            i++;
            caracter=textoOriginal[i];
            if(caracter==="m"){
                i++;
                caracter=textoOriginal[i];
                if (caracter==="e"){
                    i++;
                    caracter=textoOriginal[i];
                    if(caracter==="s"){
                        textoDesencriptado +="i"
                    }
                }
            }
        }else if(caracter==="o"){
            i++;
            caracter=textoOriginal[i];
            if (caracter==="b"){
                i++;
                caracter=textoOriginal[i];
                if(caracter==="e"){
                    i++;
                    caracter=textoOriginal[i];
                    if (caracter==="r") {
                        textoDesencriptado +="o"
                    }
                    
                }
            }
        }else if(caracter==="u"){
            i++;
            caracter=textoOriginal[i];
            if(caracter==="f"){
                i++;
                caracter=textoOriginal[i];
                if(caracter==="a"){
                    i++;
                    caracter=textoOriginal[i];
                    if(caracter==="t"){
                        textoDesencriptado +="u";
                    }
                }
            }
        }else{
            textoDesencriptado+=caracter;
        }       
    }
    if(selecionarId("textoUsuario").innerHTML==="Ingresa el texto aqui"){
        console.log("no hay nada aqui")
    }else{

        selecionarId("respuesta").innerText=textoDesencriptado;
        ocultarElemento("muneco");
        ocultarElemento("m1");
        ocultarElemento("m2");
        mostrarElemento("respuesta");
        selecionarId("limpiarTexto").style.visibility="visible";
        


    }

    
 return textoDesencriptado;
}
    


        
    
    /*
    //selecionarId("respuesta").innerText = textoDesencriptado;
        ocultarElemento("muneco");
        ocultarElemento("m1");
        ocultarElemento("m2");
        selecionarId("respuesta").innerText = textoDesencriptado;
        mostrarElemento("respuesta")
        mostrarElemento("limpiarTexto");
        selecionarId("copy").style.opacity=1;
        return textoDesencriptado;
*/
    
    


    