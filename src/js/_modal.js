const modal = document.querySelector('.modal');
modal.querySelector('.modal-hide').addEventListener('click', hideModal);

const images = document.querySelectorAll('img');
for (image of images) {
    image.addEventListener('click', (e) => showModal(e.target.cloneNode(true)));
}

function showModal(content) {
    modal.classList.toggle('show');
    if (modal.classList.contains('show')) {
        modal.querySelector('.modal-body').appendChild(content);
    }
}
function hideModal() {
    modal.classList.toggle('show');
    modal.querySelector('.modal-body').innerHTML = '';
}
