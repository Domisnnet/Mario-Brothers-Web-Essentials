import linkDoVideo from '@video/mario.mp4';
import logoMario from '@imagens/logo-chapeu-mario.png';
import tituloImg from '@imagens/titulo.png';
import marioChars from '@imagens/super-mario-chars.png';
import favicon from '@imagens/favicon.ico';
import '@css/reset.css';
import '@css/estilos.css';
import '@css/responsivo.css';

document.querySelector('.logo').src = logoMario;
document.querySelector('.imagem-titulo').src = tituloImg;
document.querySelector('.mario').src = marioChars;
document.querySelector('link[rel="icon"]').href = favicon;
const fundoVideo = document.querySelector('.video');
const source = document.createElement('source');
source.src = linkDoVideo;
source.type = 'video/mp4';
fundoVideo.appendChild(source);
const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
function alternarModal() { modal.classList.toggle('aberto'); }
botaoTrailer.addEventListener('click', () => {
  alternarModal();
  video.setAttribute('src', linkDoVideo);
  video.play();
});
botaoFecharModal.addEventListener('click', () => {
  alternarModal();
  video.pause();
  video.setAttribute('src', '');
});