{
    const welcome = () => {
        console.log("Hi Hi Hello!");
    }

    let onChangeBackgroundClick = () => {
        body.classList.toggle("dark");

        button.innerText =
            body.classList.contains("dark")
                ? "Jasny motyw"
                : "Ciemny motyw";
    }

    welcome();

    let button = document.querySelector(".button");
    let body = document.querySelector(".body");

    button.addEventListener("click", onChangeBackgroundClick);
}