//Anima Background
const conteudo = document.querySelector('.conteudo-anima')
function AnimaBg(tag){
  for(let i = 0; i <= 50; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block')
    tag.appendChild(blocks)
  }
}
AnimaBg(conteudo)
function animateBlocks(){
  anime({
  targets: '.block',
  translateX: () => anime.random(-700,700),
  translateY: () => anime.random(-700,700),
  scale: () => anime.random(1,5),

  easing: 'linear',
  duration: 4000
});
}
animateBlocks()

//Efeito Maquina de Escrver
const texto = document.querySelector("p");
function maquinaDeEscrever(texto) {
  const txtArray = texto.innerText.split("");
  texto.innerHTML = "";
  txtArray.forEach((letra, index) => {
    setTimeout(() => (texto.innerHTML += letra), 100 * index);
  });
}
maquinaDeEscrever(texto);

//Paj=gination
function openTab(evt, idName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll("section");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(idName).style.display = "block";
  evt.currentTarget.className += " active";
  // if(idName == 'home'){
  //   document.querySelector(`#${idName} div`).style.background = '#8ea6bd';
  //   document.querySelector(`.active`).style.background = '#6589aa';
  // }
  // if(idName == 'skill'){
  //   document.querySelector(`#${idName} div`).style.background = '#65aa76';
  //   document.querySelector(`.active`).style.background = 'green';
  // }
  // if(idName == 'projects'){
  //   document.querySelector(`#${idName} div`).style.background = '#6665aa';
  //   document.querySelector(`.active`).style.background = '#27273d';
  // }
}