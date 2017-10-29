function showModal(e) {
  var modal = $(e.target).attr('data-target')
  $( modal ).show()
  $( modal ).attr( 'aria-hidden', false )
  $( 'body' ).append( '<div class="modal-backdrop fade"></div>' )
  $( 'body' ).addClass( 'modal-open' )
  setTimeout(function(){
    $( modal ).addClass('show')
    $( '.modal-backdrop' ).addClass('show')
  }, 300);
}


function hideModal(e) {
  $( '.modal' ).removeClass('show')
  $( '.modal-backdrop' ).removeClass('show')
  $( '.modal' ).attr( 'aria-hidden', true )
  $( 'body' ).removeClass( 'modal-open' )
  setTimeout(function(){
    $( '.modal-backdrop' ).remove()
    $( '.modal' ).hide()
  }, 300);

}

