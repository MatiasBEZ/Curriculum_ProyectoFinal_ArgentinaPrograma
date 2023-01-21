// conocimientos programacion modal consts
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

// conocimientos disenio modal consts
const openModalPhoto = document.querySelector('.prog_icon.photoshop');
const openModalFigma = document.querySelector('.prog_icon.figma');
const modalPhoto = document.querySelector('.modal.photoshop');
const modalFigma = document.querySelector('.modal.figma');
const closeModalPhoto = document.querySelector('.modal_close.photoshop');
const closeModalFigma = document.querySelector('.modal_close.figma');

// sucess message form consts
const modalSuccess = document.querySelector('.modal.success');
const closeModalSuccess = document.querySelector('.modal_close.success');

// function to open and close modals when press a button
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

OpenCloseModals(openModalPhoto, modalPhoto, closeModalPhoto);
OpenCloseModals(openModalFigma, modalFigma, closeModalFigma);


//email validator

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.match(mailformat)){
        return true;
    } else {
        alert("Por favor ingresa un email válido!");
        document.form.email.focus();
        return false;
    }
}


// contact form functionality
var form = document.querySelector("#contact_form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var nameValue = form.querySelector("#name").value;
    var email = form.querySelector("#email").value;
    var message = form.querySelector("#message").value;

    if (ValidateEmail(email)) {
        // var formData = new FormData();
        // formData.append("name", nameValue);
        // formData.append("email", email);
        // formData.append("message", message);
    
        // for (const value of formData.values()) {
        //     console.log(value);
        // }
        document.getElementById('name_data').innerHTML = nameValue;
        document.getElementById('email_data').innerHTML = email;
        document.getElementById('message_data').innerHTML = message;

        modalSuccess.classList.add('modal--show');
        closeModalSuccess.addEventListener('click', (e) => {
            e.preventDefault();
            modalSuccess.classList.remove('modal--show');
        })
        form.reset();
    }
});
