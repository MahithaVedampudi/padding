document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('celebalBox');
    const body = document.querySelector('body');
    
    box.addEventListener('click', function() {
        body.classList.toggle('page-bg-alternate');
        
        const text = box.querySelector('.celebal-text');
        text.textContent = 'Clicked!';
        setTimeout(() => {
            text.textContent = 'Celebal';
        }, 1000);
    });
});
