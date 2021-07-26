const loader = document.querySelector('.wrapper');


window.addEventListener('load', () => {
    setTimeout(function() {
        
        loader.classList.add('fondu-out');
    }, 30000);
})
