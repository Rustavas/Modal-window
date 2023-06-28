const refs = {
  overlay: document.getElementById('overlay'),
  modalWindow: document.getElementById('modalWindow'),
  openBtn: document.getElementById('openBtn'),
  closeBtn: document.getElementById('closeBtn'),
};
const classes = {
  openModal: 'open-modal',
};

refs.openBtn.addEventListener('click', onOpenModal);
refs.closeBtn.addEventListener('click', onOpenModal);
refs.overlay.addEventListener('click', onOpenModal);
document.addEventListener('keydown', onCloseModal);

function onOpenModal() {
  document.body.classList.toggle(classes.openModal); 
};
function onCloseModal(event) {
  if(event.code === 'Escape'){
    document.body.classList.remove(classes.openModal);
  };
};