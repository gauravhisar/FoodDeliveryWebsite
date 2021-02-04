const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const orderbutton = document.querySelectorAll(".order-food")
const contactSubmitbutton = document.querySelectorAll("[submit-contact-details]")
const contactinputs = document.querySelectorAll(".form-group input")

orderbutton.forEach(button => {
  button.addEventListener('click', () => {
    Swal.fire({
      position: 'center-center',
      icon: 'success',
      iconColor: 'black',
      title: 'Your order has been placed!',
      showConfirmButton: false,
      timer: 1600
    })
  })
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

contactSubmitbutton.forEach(button=>{
  button.addEventListener("click", ()=>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: 'black',
      title: 'Details have been submitted',
      showConfirmButton: false,
      timer: 1600
    })
    document.contact_form.reset();
  })
})
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}