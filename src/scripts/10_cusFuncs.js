var dropdown = false;
var currentLang = document.getElementById('currentLang');
var select = document.getElementById('languagesDropdown');
var languages = ['Japanese', 'Korean', 'Russian', 'English'];

function displayOptions(e) {
  var slow;
  if(!dropdown) {
    select.style.display = 'block';
  } else {
    slow = setTimeout(function () {
      select.style.display = 'none';
    }, 200);
  }
  dropdown = !dropdown
}

function switchContent(lang) {
  var langObject;
  switch (lang) {
    case "English":
      langObject = English
      break;
    case "Russian":
      langObject = Russian
      break;
    case "Japanese":
      langObject = Japanese
      break;
    case "Korean":
      langObject = Korean
      break;
  }

  for (var i = 0; i < ids.length; i++) {
    var element = document.getElementById(ids[i])
    if(element !== null) {
      if(langObject[ids[i]] !== "") {
        element.innerHTML = langObject[ids[i]];
      } else {
        if(English[ids[i]] !== "") {
          element.innerHTML = English[ids[i]];
        }
      }
    }
  }
}

function displayWarning(lang) {
  if(lang !== "English") {
    document.getElementById('languageWarn').style.display = 'block';
  } else {
    document.getElementById('languageWarn').style.display = 'none';
  }
}

function selectLanguage(e) {
  currentLang.textContent = e.target.innerHTML;
  localStorage.setItem('currentLang', e.target.innerHTML);
  select.getElementsByClassName('active')[0].classList.remove('active');
  e.target.setAttribute('class', 'active');
  switchContent(e.target.innerHTML);
  displayWarning(e.target.innerHTML);
  dropdown = !dropdown;
}

function initLanguages() {
  if(localStorage.getItem('currentLang') !== null) {
    currentLang.textContent = localStorage.getItem('currentLang');
    switchContent(currentLang.textContent);
  } else {
    localStorage.setItem('currentLang', 'English');
    currentLang.textContent = 'English';
    switchContent('English');
  }

  languages.forEach(function(language) {
    var option = document.createElement('li');
    if(language === currentLang.innerHTML) {
      option.setAttribute('class', 'active');
    }
    option.addEventListener("click", selectLanguage, false);
    option.textContent = language;
    select.appendChild(option);
  });

  displayWarning(currentLang.textContent);
}

window.onload = initLanguages;

function getQueryString(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function checkQueryString() {
    if (getQueryString('search') !== null) {
        var query = getQueryString('search')
        $('.search__input')[0].value = query
        $(".search__button")[0].click()
    }
}

var stripTags = function(str) {
  var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

  var tagOrComment = new RegExp(
    '<(?:'
    // Comment body.
    + '!--(?:(?:-*[^->])*--+|-?)'
    // Special "raw text" elements whose content should be elided.
    + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
    + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
    // Regular name
    + '|/?[a-z]'
    + tagBody
    + ')>',
    'gi');
  var oldQuery;
  do {
    oldQuery = str;
    str = str.replace(tagOrComment, '');
  } while (str !== oldQuery);
  return str.replace(/</g, '&lt;');
}
