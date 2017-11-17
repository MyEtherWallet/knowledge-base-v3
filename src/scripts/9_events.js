$( document ).ready(function() {
  checkQueryString()
  if ($(".search__input").length) $(".search__input")[0].focus()
})

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

$(document).on('click', '.search__button', function(e){
  beginSearch( $(e.target) )
})

$(document).on('click', '.search__clear', function(e){
  clearAllSearchResults()
})

$(document).on('keyup', '.search__input', function(e){
       if (e.keyCode === 13)                     $(".search__button")[0].click()
  else if (e.keyCode === 27)                     clearAllSearchResults()
  else if (e.keyCode === 48||e.keyCode === 96 )  ($('.result').length) ? $('.result')[10].click() : '' ;
  else if (e.keyCode === 49||e.keyCode === 97 )  ($('.result').length) ? $('.result')[0].click()  : '' ;
  else if (e.keyCode === 50||e.keyCode === 98 )  ($('.result').length) ? $('.result')[1].click()  : '' ;
  else if (e.keyCode === 51||e.keyCode === 99 )  ($('.result').length) ? $('.result')[2].click()  : '' ;
  else if (e.keyCode === 52||e.keyCode === 100 ) ($('.result').length) ? $('.result')[3].click()  : '' ;
  else if (e.keyCode === 53||e.keyCode === 101 ) ($('.result').length) ? $('.result')[4].click()  : '' ;
  else if (e.keyCode === 54||e.keyCode === 102 ) ($('.result').length) ? $('.result')[5].click()  : '' ;
  else if (e.keyCode === 55||e.keyCode === 103 ) ($('.result').length) ? $('.result')[6].click()  : '' ;
  else if (e.keyCode === 56||e.keyCode === 104 ) ($('.result').length) ? $('.result')[7].click()  : '' ;
  else if (e.keyCode === 57||e.keyCode === 105 ) ($('.result').length) ? $('.result')[8].click()  : '' ;
  else if (e.keyCode === 58||e.keyCode === 106 ) ($('.result').length) ? $('.result')[9].click()  : '' ;
})

