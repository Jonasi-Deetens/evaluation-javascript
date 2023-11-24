import cocktails from "./cocktails.js";

const generateButtons = () => {
  const cocktailsElement = document.querySelector("#cocktails");

  cocktails.forEach((cocktail) => {
    const button = document.createElement("button");
    button.classList.add("cocktail-button");
    button.textContent = cocktail.name + " - " + cocktail.price;
    button.style.backgroundColor = cocktail.color;
    button.addEventListener("click", () => {
        console.log(cocktail.type === "cocktail" ? "a cocktail" : "not a cocktail" );
    });
    cocktailsElement.appendChild(button);
  });
};

generateButtons();