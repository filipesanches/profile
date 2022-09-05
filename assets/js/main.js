const texto = document.querySelector("p");
function maquinaDeEscrever(texto) {
  const txtArray = texto.innerText.split("");
  texto.innerHTML = "";
  txtArray.forEach((letra, index) => {
    setTimeout(() => (texto.innerHTML += letra), 100 * index);
  });
}
maquinaDeEscrever(texto);


function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll("section");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}