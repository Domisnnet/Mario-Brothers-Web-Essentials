let botaoTrailer = document.querySelector(".botao-trailer");
let botaoFecharModal = document.querySelector(".fechar-modal");
let video = document.getElementById("video");
let modal = document.querySelector(".modal");
let linkDoVideo = "https://www.youtube.com/watch?v=Cb4WV4aXBpk";

function alternarModal(){ modal.classList.toggle("aberto"); }
botaoTrailer.addEventListener("click", () => { alternarModal(); video.setAttribute("src",linkDoVideo); });
botaoFecharModal.addEventListener("click", () => { alternarModal(); video.setAttribute("src",""); });