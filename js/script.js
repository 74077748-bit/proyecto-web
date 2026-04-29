document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio cargando correctamente");

    const btnTop = document.getElementById("btnTop");
    if (btnTop) {
        window.addEventListener("scroll", () => {
            btnTop.style.display = window.scrollY > 200 ? "block" : "none";
        });
        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Agregar un borde rojo a todo el contenido
    document.body.style.border = "5px solid red";

 // Hora al hacer clic - No funciona en botones, enlaces, inputs, textareas ni selects
document.body.addEventListener("clik", (e) => {
    const elementosIgnorar = e.target.closest("button, a, input, textarea, select, label");
    
    if (!elementosIgnorar) {
        alert("🕐 " + new Date().toLocaleTimeString());
    }
});

// Cronómetro simple
let s = 0;
const reloj = document.createElement("div");
reloj.style.cssText = "position:fixed; top:10px; left:10px; background:red; color:white; padding:5px;";
reloj.textContent = "0s";
document.body.appendChild(reloj);

setInterval(() => {
    s++;
    reloj.textContent = s + "s";
}, 1000);

});