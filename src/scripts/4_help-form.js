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

  var form         = $('#fa-form-1')

  // Message
  var message  = $('#main_msg--input' ).val() + '\n\n'

  // Add'l Fields
  var addl_array = [ 'addl_addr', 'addl_tx', 'addl_1', 'addl_2', 'main_sub' ]
  var addl_fields = ''
  $.each( addl_array, function(i, el){
    elem       = $( '#' + el )
    elem_val   = $( '#' + el + '--input' ).val()
    elem_label = $( '#' + el + '--label' ).text()
    if ( elem_val.length > 0 ) {
      addl_fields += elem_label + ': ' + elem_val
      addl_fields += '\n\n'
    }
  })

  // URL
  var hasRef = (document.referrer != null) && (document.referrer.length != 0)
  var hasLoc = (window.location.href != null) && (window.location.href.length != 0)
  var url    = ''

  //if( _parentLoc )
    url += 'iFrame Parent  ' + ': ' + _parentLoc + '\n'
  //if( hasRef     )
    url += 'Doc Ref        ' + ': ' + document.referrer  + '\n'
  //if( _childLoc  )
    url += 'iFrame Child   ' + ': ' + _childLoc  + '\n'
  //if( hasLoc     )
    url += 'Window Loc     ' + ': ' + window.location.href  + '\n'

  // Browser Info
  var browser  = 'Browser        ' + ': ' + platform.name        + '\n'
      browser += 'OS             ' + ': ' + platform.os.family   + '\n'
      browser += 'Full Env.      ' + ': ' + platform.description + '\n'
      browser += 'UA             ' + ': ' + platform.ua

  $('#textarea_body').val( message + addl_fields + url + browser )

  console.log( message + addl_fields + url + browser )

  //console.log( form.serializeArray() )

  //alert( ' form submitted ')

  form.attr('action', 'https://webhook.frontapp.com/forms/myetherwallet/69b21d13db5e11724f5ed625582edf518f24d345f5b7d9162684319532ff33f8b5e3ef8069cf05dcb2718c3e53b42063')

  form.submit()
}

function displayFlex(el) {
  el.css('display', 'flex')
}


function updateLabel(el, content) {
  el.find('label').text( content )
}

function updateHolder(el, content) {
  el.find('.form-control').attr( "placeholder", content );
}

function resetAddlFields() {
  $('.form__addl-field').hide()
  $('.kb_helpers').hide()
  $('#addl_1--input').val('')
  $('#addl_2--input').val('')
}


function showHelpers( the_subject ) {
  $('.helpers--' + the_subject ).show() // e.g. helpers--accessing-wallet
}


function showFields( the_subject  ) {
  var addl_1    = $('#addl_1')
  var addl_addr = $('#addl_addr')
  var addl_tx   = $('#addl_tx')
  // show appropriate fields & helpers
  switch ( the_subject  ) {
      case 'no-subject':
        // do nothing
        break;
      case 'accessing-wallet':
        displayFlex(  addl_addr )
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Wallet Type    ' )
        updateHolder( addl_1, 'e.g. Private Key, Keystore file, MetaMask, Ledger....' )
        break;
      case 'adding-tokens':
        displayFlex(  addl_addr )
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Token Name     ' )
        updateHolder( addl_1, 'e.g. SNT, Aragon, BAT... ' )
        break;
      case 'coinbase':
        // do something
        break;
      case 'ens':
        displayFlex(  addl_addr )
        displayFlex(  addl_tx )
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'ENS Name       ' )
        updateHolder( addl_1, 'e.g. mewtopia.eth... ' )
        break;
      case 'exchanging':
        displayFlex(  addl_addr )
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Exchange       ' )
        updateHolder( addl_1, 'e.g. Coinbase, Gemini, Kraken... ' )
        break;
      case 'getting-started':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Where are you stuck?' )
        updateHolder( addl_1, 'e.g. I created a wallet but then I got this error... ' )
        break;
      case 'keystore-file':
        displayFlex(  addl_addr )
        break;
      case 'hardware-wallet':
        displayFlex(  addl_addr )
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Error message  ' )
        updateHolder( addl_1, 'e.g. Error Code 5' )
        break;
      case 'phishing':
        displayFlex(  addl_addr )
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'URL you visited' )
        updateHolder( addl_1, 'e.g. myethereumwallet.com' )
        break;
      case 'lost-password':
        displayFlex(  addl_addr )
        break;
      case 'lost-pk':
        displayFlex(  addl_addr )
        break;
      case 'metamask':
        displayFlex(  addl_addr )
        break;
      case 'nodes-networks':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Network or Node Type' )
        updateHolder( addl_1, 'e.g. UBIQ, Custom Private network...' )
        break;
      case 'other':
        // do something
        break;
      case 'private-key':
        displayFlex(  addl_addr )
        break;
      case 'sending-transaction':
        displayFlex(  addl_addr )
        displayFlex(  addl_tx )
        // do something
        break;
      case 'sending-tokens':
        displayFlex(  addl_addr )
        displayFlex(  addl_tx )
        break;
      case 'swap':
        displayFlex(  addl_addr )
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Ref #          ' )
        updateHolder( addl_1, 'e.g. BITYZXJV3U' )
        break;
      default:
  }
}



var _childLoc  = ''
var _parentLoc = ''

function childReceiveMessage(event) {
  console.log('event.origin: ' + event.origin )

  if (event.origin !== 'https://myetherwallet.github.io/knowledge-base/')
    return

  window._parentLoc = event.data;
  console.log('_parentLoc: ' + window._parentLoc )
}

function sendMsgToParent() {
  window._childLoc = window.location.href
  console.log( '_childLoc: ' + window._childLoc)
  window.parent.postMessage( window._childLoc, 'https://myetherwallet.github.io/knowledge-base/')
}

function receiveMessage(event) {
  window._parentLoc = window.location.href;
  console.log( '_childLoc event: ' + event.origin )
  console.log( '_childLoc receiveMessage: ' + event.data )
  console.log( '_parentLoc receiveMessage: ' + window._parentLoc )
  event.source.postMessage( window._parentLoc, 'https://myetherwallet.github.io/knowledge-base/' )
}
