function getEncode(){
    var firstOffset = parseInt(document.getElementById("chave1").value);
    var sentMessage = document.getElementById("string").value;
    var messageCode = encode(firstOffset, sentMessage);
    document.getElementById("codificada").value = messageCode; 
}

function encode(offset, sendMessage){
    
    let result = "";
    let codedMessage;
    for(let i = 0; i < sendMessage.length; i++) {

        if(sendMessage[i].charCodeAt() == 32){
            codedMessage = sendMessage[i].charCodeAt();
            result += String.fromCharCode(codedMessage);
        }

        if(sendMessage[i].charCodeAt() >= 48 && sendMessage[i].charCodeAt() <= 57){
            codedMessage = sendMessage[i].charCodeAt();
            result += String.fromCharCode(codedMessage);
        }

        else{

            if(sendMessage[i].charCodeAt() >= 65 && sendMessage[i].charCodeAt() <= 90){
                codedMessage = ((sendMessage[i].charCodeAt() - 65 + (offset % 26) + 26) % 26) + 65;
                result += String.fromCharCode(codedMessage); 
            }
    
            else if(sendMessage[i].charCodeAt() >= 97 && sendMessage[i].charCodeAt() <= 122){
                codedMessage = ((sendMessage[i].charCodeAt() - 97 + (offset % 26) +26) % 26) + 97;
                result += String.fromCharCode(codedMessage); 
            }
        }
        
    }
       return result;
}    

function getDecode(){
    var secondOffset = parseInt(document.getElementById("chave2").value);
    var sentMessage2 = document.getElementById("string2").value;
    var messageDecode = decode(secondOffset, sentMessage2);
    document.getElementById("decodificada").value = messageDecode; 
} 

function decode(offset2, sendMessage2){
    
    let result2 = "";
    let decodedMessage;
    for(let i = 0; i < sendMessage2.length; i++) {

        if(sendMessage2[i].charCodeAt() == 32){
            decodedMessage = sendMessage2[i].charCodeAt();
            result2 += String.fromCharCode(decodedMessage);
        }

        if(sendMessage2[i].charCodeAt() >= 48 && sendMessage2[i].charCodeAt() <= 57){
            decodedMessage = sendMessage2[i].charCodeAt();
            result2 += String.fromCharCode(decodedMessage);
        }

        else{
            if(sendMessage2[i].charCodeAt() >= 65 && sendMessage2[i].charCodeAt() <= 90){
                decodedMessage = ((sendMessage2[i].charCodeAt() - 65 - (offset2 %26) + 26) % 26) + 65;
                result2 += String.fromCharCode(decodedMessage); 
            }

            else if(sendMessage2[i].charCodeAt() >= 97 && sendMessage2[i].charCodeAt() <= 122){
                decodedMessage = ((sendMessage2[i].charCodeAt() - 97 - (offset2 %26) +26) % 26) + 97;
                result2 += String.fromCharCode(decodedMessage); 
            }
        }    
    }
    return result2;
}
  



