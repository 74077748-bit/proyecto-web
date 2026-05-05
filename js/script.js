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

    // borde
    document.body.style.border = "5px solid red";

 // hora
document.body.addEventListener("click", (e) => {
    const elementosIgnorar = e.target.closest("button, a, input, textarea, select, label");
    
    if (!elementosIgnorar) {
        alert("🕐 " + new Date());
    }
});

// cronómetro 
let s = 0;
const reloj = document.createElement("div");
reloj.style.cssText = "position:fixed; top:10px; left:10px; background:blue; color:white; padding:10px;";
reloj.textContent = "0s";
document.body.appendChild(reloj);

setInterval(() => {
    s++;
    reloj.textContent = s + "s";
}, 1000);

});