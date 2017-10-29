/* Format of HTML:
   parent div: id="addl_1"
   label     : id="addl_1--label"
   input     : id="addl_1--input"

   <div class="form-group row form__addl-field" id="addl_1">
    <label for="addl_info_1" class="col-2 col-form-label" id="addl_1--label">Your Address</label>
    <div class="col-10">
      <input class="form-control"
             type="text"
             name="addl_info_1"
             id="addl_1--input" >
    </div>
  </div>
*/


$(document).on('click', '#sendFormBtn', function(e){
  validateForm(e)
})

$('select').on('change', function(e) {
  updateAddlFields(e)
})



function validateForm(e) {

  e.preventDefault()

  // set validated to true at the beginning
  var validated = true;

  // what fields are required?
  var req_fields = [ 'main_name', 'main_email', 'main_sub', 'main_msg' ]

  $.each( req_fields, function(i, el){
    elem       = $( '#' + el )
    elem_input = $( '#' + el + '--input' )
    elem_label = $( '#' + el + '--label' )

    if ( $(elem_input).val().length > 0 ) {
      $(elem).removeClass('has-danger').addClass('has-success')
      $(elem_input).removeClass('form-control-danger').addClass('form-control-success')
    } else {
      $(elem).removeClass('has-success').addClass('has-danger')
      $(elem_input).removeClass('form-control-success').addClass('form-control-danger')
      validated = false; // set validated to false
    }

    // if validated is not false for all fields, submit the form
    if ( ( i == req_fields.length-1 ) && validated ) {
      submitForm()
    }

  })

}


function updateAddlFields(e) {

  var the_subject = e.target.value;

  resetAddlFields()

  showHelpers( the_subject )

  showFields( the_subject )

}


function submitForm() {

  var form = $('#fa-form-1')

  var body_fields = [ 'main_sub', 'addl_addr', 'addl_tx', 'addl_1', 'addl_2', 'main_msg' ]

  var body_text = ''

  // make new string that will be used for the body to submit the form
  $.each( body_fields, function(i, el){
    elem       = $( '#' + el )
    elem_val = $( '#' + el + '--input' ).val()
    elem_label = $( '#' + el + '--label' ).text()
    if ( elem_val.length > 0 ) {
      body_text += elem_label + ": " + elem_val;
      body_text += '/n/r/<br>'
    }

  })

  $('#textarea_body').val( body_text )

  console.log(form.serializeArray())
  console.log( body_text)

  form.submit()
}


function displayFlex(el) {
  el.css('display', 'flex')
}


function updateLabel(el, content) {
  el.children('label').text( content )
}


function resetAddlFields() {
  $('.form__addl-field').hide()
  $('.kb_helpers').hide()
  $('#addl_1').children('input').val('')
  $('#addl_2').children('input').val('')
  $('#addl_1').children('label').text('')
  $('#addl_2').children('label').text('')
}


function showHelpers( the_subject  ) {
  $('.helpers--' + the_subject ).show() // e.g. helpers--accessing-wallet
}


function showFields( the_subject  ) {
  // show appropriate fields & helpers
  switch ( the_subject  ) {
      case 'no-subject':
        // do nothing
        break;
      case 'accessing-wallet':
        displayFlex( addl_addr )
        displayFlex( addl_1 )
        updateLabel( addl_1, 'What type of wallet file?' )
        break;
      case 'adding-tokens':
        displayFlex( addl_addr )
        displayFlex( addl_1    )
        updateLabel( addl_1, 'Which token?' )
        break;
      case 'coinbase':
        // do something
        break;
      case 'ens':
        displayFlex( addl_addr )
        displayFlex( addl_1 )
        updateLabel( addl_1, 'What\' the ENS name?' )
        break;
      case 'exchanging':
        displayFlex( addl_addr )
        displayFlex( addl_1 )
        updateLabel( addl_1, 'Which exchange?' )
        break;
      case 'getting-started':
        // do something
        break;
      case 'keystore-file':
        displayFlex( addl_addr )
        break;
      case 'hardware-wallet':
        displayFlex( addl_addr )
        displayFlex( addl_1 )
        updateLabel( addl_1, 'Is there an error message?' )
        break;
      case 'phishing':
        displayFlex( addl_addr )
        updateLabel( addl_1, 'Do you know the URL you visited?' )
        break;
      case 'lost-password':
        // do something
        break;
      case 'lost-pk':
        // do something
        break;
      case 'metamask':
        // do something
        break;
      case 'nodes-networks':
        updateLabel( addl_1, 'What type of network or node?' )
        break;
      case 'other':
        // do something
        break;
      case 'private-key':
        // do something
        break;
      case 'sending-transaction':
        displayFlex( addl_addr )
        displayFlex( addl_tx )
        // do something
        break;
      case 'sending-tokens':
        displayFlex( addl_addr )
        displayFlex( addl_tx )
        break;
      case 'swap':
        displayFlex( addl_addr )
        displayFlex( addl_1 )
        updateLabel( addl_1, 'Ref #' )
        break;
      default:
  }
}

