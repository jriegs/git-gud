class Modal {
    constructor() {
        this.openModalButton = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.modal');
        this.closeModalButton = document.querySelector('.modal__close');
        this.events();
    }

    events() {
        // clicking the open modal button
        this.openModalButton.forEach((btn) => {
            btn.addEventListener('click', this.openModal.bind(this));
        });

        // clicking the x close modal button
        this.closeModalButton.addEventListener('click', this.closeModal.bind(this));

        // pushes any key
        document.addEventListener('keydown', this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.key == 27 || e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal(e) {
        e.preventDefault();
        this.modal.classList.add('modal--show');
    }

    closeModal() {
        this.modal.classList.remove('modal--show');
    }
}

export default Modal;