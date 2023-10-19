console.log("hola")

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const popup = document.getElementById("popup")
    const closePopup = document.getElementById("closePopup");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;

        if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "" || telefono.trim() === "" || mensaje.trim() === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }
        popup.style.display = "block";

        contactForm.reset();
    });


    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});