$(document).on('click', '#help-form--btn', function(e){
  validateForm(e)
})

$(document).on('change', '#main_sub--input', function(e) {
  updateAddlFields(e)
})

$(document).on('click', '.modal__trigger', function(e){
  showModal(e)
})

$(document).on('click', '.modal__close, .modal__close--lg', function(e){
  hideModal(e)
})
