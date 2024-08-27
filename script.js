// Variáveis
const titulo = document.querySelector("h1");

// Booleans
if (titulo.textContent === "Usando JavaScript") {
  console.log("Verificado.");
} else {
  console.log("Cancelado.");
}

// Funções Anônimas
const mudarTitulo = function () {
  titulo.addEventListener("click", () => {
    if (titulo.textContent === "Usando JavaScript") {
      titulo.innerText = "Mudou o titulo";
    } else {
      titulo.innerText = "Usando JavaScript";
    }
  });
};
mudarTitulo();

// Método
const objeto = {
  mostrarTitulo() {
    console.log(titulo.innerText);
  },
};
objeto.mostrarTitulo();

// High Order Function  ( Map, filter, reduce, sort, forEach )
const li = document.querySelectorAll("li");
li.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Clicou");
  });
});
const liArray = Array.from(li);
liArray.filter((item) => {
  if (item.innerText === "Item1" || item.innerText === "Item2") {
    console.log(item);
  }
});
liArray.map((item) => {
  item.classList.add("item");
});
console.log(liArray);
// Window
titulo.addEventListener("click", () => {
  window.navigator.clipboard.writeText(titulo.innerText);
});
