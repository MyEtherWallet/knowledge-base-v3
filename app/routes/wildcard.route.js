
'use strict';

// Modules
var build_nested_pages             = require('../functions/build_nested_pages.js');
var fs                             = require('fs');
var get_filepath                   = require('../functions/get_filepath.js');
var get_last_modified              = require('../functions/get_last_modified.js');
var marked                         = require('marked');
var path                           = require('path');
var remove_image_content_directory = require('../functions/remove_image_content_directory.js');
var toc                            = require('markdown-toc');
var yaml                           = require('js-yaml');
var _                 = require('underscore');

function route_wildcard (config, raneto) {
  return function (req, res, next) {

    // Skip if nothing matched the wildcard Regex
    if (!req.params[0]) {
      return next();
    }

    // if on homepage, return index
    var slug = req.params[0];
    if (slug === '/') {
      slug = '/index';
    }

    // look for files
    var file_path           = path.normalize(raneto.config.content_dir + slug);
    var file_path_md        = file_path + '.md';

    var file_path_exists    = fs.existsSync(file_path);
    var file_path_md_exists = fs.existsSync(file_path_md);


    // if nothing exits with that file name (as .md file, file, or directory, error out)
    if ( !file_path_exists && !file_path_md_exists  ) {
      var render = 'error';
      return res.render(render, {
        status  : '404 (wildcard - 36)',
        message : config.lang.error['404']
      });
    }

    // if the file with an .md exists, render that
    // note: this means we should not have categories with the same names as files
    if ( file_path_md_exists ) {

      fs.readFile(file_path_md, 'utf8', function (error, content) {

        if (error) {
          var render = 'error';
          return res.render(render, {
            status  : '404 (wildcard - 50)',
            message : config.lang.error['404']
          });
        }

        // Meta
        var meta = raneto.processMeta(content);
        meta.custom_title = meta.title;
        if (!meta.title) { meta.title = raneto.slugToTitle(file_path_md); }

        // Content
        content = raneto.stripMeta(content);
        content = raneto.processVars(content);

        var template = meta.template || 'page';
        var render   = template;

          // Render Markdown
          marked.setOptions({
            langPrefix : ''
          });
          content = marked(content);

        var pageList = remove_image_content_directory(config, raneto.getPages(slug));

        var shortPath = slug.split('/');

        return res.render(render, {
          config        : config,
          pages         : build_nested_pages(pageList),
          meta          : meta,
          content       : content,
          body_class    : 'page__single page__'+shortPath[1],
          last_modified : get_last_modified(config,meta,file_path_md),
          lang          : config.lang,
          loggedIn      : false,
          username      : null,
          canEdit       : false,
          is_single     : true
        });

      });


      // if the file exists as a directory, render the category page
    } else if ( file_path_exists && fs.lstatSync(file_path).isDirectory() ) {

      var slug = req.params[0];
      if (slug === '/') {  slug = '/index';  }

      var file_path   = path.normalize(raneto.config.content_dir + slug);

      var dirMetadata = {}
      var metaFile    = fs.readFileSync(file_path+'/meta');
          dirMetadata = raneto.cleanObjectStrings(yaml.safeLoad(metaFile.toString('utf-8')));


      var template_filepath = get_filepath({
        content  : [config.theme_dir, config.theme_name, 'templates'].join('/'),
        filename : 'category.html'
      });

      var pageList = remove_image_content_directory(config, raneto.getPages(slug));
      var nakedSlug = slug.substr(1)
      var catPageList = _.findWhere(pageList, { title: dirMetadata.title});

      return res.render('category', {
        body_class    : 'page__category',
        catSlug       : slug,
        catTitle      : dirMetadata.title,
        config        : config,
        is_category   : true,
        lang          : config.lang,
        last_modified : get_last_modified(config,dirMetadata,template_filepath),
        meta          : dirMetadata,
        pages         : build_nested_pages( pageList ),
        loggedIn      : false,
        username      : null
      });


    } else {


      var render = 'error';
      return res.render(render, {
        status  : '404 (wildcard - 131)',
        message : config.lang.error['404']
      });


    }



  };
}

// Exports
module.exports = route_wildcard;
