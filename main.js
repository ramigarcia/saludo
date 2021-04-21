const input = document.querySelector("#name-input");
const button = document.querySelector("#saludar-btn");

button.addEventListener("click", () => {
  // Creamos un h1 para despues saludar
  const name = document.createElement("h1");
  name.innerHTML = `Bienvenido a Cypress, ${input.value}`;
  document.body.appendChild(name);
});
