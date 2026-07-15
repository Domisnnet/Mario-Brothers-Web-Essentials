const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = "/src/video/mario.mp4";

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