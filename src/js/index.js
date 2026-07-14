let botaoTrailer = document.querySelector(".botao-trailer");
let botaoFecharModal = document.querySelector(".fechar-modal");
let video = document.getElementById("video");
let modal = document.querySelector(".modal");
const linkDoVideo = "/src/vídeo/mario.mp4";

function alternarModal(){ modal.classList.toggle("aberto"); }
botaoTrailer.addEventListener("click", () => { 
  alternarModal(); 
  video.setAttribute("src", linkDoVideo); 
  video.play();
});
botaoFecharModal.addEventListener("click", () => { 
  alternarModal(); 
  video.pause();
  video.setAttribute("src", ""); 
});