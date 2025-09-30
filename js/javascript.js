document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');

    // Función que se ejecuta al hacer scroll
    window.addEventListener('scroll', () => {
        // Si el usuario ha bajado más de 300 píxeles, muestra el botón
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Función que se ejecuta al hacer clic en el botón
    backToTopButton.addEventListener('click', (e) => {
        // Previene el comportamiento por defecto del enlace (evita saltos bruscos)
        e.preventDefault();
        
        // Desplaza la ventana hacia la parte superior con un efecto suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});