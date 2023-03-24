let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == "Amelia" && password == "April") {
        window.location.href = "home.html";
    }

    e.preventDefault()
})
