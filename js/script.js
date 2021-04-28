console.log("liczymy hajsy :]");

let form = document.querySelector(".js-form");
let pln = document.querySelector(".js-pln");
let ratio = document.querySelector(".js-ratio");
let result = document.querySelector(".js-result");
let reset = document.querySelector(".js-reset");

let gain;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    gain = pln.value / ratio.value;

    result.innerText = "Otrzymujesz: " + gain.toFixed(2) + "EUR";
});

form.addEventListener("reset", () => {
    result.innerText = "Dziękujemy! Zapraszamy ponownie :)";
})

form.addEventListener("input", () => {
    result.innerText = "Wprowadź kwotę i wciśnij \"Przelicz\"";
})


