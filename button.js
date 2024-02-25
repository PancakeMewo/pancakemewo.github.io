let poem_button = document.getElementById('poem');

let oreki_button = document.getElementById('oreki');

poem_button.addEventListener('click', (e) => {
    setTimeout(function() {
        window.location.href='letter.html'
    }, 500);
})

oreki_button.addEventListener('click', (e) => {
    setTimeout(function() {
        window.location.href='oreki.html'
    }, 500);
})
