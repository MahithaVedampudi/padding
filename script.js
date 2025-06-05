document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('celebalBox');
    
    // Simple click interaction
    box.addEventListener('click', function() {
        const text = box.querySelector('.celebal-text');
        text.textContent = 'Welcome!';
        setTimeout(() => {
            text.textContent = 'Celebal';
        }, 1000);
    });
});