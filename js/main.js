const elModalBtn = document.querySelector('#modal-btn');
const elModal = document.querySelector('.modal');
const elModalCheckout = document.querySelector('#modal-checkout');

elModalBtn.addEventListener('click', function() {
    elModal.classList.add('modal-on');
});

elModalCheckout.addEventListener('click', function() {
    elModal.classList.remove('modal-on');
});