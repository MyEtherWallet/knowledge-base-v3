'use strict';

// packages
const _                 = require('underscore');
const autoprefixer      = require('gulp-autoprefixer');
const clean             = require('gulp-clean');
const concat            = require('gulp-concat');
const cssnano           = require('gulp-cssnano');
const data              = require('gulp-data');
const frontMatter       = require('gulp-front-matter');
const fs                = require('fs');
const gulp              = require('gulp');
const Handlebars        = require('handlebars');
const H                 = require('just-handlebars-helpers');
const layout            = require('gulp-layout');
const less              = require('gulp-less');
const markdown          = require('gulp-markdown');
const notify            = require('gulp-notify');
const path              = require('path');
const plumber           = require('gulp-plumber' );
const rename            = require('gulp-rename');
const runSequence       = require('run-sequence');
const shell             = require('gulp-shell');
const tap               = require('gulp-tap');
const uglify            = require('gulp-uglify');
const webserver         = require('gulp-webserver');

// custom variables
const srcFolder          = 'src/';
const dstFolder          = 'dist/';

const img_srcFolder      = srcFolder + 'images/';
const style_srcFolder    = srcFolder + 'styles/';
const scripts_srcFolder  = srcFolder + 'scripts/';

const content_srcFolder  = srcFolder + 'content/';
const layouts_srcFolder  = srcFolder + 'layouts/';
const partials_srcFolder = srcFolder + 'partials/';


// Error / Success Handling
let onError = function(err) {
  notify.onError({
    title: "Error: " + err.plugin,
    subtitle: "<%= file.relative %>",
    message: "<%= error.message %>",
    sound: "Beep",
    icon: "logo/logo.png",
  })(err);
  console.log(err.toString());
  this.emit('end');
};

function onSuccess(msg) {
  return {
    message: msg + " Complete! ",
    icon: "logo/logo.png",
    onLast: true
  }
}

function notifyFunc(msg) {
  return gulp.src('.', { read: false })
    .pipe(notify(onSuccess(msg)))
}

gulp.task('webserver', function() {
  return gulp.src( dstFolder )
    .pipe(webserver({ livereload: true }));
});

// styles: Compile and Minify style / CSS Files
const style_srcFile     = 'kb-master.less';
const style_destFile    = 'kb-master.min.css';

gulp.task('styles', function() {
  return gulp.src(  style_srcFolder + style_srcFile )
    .pipe( plumber      ({ errorHandler: onError }                                   ))
    .pipe( less         ({ compress: false }                                         ))
    .pipe( autoprefixer ({ browsers: ['last 4 versions', 'iOS > 7'], remove: false } ))
    .pipe( cssnano      ({ autoprefixer: false, safe: true }                         ))
    .pipe( rename       (  style_destFile                                            ))
    .pipe( gulp.dest    (  dstFolder                                                 ))
    .pipe( notify       (  onSuccess( 'Styles' )                                     ))
})

// Rebuild JS
const scripts_destFile  = 'kb-master.min.js';

gulp.task('scripts', function() {
  return gulp.src(    scripts_srcFolder + '**/*.js' )
  .pipe( plumber  ( { errorHandler: onError }       ))
  .pipe( concat   (   scripts_destFile              ))
  .pipe( uglify   (                                 ))
  .pipe( gulp.dest(   dstFolder                     ))
  .pipe( notify   (   onSuccess('JS')               ))
})

var Data = {
  pages: {},
  categories: {},
  global: {
    "email"      : "support@myetherwallet.com",
    "base_url" : "https://myetherwallet.github.io/knowledge-base/",
    //"base_url"   : "file:///Users/tay/Dropbox/local-dev/MyEtherWallet-KnowledgeBase/dist/"
  }
}


gulp.task('gen_categories_array', function() {
  return gulp.src(content_srcFolder + '**/*.cat')
  .pipe(tap(function(file) {
    var contents = file.contents.toString();
    var category = JSON.parse(contents);
    var title    = category['title'];
    var slug     = category['slug'];
    var sort     = category['sort'];
    Data.categories[slug] = {
      "title" : title,
      "slug"  : slug,
      "sort"  : sort
    }
    console.log( 'Data.categories[slug]          - gen_categories_array:')
    console.log ( Data.categories[slug] )
    return gulp.src(content_srcFolder + '**/*.md')
  }))
  .pipe(notify(onSuccess('gen_categories_array')))
})


