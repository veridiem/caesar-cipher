//((codigoDaLetraASC - cod1aletra + desloc) % tamdoAlfabeto) + cod1aletra
// _______ - 65 + <esse aqui vc insere> % 26 + 65
// criptografar: + deslocamento e pra descriptografar: - deslocamento


function codificar(){
    var deslocamento = parseInt(document.getElementById("chave1").value);
    var mensagemEnviada = document.getElementById("string").value;

    let result;
    let mensagemCodificada;
    for(let i = 0; i < mensagemEnviada.length; i++) {

        if(mensagemEnviada[i].charCodeAt() >= 65 && mensagemEnviada[i].charCodeAt() <= 90){
            mensagemCodificada = ((mensagemEnviada[i].charCodeAt() - 65 + deslocamento) % 26) + 65;
            result += String.fromCharCode(mensagemCodificada); 
        }

        else if(mensagemEnviada[i].charCodeAt() >= 97 && mensagemEnviada[i].charCodeAt() <= 122){
            mensagemCodificada = ((mensagemEnviada[i].charCodeAt() - 97 + deslocamento) % 26) + 97;
            result += String.fromCharCode(mensagemCodificada); 
        }
    }
        
    document.getElementById("codificada").value = result;
}    

  

function decodificar(){
    var deslocamento2 = parseInt(document.getElementById("chave2").value);
    var mensagemEnviada2 = document.getElementById("string2").value;

    let result2;
    let mensagemDecodificada;
    for(let i = 0; i < mensagemEnviada2.length; i++) {

        if(mensagemEnviada2[i].charCodeAt() >= 65 && mensagemEnviada2[i].charCodeAt() <= 90){
            mensagemDecodificada = ((mensagemEnviada2[i].charCodeAt() - 65 + deslocamento2) % 26) + 65;
            result2 += String.fromCharCode(mensagemDecodificada); 
        }

        else if(mensagemEnviada2[i].charCodeAt() >= 97 && mensagemEnviada2[i].charCodeAt() <= 122){
            mensagemDecodificada = ((mensagemEnviada2[i].charCodeAt() - 97 + deslocamento2) % 26) + 97;
            result2 += String.fromCharCode(mensagemDecodificada); 
        }
    }
        
    document.getElementById("decodificada").value = result2;
}
  



