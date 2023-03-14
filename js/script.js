console.log("Hi Hi Hello!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    button.innerText =
        body.classList.contains("dark")
            ? "Jasny motyw"
            : "Ciemny motyw";
});
