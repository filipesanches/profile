const texto = document.querySelector("p");
function maquinaDeEscrever(texto) {
  const txtArray = texto.innerText.split("");
  texto.innerHTML = "";
  txtArray.forEach((letra, index) => {
    setTimeout(() => (texto.innerHTML += letra), 100 * index);
  });
}
maquinaDeEscrever(texto);


function openTab(evt, idName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll("section");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.background = '#ccc';
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(idName).style.display = "block";
  evt.currentTarget.className += " active";
  if(idName == 'home'){
    document.querySelector(`#${idName} div`).style.background = '#8ea6bd';
    document.querySelector(`.active`).style.background = '#6589aa';
  }
  if(idName == 'skill'){
    document.querySelector(`#${idName} div`).style.background = '#65aa76';
    document.querySelector(`.active`).style.background = 'green';
  }
  if(idName == 'projects'){
    document.querySelector(`#${idName} div`).style.background = '#6665aa';
    document.querySelector(`.active`).style.background = '#27273d';
  }
}