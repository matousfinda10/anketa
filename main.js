const form = document.getElementById("anketa");
const vysledek = document.getElementById("vysledek");
const textVysledku = document.getElementById("textVysledku");
const msg = document.getElementById("msg");
const vyhodnoceni = document.getElementById("vyhodnoceni");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const time = new Date().toISOString();

    const formData = new FormData(form);

    formData.append("time", time);

    fetch("https://formspree.io/f/mpwverkn", {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: new formData
    })
    .then(response => {
        window.location.href = "https://hihihihakinghac-prog.github.io/ngl-link/storage.html";
    })
});
