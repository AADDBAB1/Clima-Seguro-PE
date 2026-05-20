function mostrar(secao){

  let sections = document.querySelectorAll("section");

  sections.forEach(function(sec){
    sec.classList.remove("active");
  });

  document.getElementById(secao).classList.add("active");
}

function ativarSOS(){

  const mensagem = document.getElementById("mensagemSOS");

  mensagem.innerHTML =
  "🚨 Localização compartilhada com a Defesa Civil e contatos de emergência.";

  alert("SOS acionado com sucesso!");
}