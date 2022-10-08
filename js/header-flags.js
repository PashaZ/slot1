(() => {
    const refs = {
        openCloseModalBtn: document.querySelector('.header-flags-button'),
        changeArrow: document.querySelector('.button-arrow'),
        modal: document.querySelector('.header-flags-section'),
    };

    refs.openCloseModalBtn.addEventListener('click', toggleModalBtn);

    function toggleModalBtn() {
        refs.modal.classList.toggle('is-hidden');
        refs.changeArrow.classList.toggle('change-arrow');
    }
})();