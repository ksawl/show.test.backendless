const selectSwitch = document.querySelector('.select-switch');
const buttonSwitch = document.querySelectorAll('.button-switch');
const radioSwitch = document.querySelectorAll('.radio-switch');

selectSwitch.addEventListener('change', (e) => themeSwitch(e.target.value));

for (let button of buttonSwitch) {
    button.addEventListener('click', (e) => themeSwitch(e.target.value));
}

for (let radio of radioSwitch) {
    radio.addEventListener('change', (e) => themeSwitch(e.target.value));
}

function themeSwitch(theme) {
    if (theme === 'light') {
        document.documentElement.removeAttribute('theme');
    } else {
        document.documentElement.setAttribute('theme', theme);
    }

    selectSwitch.value = theme;

    for (let button of buttonSwitch) {
        button.classList.remove('active');
        if (button.classList.contains(theme)) button.classList.add('active');
    }
    
    for (let radio of radioSwitch) {
        radio.checked = false;
        if (radio.classList.contains(theme)) radio.checked = true;
    }
}
