var desencriptarButton = document.querySelector("#Desencriptar");

desencriptarButton.addEventListener("click", function(event){
  let outputMessage = document.querySelector("#output-message");
  let inputMessage = document.querySelector("#input-message");
  // event.preventDefault();
  var messageD = desencriptarMensaje(inputMessage.value);
  outputMessage.textContent = messageD;
  // inputMessage.value ="";
  console.log(messageD);
});

function desencriptarMensaje(text){

  var newMessage = "";
  newMessage = text.replaceAll("ai", "a").replaceAll
  ("imes", "i").replaceAll("enter", "e").replaceAll("ober", "o").replaceAll
  ("ufat", "u");

  return newMessage;
}
