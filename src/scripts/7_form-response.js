function checkQueryString() {

  if ( getQueryString('code') == 'ok' ) {

    $('.form--success').show()

  } else if ( getQueryString('code') !== null ) {

    var error  = getQueryString('code') + ": " + getQueryString('message')
    var mailto = 'mailto:support@myetherwallet?Subject=Need%20Support&Body=%0A%0A%0A%0Aps%3A%20I%20couldn%27t%20send%20via%20the%20form.%20I%20got%20the%20error%3A%20'
    $('.form--error').show()
    $('.form--error .text-danger').after( '<p class="text-danger">' + error + '</p>' )
    $('.form--error .support_link').attr('href', mailto + error);

  } else if ( getQueryString('search') !== null ) {

    var query = getQueryString('search')

    $('.search__input')[0].value = query

    $(".search__button")[0].click()

  }

}
