const texto = document.querySelector("p");
function maquinaDeEscrever(texto) {
  const txtArray = texto.innerText.split("");
  texto.innerHTML = "";
  txtArray.forEach((letra, index) => {
    setTimeout(() => (texto.innerHTML += letra), 100 * index);
  });
}
maquinaDeEscrever(texto);
