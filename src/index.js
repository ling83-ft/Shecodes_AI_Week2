function generateCookBook(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "Test recipe",
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

let cookFormElement = document.querySelector("#cook-book-generator");
cookFormElement.addEventListener("submit", generateCookBook);
