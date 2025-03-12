// Abrir menú hamburguesa
const burguer_menu = document.getElementById("burguer_menu");
const navMenu = document.querySelector(".nav-menu");

burguer_menu.addEventListener("change", () => {
    navMenu.classList.toggle("open");
});
// Abrir el modal lateral
function openSidebar() {
    document.getElementById("sidebar").classList.add("active");
}
function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
}
document.querySelectorAll(".control_modal").forEach(button => {
    button.addEventListener("click", openSidebar);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuCheckbox = document.getElementById("checkbox");
    const menuLinks = document.querySelectorAll(".nav-menu a");

    function updateTabindex() {
        const isChecked = menuCheckbox.checked;
        menuLinks.forEach(link => {
            link.tabIndex = isChecked ? 0 : -1;
        });
    }

    // Escuchar cambios en el checkbox
    menuCheckbox.addEventListener("change", updateTabindex);

    // Ejecutar la función una vez al cargar la página
    updateTabindex();
});
