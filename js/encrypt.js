var encriptarButton = document.querySelector("#Encriptar");

encriptarButton.addEventListener("click", function(event){
  let outputMessage = document.querySelector("#output-message");
  let inputMessage = document.querySelector("#input-message");

  // event.preventDefault();
  var messageE = encriptarMensaje(inputMessage.value);

  outputMessage.textContent = messageE;
  inputMessage.value ="";
});
function encriptarMensaje(text){
  var newMessage = "";
  for(var i = 0; i < text.length; i++){
    if (text[i] !== "a" && text[i] !== "e" && text[i] !== "i"
    && text[i] !== "o" && text[i] !== "u"){
      newMessage = newMessage + text[i];
    }
    if(text[i] === "a"){
      newMessage = newMessage + "ai";
    }
    if(text[i] === "e"){
      newMessage = newMessage + "enter";
    }
    if(text[i] === "i"){
      newMessage = newMessage + "imes";
    }
    if(text[i] === "o"){
      newMessage = newMessage + "ober";
    }
    if(text[i] === "u"){
      newMessage = newMessage + "ufat";
    }
  }
  return newMessage;
}

function soloLetrasMinuscuelas(text){
  key = text.keyCode || text.which;
  tecla = String.fromCharCode(key).toString();
  letras = "abcdefghijklmnñopqrstvuywxz "

  especiales = [8, 13];
  tecla_especial = false;
  for(var i in especiales){
    if(key == especiales[i]){
      tecla_especial = true;
      break;
    }
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial){
    alert("Solo se permiten letras minúsculas y espacios!");
    return false;
  }
}
