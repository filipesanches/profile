const texto = document.querySelector("p");
const texto1 = document.querySelector("div:nth-child(2) span");


function maquinaDeEscrever(texto) {
  const txtArray = texto.innerText.split("");
  texto.innerHTML = "";
  txtArray.forEach((letra, index) => {
    setTimeout(() => (texto.innerHTML += letra), 100 * index);
  });
}
maquinaDeEscrever(texto);
maquinaDeEscrever(texto1);
