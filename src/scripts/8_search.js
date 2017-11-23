var idx = lunr.Index.load( Search )


function beginSearch( btnElement ) {
  var query          = $(btnElement).parents('.search__form').find('.search__input').val()
  var errorEmpty     = 'Sorry—we can\'t search for nothing. Try typing something in the box. :)'
  var errorNoResults = 'Sorry—there are no results for <strong>'+ query + '</strong>.'
  if ( query.length > 0 ) {
    var results   = idx.search( query )
    var resultsF1 = idx.search( query + '~1' )
    if      ( results.length >= 1 )   returnResults( query, results )
    else if ( resultsF1.length >= 1 ) returnResults( query+'~1 (fuzzy search)', resultsF1 )
    else                              showSearchError( errorNoResults )
  } else {
    showSearchError( errorEmpty )
  }
}


function showSearchSuccess( query, results ) {
  clearSearchResults()
  $('.result__outer').show()
  $('.search__success').html('There are '+ results.length +' results for your search <strong>'+ query + '</strong>')
  $('.search__success').show()
}


function showSearchError( msg ) {
  clearSearchResults()
  $('.result__outer').show()
  $('.search__error').html( msg )
  $('.search__error').show()
}


function returnResults( query, results ) {

  showSearchSuccess( query, results )

  window.history.pushState( {}, document.title, window.location.href.split("?")[0] + '?search=' + query );

  results.forEach(function (result) {
    var id      = result.ref
    var title   = Content[id].title
    var content = Content[id].content
    var url     = Content[id].url

    buildSearchResult(title, url, content)

  })

}


function buildSearchResult(title, url, content) {
  var htmlStart   = '<a class="result row" href="'+ url +'" target="_parent">'
  var htmlCol1    =   '<div class="result__hotkey col hidden-xs-down "></div>'
  var htmlCol2    =   '<div class="col">'
  var htmlTitle   =     '<h4 class="result__title">'+ title +'</h4>'
  var htmlContent =     '<p class="result__content">'+ content +'...</p>'
  var htmlLink    =     '<button class="result__link btn btn-primary btn-sm"> Read More... </button>'
  var htmlCol2End =   '</div>'
  var htmlEnd     = '</a>'
  $('.result__wrapper').append( htmlStart + htmlCol1 + htmlCol2 + htmlTitle + htmlContent + htmlLink + htmlCol2End + htmlEnd  )
}


function clearSearchResults() {
  $('.result__outer').hide()
  $('.search__error').hide()
  $('.search__success').hide()
  $('.result__wrapper').html('')
  $('.search__error').html('')
  $('.search__success').html('')
}

function clearAllSearchResults() {
  clearSearchResults()
  $('.search__success').html('')
  $('.search__input')[0].value = ''
  window.history.pushState( {}, document.title, window.location.href.split("?")[0] );
}


