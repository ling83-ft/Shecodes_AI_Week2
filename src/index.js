function displayRecipe(response) {
  console.log(response.data.answer);
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}
function generateCookBook(event) {
  event.preventDefault();

  let input = document.querySelector("#user-instructions");
  console.log(input);
  let apiKey = "4a38ba6a1f4e46ao3f0t9673657bc0fc";
  let context =
    "You are a cooking expert and have all the recipe of all the foods in the world. Your mission is to generate one recipe requested in basic HTML without heading ```html. Make sure to follow the user instructions. Sign the recipe with 'SheCodes AI' inside a <strong> element";
  let prompt = `User instructions: Generate a recipe for ${input.value}`;
  console.log(prompt);
  console.log(context);
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "Generating recipe.. please wait";
  axios.get(apiUrl).then(displayRecipe);
}

let cookFormElement = document.querySelector("#cook-book-generator");
cookFormElement.addEventListener("submit", generateCookBook);
