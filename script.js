const refs = {
  openModalBtn: document.getElementById('openModalBtn'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  backdrop: document.getElementById('backdropId')
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal(event) {
  window.addEventListener('keydown', onEscapePress);
  document.body.classList.add('show-modal'); 
};
function onCloseModal(event) {
  window.removeEventListener('keydown', onEscapePress);
  document.body.classList.remove('show-modal'); 
};
function onBackdropClick(event) {
  if(event.target === event.currentTarget){
    onCloseModal();
  }
};
function onEscapePress(event) {
  // console.log(event.code);
  const ESC_KEY_CODE = 'Escape';
  if(event.code === ESC_KEY_CODE){
    onCloseModal();
  }
}