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

    // Hora al hacer clic - Sencillo y bonito
document.body.addEventListener("click", () => {
    alert("🕐 " + new Date().toLocaleTimeString());
});
});