const input = document.querySelector("#name-input");
const button = document.querySelector("#saludar-btn");

button.addEventListener("click", () => {
  // Creamos un h1 para despues saludar
  const name = document.createElement("h1");
  name.innerHTML = `Bienvenido a Cypress, ${input.value}`;
  name.classList.add("box");
  name.id = "greeting";
  document.body.appendChild(name);

  setTimeout(() => {
    input.value = "";
    const padre = name.parentNode;
    padre.removeChild(name);
  }, 5000);
});
