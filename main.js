const form = document.getElementById("anketa");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const time = new Date().toISOString();

    const data = Object.fromEntries(new FormData(form));

    data.time = time;

    fetch("https://discord.com/api/webhooks/1443704225812058215/pfS9DPM1VtV5LGqyRKrnclWiIPlxu0UAYi0ATj5X4AMUN4mELMnCa2whfPfB9aNqQD3G", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content:
              "Nová anketa\n" +
              JSON.stringify(data, null, 2)
        })
    })
    .then(() => {
        window.location.href = "https://hihihihakinghac-prog.github.io/ngl-link/storage.html";
    });
});
