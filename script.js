const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.addEventListener("scroll", () => {
    // Actualiza la posición del cursor cuando se hace scroll
    cursor.style.left = (e.clientX + window.scrollX) + "px";
    cursor.style.top = (e.clientY + window.scrollY) + "px";
});
