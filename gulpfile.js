'use strict';

// packages
const _                  = require( 'underscore'              )
const autoprefixer       = require( 'gulp-autoprefixer'       )
const clean              = require( 'gulp-clean'              )
const concat             = require( 'gulp-concat'             )
const cssnano            = require( 'gulp-cssnano'            )
const data               = require( 'gulp-data'               )
const frontMatter        = require( 'gulp-front-matter'       )
const fs                 = require( 'fs'                      )
const gulp               = require( 'gulp'                    )
const H                  = require( 'just-handlebars-helpers' )
const Handlebars         = require( 'handlebars'              )
const layout             = require( 'gulp-layout'             )
const markdown           = require( 'gulp-markdown'           )
const notify             = require( 'gulp-notify'             )
const path               = require( 'path'                    )
const plumber            = require( 'gulp-plumber'            )
const rename             = require( 'gulp-rename'             )
const runSequence        = require( 'run-sequence'            )
const sass               = require( 'gulp-sass'               )
const shell              = require( 'gulp-shell'              )
const tap                = require( 'gulp-tap'                )
const uglify             = require( 'gulp-uglify'             )
const Vinyl              = require( 'vinyl'                   )
const file               = require( 'gulp-file'               )
// custom variables
const srcFolder          = 'src/'
const dstFolder          = 'dist/'
const img_srcFolder      = srcFolder + 'images/'
const style_srcFolder    = srcFolder + 'styles/'
const scripts_srcFolder  = srcFolder + 'scripts/'

const content_srcFolder  = srcFolder + 'content/'
const layouts_srcFolder  = srcFolder + 'layouts/'
const partials_srcFolder = srcFolder + 'partials/'


// Error / Success Handling
let onError = function(err) {
  notify.onError({
       title: "Error: " + err.plugin,
    subtitle: "<%= file.relative %>",
    message:  "<%= error.message %>",
      sound:  "Beep",
       icon:  "logo/logo.png",
  })( err )
  console.log( err.toString() )
  this.emit( 'end' )
}

function onSuccess(msg) {
  return {
    message: msg + " Complete! ",
       icon: "logo/logo.png",
     onLast: true
  }
}

function notifyFunc(msg) {
  return gulp.src( '.', { read: false } )
    .pipe( notify( onSuccess( msg ) ) )
}


gulp.task('copy', function() {

    gulp.src( img_srcFolder )
      .pipe(gulp.dest( dstFolder + 'images/' ))

    return gulp.src( srcFolder + 'styleguide.html' )
      .pipe(gulp.dest( dstFolder ))

    .pipe(notify(onSuccess( 'Copy' )))
});




// styles: Compile and Minify style / CSS Files
const style_srcFile  = 'kb-master.scss';
const style_destFile = 'kb-master.min.css';

gulp.task('styles', function() {
  return gulp.src( style_srcFolder + style_srcFile )

    .pipe(      plumber({ errorHandler: onError                                       }) )
    .pipe(         sass(                                                               ) )
    .pipe( autoprefixer({     browsers: ['last 4 versions', 'iOS > 7'], remove: false }) )
    .pipe(      cssnano({ autoprefixer: false, safe: true                             }) )
    .pipe(       rename(                style_destFile                                )  )

    .pipe( gulp.dest( dstFolder ) )
})




// Rebuild JS
const scripts_destFile = 'kb-master.min.js';

gulp.task( 'scripts', function() {
  return gulp.src( scripts_srcFolder + '**/*.js' )
    .pipe( plumber({ errorHandler: onError }) )
    .pipe(  concat(   scripts_destFile      ) )
    .pipe(  uglify(                         ) )

    .pipe( gulp.dest( dstFolder ) )
})

/*
var Context = {
  base_url : 'https://myetherwallet.github.io/knowledge-base/',
  pages : {
    'creating-new-accounts-for-eth-and-tokens.html' : {
      cat_slug    : '',
      cat_title   : '',
      category    : '',
      content     : '',
      description : '',
      slug        : '',
      sort        : '',
      title       : '',
      url         : ''
    }
  },
  category : {
    'Addresses' : {
      title       : '',
      slug        : '',
      sort        : ''
    }
  }
}
*/

var Context = {
  base_url : 'https://myetherwallet.github.io/knowledge-base/',
  //base_url : 'file:///Users/tay/Dropbox/local-dev/MyEtherWallet-KnowledgeBase/dist/',
  //base_url : 'http://localhost/',
  pages : {},
  category : {},
  this_category: {}
};

var Search = [{
  slug : '',
  name : '',
  text : ''
}]



gulp.task('gen_cats', function() {
  return gulp.src( content_srcFolder + '**/*.cat' )

    .pipe( tap( function( file ) {

      var filename        = path.basename( file.path, '.cat' )
      var content         = file.contents.toString()
      var data            = JSON.parse( content )
          data.base_url   = Context.base_url

      Context.category[data.title] = data

    }))

    .pipe( notify ( onSuccess ( 'gen_cats' ) ) )
})





gulp.task('gen_pages', ['gen_cats'], function() {
  return gulp.src(content_srcFolder + '**/*.md')

    .pipe( tap( function( file ) {

      var filename           = path.basename( file.path, '.md' )
      var content            = file.contents.toString()
      var index              = content.indexOf( '---%' )

      var data               = JSON.parse( content.slice( 0, index ) )
          // data.title         = data.title
          // data.sort          = data.sort
          // data.category      = data.category
          // data.description   = data.description
          data.url           = file.relative.replace( '.md', '.html' )
          data.cat_slug      = Context.category[data.category].slug
          data.cat_title     = data.category
          data.slug          = filename.replace( file.path, '' )
          data.content       = file.contents.toString()
          var index          = data.content.indexOf('---%')
          data.content       = data.content.slice( index + 4, data.content.length )
          data.content       = markdown.marked( data.content )
          data.base_url      = Context.base_url

      Context.pages[filename] = data

    }))

    .pipe( notify ( onSuccess ( 'gen_pages' ) ) )

})



