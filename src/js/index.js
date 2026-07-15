import linkDoVideo from '@video/mario.mp4';
import '@css/reset.css';
import '@css/estilos.css';
import '@css/responsivo.css';

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

function alternarModal() {
  modal.classList.toggle("aberto");
}
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