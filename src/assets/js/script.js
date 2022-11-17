// const idadeText = document.getElementById("idade");
// data = new Date();
// idadeText.innerHTML = data.getFullYear() - 1986;

const efeitoDigitacao = document.querySelector(".efeito-digitacao");
digitar();

function digitar() {
  const fraseInicial = efeitoDigitacao.innerText;
  let fraseDigitando = "";
  let indexParaCopiar = 0;
  efeitoDigitacao.innerText = "";
  const timer = setInterval(() => {
    efeitoDigitacao.textContent = fraseDigitando;
    if (fraseDigitando.length < fraseInicial.length) {
      fraseDigitando = fraseInicial.slice(0, indexParaCopiar++);
    } else {
      clearInterval(timer);
    }
  }, 200);
  console.log("frase inicial", fraseInicial);
  console.log("frase digitando", fraseDigitando);
}

const sections = document.querySelectorAll("section");

const projetos = document.querySelectorAll("#projetos article");
const topoDaPagina = document.getElementById("topo-da-pagina");
const menuTopo = document.querySelector("nav.menu-topo");

document.addEventListener("scroll", () => {
  alterarMenu();
});

sections.forEach((section) => {
  section.style.paddingTop = topoDaPagina.clientHeight + "px";
});

projetos.forEach((projeto) => {
  projeto.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(`/src/projetos/${projeto.id}/`, "_blank");
  });
});

function alterarMenu() {
  if (
    sections[0].getBoundingClientRect().top +
      sections[0].getBoundingClientRect().height <
    1
  ) {
    menuTopo.classList.add("menuEscuro");
  } else {
    menuTopo.classList.remove("menuEscuro");
  }
}