gulp.task('gen_page_array', ['gen_categories_array'], function() {
  return gulp.src(content_srcFolder + '**/*.md')
  .pipe(tap(function(file) {
    var name           = path.basename(file.path, ".md")
    var contents       = file.contents.toString()
    var index          = contents.indexOf("---%")
    var data           = JSON.parse(contents.slice(0, index))
        data.url       = file.relative.replace(".md", ".html")
        data.slug      = data.url.replace(".html", "")
        index          = data.slug.indexOf("/")
        data.cat_slug  = data.slug.slice(0, index)
        data.cat_title = Data.categories[data.cat_slug].title
        data.slug      = data.slug.slice( index+1, data.slug.length ).replace(".html", "")
    Data.pages[name]   = data
    console.log ( '01 Data.pages[name]           - gen_page_array: ' )
    console.log ( Data.pages[name] )
    contents = contents.slice(index+4, contents.length)
    file.contents = new Buffer(contents, "utf-8")
  }))
  .pipe(notify( onSuccess('gen_page_array' )))
})


gulp.task('layout_home', ['gen_page_array'], function() {
  return gulp.src(layouts_srcFolder + 'index.hbs')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(tap(function(file, t) {
    H.registerHelpers(Handlebars);
    var template = Handlebars.compile(file.contents.toString());
    var html = template({
      pages: Data.pages,
      global: Data.global,
      categories : Data.categories
    })
    file.contents = new Buffer(html, "utf-8");
    console.log( '02 Data.pages                  - gen_page_array: ' )
    console.log ( Data.pages )
  }))
  .pipe(rename(function(path) {
    path.extname = ".html";
  }))
  .pipe(gulp.dest( dstFolder ))
  .pipe(notify(onSuccess('layout_home')))
})


gulp.task('layout_cats', ['gen_page_array'], function() {
  return gulp.src(layouts_srcFolder + 'category.hbs')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(tap(function(file, t) {
    H.registerHelpers(Handlebars);
    var template = Handlebars.compile(file.contents.toString());
    var html = template({
      pages: Data.pages,
      global: Data.global,
      categories : Data.categories
    })
    file.contents = new Buffer(html, "utf-8");
  }))
  .pipe(rename(function(path) {
    path.extname = ".html";
  }))
  .pipe(gulp.dest( dstFolder ))
  .pipe(notify(onSuccess('layout_cats')))
})


gulp.task('layout', ['gen_page_array'], function() {
  return gulp.src(layouts_srcFolder + 'single.hbs')
  .pipe(tap(function(file) {
    H.registerHelpers(Handlebars);
    var template = Handlebars.compile(file.contents.toString());
    return gulp.src(content_srcFolder + '**/*.md')
      .pipe(tap(function(file) {
        console.log ( '03 file.path              - layout:')
        var name = path.basename(file.path);
        console.log ( '04 name                   - layout:');
        var data = Data.pages[name]
        console.log ( '05 Data.pages[name]       - layout:');
        console.log ( Data.pages[name])
            data.contents = file.contents.toString();
        var contents = data.contents;
        var index = data.contents.indexOf("---%");
        if (index !== -1) {
          data.contents = data.contents.slice(index+4, contents.length);
        }
        var html = template(data);
        file.contents = new Buffer(html, "utf-8");
      }))
      .pipe(gulp.dest( dstFolder ));
  }))
  .pipe(notify(onSuccess('layout')))
})




gulp.task('watchJS',       function(){ gulp.watch( scripts_srcFolder  + '**/*.js'   , ['scripts']              ) })

gulp.task('watchSTYLES',   function(){ gulp.watch( style_srcFolder    + '**/*.less' , ['styles']               ) })

gulp.task('watchCONTENT',  function(){ gulp.watch( content_srcFolder  + '**/*.md'   , ['layout']               ) })

gulp.task('watchLAYOUTS',  function(){ gulp.watch( layouts_srcFolder  + '**/*.hbs'  , ['layout', 'layout_home', 'layout_cats']) })

gulp.task('watchPARTIALS', function(){ gulp.watch( partials_srcFolder + '**/*.hbs'  , ['layout', 'layout_home', 'layout_cats']) })


gulp.task('watch',   ['watchJS', 'watchSTYLES', 'watchCONTENT', 'watchLAYOUTS']    )

gulp.task('build',   ['scripts', 'styles', 'layout_home', 'layout', 'layout_cats'] )

gulp.task('default', ['build', 'watch']                                            )
