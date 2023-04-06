let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == "Amelia" && password == "April") {
        window.location.href = "home.html";
    }

    e.preventDefault()
})

function accountSwitchTabs() {
    const buttonList = document.getElementsByClassName('account-button');
    const detailsList = document.getElementsByClassName('details');
    for (let index = 0; index < buttonList.length; index++) {
        if (buttonList[index].classList.contains('inactive')) {
            buttonList[index].classList.replace('inactive', 'active');
            detailsList[index].classList.replace('inactive', 'active');
        } else {
            buttonList[index].classList.replace('active', 'inactive');
            detailsList[index].classList.replace('active', 'inactive');
        }
    }
}