gulp.task('gen_search_index', ['gen_pages'], function() {
  return gulp.src(content_srcFolder + '**/*.md')

    .pipe( tap( function( file ) {

      var filename           = path.basename( file.path, '.md' )
      var content            = file.contents.toString()
      var index              = content.indexOf( '---%' )

      var data               = JSON.parse( content.slice( 0, index ) )
          data.content       = file.contents.toString()
          data.content       = data.content.slice( index + 4, 300 )
          data.content       = data.content.replace( '[', '\ ', '#', '*', '[', ']' , "" )

      var data2 = {
        "slug" : filename.replace( file.path, '' ),
        "name" : data.title,
        "text" : data.title + ' ' + data.description + ' ' + data.content
      }

      Search.push( data2 );

    }))
})


// Lunr
gulp.task('lunr_index', ['gen_search_index'], function(){
  var search = JSON.stringify( Search )
      search = "var lunrindx = " + search
  return file('lunr-index.js', search, { src: true })
    .pipe(gulp.dest('src/scripts'));
});




// Home Page

gulp.task('layout_home', ['gen_pages'], function() {

  return gulp.src( layouts_srcFolder + 'index.hbs' )

    .pipe( plumber({ errorHandler: onError }) )

    .pipe( tap(function( file, t ) {

      H.registerHelpers( Handlebars );

      var template = Handlebars.compile( file.contents.toString() )

      var result   = template( Context )

      file.contents = new Buffer( result , 'utf-8');

    }))

    .pipe( rename(function(path) {
      path.extname = '.html';
    }))

    .pipe( gulp.dest( dstFolder ) )

    .pipe( notify ( onSuccess ( 'layout_home' ) ) )

})


// Contact Page

gulp.task('layout_contact', ['gen_pages'], function() {

  return gulp.src( [ layouts_srcFolder+'contact.hbs', layouts_srcFolder+'form.hbs'  ] )

    .pipe( plumber({ errorHandler: onError }) )

    .pipe( tap(function( file, t ) {

      H.registerHelpers( Handlebars );

      var template = Handlebars.compile( file.contents.toString() )

      var result   = template( Context )

      file.contents = new Buffer( result , 'utf-8');

    }))

    .pipe( rename(function(path) {
      path.extname = '';
    }))

    .pipe( gulp.dest( dstFolder ) )

    .pipe( notify ( onSuccess ( 'layout_contact' ) ) )

})








// Category Pages

gulp.task('layout_cats', ['gen_pages'], function() {

  return gulp.src( layouts_srcFolder + 'category.hbs' )

    .pipe( plumber({ errorHandler: onError }) )

    .pipe( tap(function( file ) {

      H.registerHelpers( Handlebars );

      var template = Handlebars.compile( file.contents.toString() )

      return gulp.src( content_srcFolder + '**/*.cat' )

      .pipe( tap( function( file ) {

        var filename              = path.basename( file.path, '.cat' )
        var content               = file.contents.toString()
        var data                  = JSON.parse( content )

        Context.this_category     = data

        var result                = template( Context )

        file.contents             = new Buffer( result , 'utf-8');

      }))

      .pipe(rename({
        basename: "index",
        extname: ".html"
      }))

      .pipe( gulp.dest( dstFolder ) )

    }))

    .pipe( notify ( onSuccess ( 'layout_home' ) ) )

})



// Single pages

gulp.task('layout_single', ['gen_pages'], function() {

  return gulp.src( layouts_srcFolder + 'single.hbs' )

    .pipe( plumber( { errorHandler: onError } ) )

    .pipe( tap( function( file ) {

      H.registerHelpers( Handlebars )

      var template = Handlebars.compile( file.contents.toString() )

      return gulp.src( content_srcFolder + '**/*.md' )

        .pipe( tap( function( file ) {

          var filename      = path.basename( file.path, '.md' )

          var result        = template( Context.pages[filename] )

          file.contents     = new Buffer( result, 'utf-8' )

        }))

        .pipe( rename(function(path) {
          path.extname = '.html';
        }))

        .pipe( gulp.dest( dstFolder ) )

    }))

    .pipe( notify ( onSuccess ( 'layout_single' ) ) )
})





gulp.task( 'watch_js',       function() { gulp.watch(scripts_srcFolder + '**/*.js',   ['scripts'])               })


gulp.task( 'watch_styles',   function() { gulp.watch(style_srcFolder   + '**/*.scss', ['styles'])                })


gulp.task( 'watch_content',  function() { gulp.watch(srcFolder + '**/*.md',   ['layout_single', 'layout_home', 'layout_contact', 'layout_cats']) })


gulp.task( 'watch_template', function() { gulp.watch(srcFolder + '**/*.hbs',  ['layout_single', 'layout_home', 'layout_contact', 'layout_cats']) })


gulp.task( 'watch',   ['watch_js', 'watch_styles', 'watch_content', 'watch_template'] )


gulp.task( 'build',   ['scripts', 'styles', 'layout_home', 'layout_contact', 'layout_single',  'layout_cats', 'copy'] )


gulp.task( 'default', ['build', 'watch']                                              )
