const openModalJav = document.querySelector('.prog_icon.java');
const openModalPy = document.querySelector('.prog_icon.python');
const openModalJs = document.querySelector('.prog_icon.js');
const openModalDb = document.querySelector('.prog_icon.db');
const modalJav = document.querySelector('.modal.java');
const modalPy = document.querySelector('.modal.python');
const modalJs = document.querySelector('.modal.js');
const modalDb = document.querySelector('.modal.db');
const closeModalJav = document.querySelector('.modal_close.java');
const closeModalPy = document.querySelector('.modal_close.python');
const closeModalJs = document.querySelector('.modal_close.js');
const closeModalDb = document.querySelector('.modal_close.db');

function OpenCloseModals (openModal, modal, closeModal) {
    var openModal = openModal;
    var modal = modal
    var closeModal = closeModal;
    openModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal--show');
    })
    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
    })
}

OpenCloseModals(openModalJav, modalJav, closeModalJav);
OpenCloseModals(openModalPy, modalPy, closeModalPy);
OpenCloseModals(openModalJs, modalJs, closeModalJs);
OpenCloseModals(openModalDb, modalDb, closeModalDb);