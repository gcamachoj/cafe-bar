// Agrega animación de desplazamiento al hacer clic en enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Añadir una animación al hacer hover en las tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none';
    });
});
