// Música e mensagem
let mensagem = document.getElementById("mensagem");
let musica = document.getElementById("musica");

// Função para abrir a carta
function abrirCarta(){
  // Mostrar mensagem
  mensagem.style.display = "block";
  mensagem.style.animation = "subirMensagem 2s forwards";

  // Tocar música (alguns navegadores exigem clique)
  musica.play();
}

// Função para criar fogos
function criarFogos(num) {
  for(let i=0; i<num; i++){
    let fogo = document.createElement("div");
    fogo.className = "fogo";
    fogo.style.left = Math.random()*80 + "%";
    fogo.style.color = ["red","yellow","blue","orange","pink","cyan"][Math.floor(Math.random()*6)];
    fogo.innerText = "🎆";
    document.body.appendChild(fogo);
    fogo.style.display = "block";

    setTimeout(()=>{
      fogo.remove();
    },1000);
  }
}

// Função que repete os fogos a cada 500ms
function fogosContinuos() {
  criarFogos(5); // cria 5 fogos por vez
  setTimeout(fogosContinuos, 500); // repete a cada 0.5s
}

// Quando a página carrega, inicia os fogos automáticos
window.onload = function() {
  fogosContinuos();
};