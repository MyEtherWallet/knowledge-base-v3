
'use strict';

// Modules
var fs                             = require('fs');
var build_nested_pages             = require('../functions/build_nested_pages.js');
var get_filepath                   = require('../functions/get_filepath.js');
var get_last_modified              = require('../functions/get_last_modified.js');
var remove_image_content_directory = require('../functions/remove_image_content_directory.js');

function route_category (config, raneto) {
  return function (req, res, next) {

    // Generate Filepath
    var filepath = get_filepath({
      content  : raneto.config.content_dir,
      filename : 'category'
    });


    var template_filepath = get_filepath({
      content  : [config.theme_dir, config.theme_name, 'templates'].join('/'),
      filename : 'category.html'
    });

    var pageList = remove_image_content_directory(config, raneto.getPages('/category'));

    return res.render('category', {
      config        : config,
      pages         : build_nested_pages(pageList),
      body_class    : 'page__category',
      meta          : config.home_meta,
      last_modified : get_last_modified(config,config.home_meta,template_filepath),
      lang          : config.lang,
      is_category   : true,
      loggedIn      : false,
      username      : null
    });

  };
}

// Exports
module.exports = route_category;
