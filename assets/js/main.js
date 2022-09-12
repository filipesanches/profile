// //Anima Background
// const conteudo = document.querySelector(".conteudo-anima");
// function AnimaBg(tag) {
//   for (let i = 0; i <= 50; i++) {
//     const blocks = document.createElement("div");
//     blocks.classList.add("block");
//     tag.appendChild(blocks);
//   }
// }
// AnimaBg(conteudo);
// function animateBlocks() {
//   anime({
//     targets: ".block",
//     translateX: () => anime.random(-700, 700),
//     translateY: () => anime.random(-700, 700),
//     scale: () => anime.random(1, 5),

//     easing: "linear",
//     duration: 4000,
//     //delay: anime.stagger(1000)
//   });
// }
// animateBlocks();
// setInterval(animateBlocks, 7000);

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

//Pagination
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
const dataContent = document.querySelector('[data-content="content-skill"]');
const button = document.querySelectorAll(".tab");

function createBars(classe, percent){
  const strong = document.createElement('strong')
  strong.innerHTML = classe.toString().toUpperCase()
  const div = document.createElement('div')
  div.classList.add('tab-skill')
  const div1 = document.createElement('div')
  div1.classList.add('tab-skill-percent',classe)
  div1.innerText = percent
  div.appendChild(div1)
  dataContent.appendChild(div)
  div.before(strong)
}
createBars('html','95%')
createBars('css','90%')
createBars('sass','75%')
createBars('javascript','88%')


const tabSkills = document.querySelectorAll(".tab-skill-percent");



button[1].addEventListener("click", () => {
  for (const i of tabSkills) {
    i.style.width = 0;
    animaSkill(i, i.innerText);
  }
});
function animaSkill(classe, percent) {
  anime({
    targets: classe,
    width: percent, // -> from '28px' to '100%',
    easing: "easeOutCubic",
    innerHTML: [0, percent],
    round: 1,
    duration: 3700,
  });
}
