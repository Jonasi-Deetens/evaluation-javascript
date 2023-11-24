import cocktails from "./cocktails.js";

const generateTeaInstructions = (element) => {
  const steps = [
    "Put the kettle on",
    "Get a teaspoon of tea in your cup",
    "Pour the water and wait for a couple of minutes",
    "Enjoy the perfect tea!",
  ];
  const ulInstructions = document.createElement("ul");

  steps.forEach(step => {
    const listItem = document.createElement("li");
    listItem.textContent = step;
    ulInstructions.appendChild(listItem);
  });

  element.appendChild(ulInstructions);
};

const generateSoftdrinkInstructions = (element) => {
  const pInstructions = document.createElement("p");
  pInstructions.textContent = "Just pour the drink, and you're ready to go!";
  element.appendChild(pInstructions);
};

const getPreparationInfo = (cocktail) => {
  const mainElement = document.querySelector("#cocktail-info");
  mainElement.innerHTML = "";
  switch (cocktail.type) {
    case "softdrink":
      generateSoftdrinkInstructions(mainElement);
      break;
    case "tea":
      generateTeaInstructions(mainElement);
      break;
    case "cocktail":
      generateCocktailInstructions(mainElement);
      break;
  }
};

const generateButtons = () => {
  const cocktailsElement = document.querySelector("#cocktails");

  cocktails.forEach((cocktail) => {
    const button = document.createElement("button");
    button.classList.add("cocktail-button");
    button.textContent = cocktail.name + " - " + cocktail.price;
    button.style.backgroundColor = cocktail.color;
    button.addEventListener("click", () => {
      console.log(cocktail.type === "cocktail" ? "a cocktail" : "not a cocktail");
      getPreparationInfo(cocktail);
    });
    cocktailsElement.appendChild(button);
  });
};

generateButtons();
