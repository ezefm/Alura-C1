var copyButton = document.querySelector("#Copiar");
var outputMessage = document.querySelector("#output-message");

copyButton.addEventListener("click", function(event){
  outputMessage.select();
  document.execCommand("copy");
});
