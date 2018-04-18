'use strict'

// packages
const _                  = require( 'underscore'              )
const autoprefixer       = require( 'gulp-autoprefixer'       )
const clean              = require( 'gulp-clean'              )
const concat             = require( 'gulp-concat'             )
const cssnano            = require( 'gulp-cssnano'            )
const data               = require( 'gulp-data'               )
const file               = require( 'gulp-file'               )
const frontMatter        = require( 'gulp-front-matter'       )
const fs                 = require( 'fs'                      )
const gulp               = require( 'gulp'                    )
const H                  = require( 'just-handlebars-helpers' )
const Handlebars         = require( 'handlebars'              )
const layout             = require( 'gulp-layout'             )
const lunr               = require( 'lunr'                    )
const markdown           = require( 'gulp-markdown'           )
const notify             = require( 'gulp-notify'             )
const path               = require( 'path'                    )
const plumber            = require( 'gulp-plumber'            )
const removeMd           = require( 'remove-markdown'         )
const rename             = require( 'gulp-rename'             )
const runSequence        = require( 'run-sequence'            )
const sass               = require( 'gulp-sass'               )
const shell              = require( 'gulp-shell'              )
const tap                = require( 'gulp-tap'                )
const uglify             = require( 'gulp-uglify'             )
const Vinyl              = require( 'vinyl'                   )

// custom variables
const srcFolder          = 'src/'
const dstFolder          = 'dist/'
const img_srcFolder      = srcFolder + 'images/'
const style_srcFolder    = srcFolder + 'styles/'
const scripts_srcFolder  = srcFolder + 'scripts/'

const content_srcFolder  = srcFolder + 'content/'
const layouts_srcFolder  = srcFolder + 'layouts/'
const partials_srcFolder = srcFolder + 'partials/'

function titleBasedId(str) {
  return str.split(" ").join("").replace(/[\W_]+/g, "");
}

var Context = {
  //base_url : 'file:///home/kvhnuke/GitHub/knowledge-base/dist/',
  base_url : 'https://myetherwallet.github.io/knowledge-base/',
  //base_url : 'http://localhost/',
  pages : [
//  base_url    : '',
//  cat_slug    : '',
//  cat_title   : '',
//  category    : '',
//  content     : '',
//  date_modified : '',
//  date_published : '',
//  description : '',
//  slug        : '',
//  sort        : '',
//  title       : '',
//  url         : ''
  ],
  category : [
//  base_url    : '',
//  slug        : '',
//  sort        : '',
//  title       : ''
  ],
  this_category: []
}

var Search = [
  //{
  //  id      : '',
  //  title   : '',
  //  url     : '',
  //  content : ''
  //}
]



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


// Copy
gulp.task('copy', function() {
    gulp.src( img_srcFolder + '**/*/' )
      .pipe(gulp.dest( dstFolder + 'images/' ))

    gulp.src( srcFolder + 'sitemap.xml' )
      .pipe(gulp.dest( dstFolder ))

    return gulp.src( srcFolder + 'styleguide.html' )
      .pipe(gulp.dest( dstFolder ))

    .pipe(notify(onSuccess( 'Copy' )))
})



// styles: Compile and Minify style / CSS Files
const style_srcFile  = 'kb-master.scss'
const style_destFile = 'kb-master.min.css'

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
const scripts_destFile = 'kb-master.min.js'

gulp.task( 'scripts', function() {
  return gulp.src( [scripts_srcFolder+"/languages/**/*.js",scripts_srcFolder + '**/*.js'] )
    .pipe( plumber({ errorHandler: onError }))
    .pipe(  concat(  scripts_destFile      ) )
    .pipe(  uglify(                        ) )
    .pipe( gulp.dest( dstFolder ) )
})



// Reset Arrays
gulp.task('reset_arrays', function() {
  Context.pages = []
  Context.category = []
  Context.this_category = []
})



/// Generate Categories
gulp.task('gen_cats', ['reset_arrays'], function() {
  return gulp.src( content_srcFolder + '**/*.cat' )
    .pipe( tap( function( file ) {

      var filename        = path.basename( file.path, '.cat' )
      var content         = file.contents.toString()
      var data            = JSON.parse( content )
          data.base_url   = Context.base_url

      Context.category.push( data )
    }))

    .pipe( notify ( onSuccess ( 'gen_cats' ) ) )
})



// Sort Categories
gulp.task('sort_cats', ['gen_cats'], function() {
  Context.category = _.sortBy(Context.category, 'sort')
  // console.log(Context.category)
})



// Generate Pages
gulp.task('gen_pages', ['sort_cats'], function() {
  return gulp.src(content_srcFolder + '**/*.md')
    .pipe( tap( function( file ) {

      var filename           = path.basename( file.path, '.md' )
      var content            = file.contents.toString()
      var index              = content.indexOf( '---%' )

      var data               = JSON.parse( content.slice( 0, index ) )

      var the_cat            = _.findWhere(Context.category, {title: data.category})
          data.base_url      = Context.base_url
          data.cat_slug      = the_cat.slug
          data.cat_title     = data.category
       // data.category      = data.category
          data.content       = file.contents.toString()
       // data.date_modified = data.date_modified
       // data.date_published= data.date_published
          data.slug          = filename.replace( file.path, '' )
       // data.sort          = data.sort
       // data.title         = data.title
          data.url           = file.relative.replace( '.md', '.html' )

          var index          = data.content.indexOf('---%')
          data.content       = data.content.slice( index + 4, data.content.length )
          data.excerpt       = data.content.slice( 0, 500 )
          data.excerpt       = removeMd( data.excerpt )
          data.excerpt       = data.excerpt.replace(/[\n\r]/g,' ')
          data.content       = markdown.marked( data.content )

      Context.pages.push( data )

    }))

    .pipe( notify ( onSuccess ( 'gen_pages' ) ) )

})



// Sort Pages
gulp.task('sort_pages', ['gen_pages'], function() {

  Context.pages = _.sortBy(Context.pages, 'sort')

  for ( var i=0 ; i < Context.pages.length ; i++ ) {

    Search[i]           = {}

    Context.pages[i].id = i
    Search[i].id        = i
    Search[i].title     = Context.pages[i].title
    Search[i].url       = Context.base_url + Context.pages[i].url
    Search[i].content   = Context.pages[i].excerpt

  }
})



// Register Partials
gulp.task('register_partials', ['sort_pages'], function() {
  var files = fs.readdirSync(partials_srcFolder)

  files.forEach(function (filename) {
    var matches = /^([^.]+).hbs$/.exec(filename)
    if (!matches) {
      return
    }
    var name = matches[1]
    var template = fs.readFileSync(partials_srcFolder + '/' + filename, 'utf8')
    Handlebars.registerPartial(name, template)
  })
})



// Layout: Home Page
gulp.task('layout_home', ['register_partials'], function() {
  return gulp.src( layouts_srcFolder + 'index.hbs' )
    .pipe( plumber({ errorHandler: onError }) )
    .pipe( tap(function( file, t ) {
      H.registerHelpers( Handlebars )
      Handlebars.registerHelper('titleBasedId', titleBasedId);
      var template  = Handlebars.compile( file.contents.toString() )
      var result    = template( Context )
      file.contents = new Buffer( result , 'utf-8')
    }))
    .pipe( rename(function(path) {
      path.extname = '.html'
    }))
    .pipe( gulp.dest( dstFolder ) )
    .pipe( notify ( onSuccess ( 'layout_home' ) ) )
})



// Layout: Search Page
gulp.task('layout_search', ['register_partials'], function() {
  return gulp.src( layouts_srcFolder+'search.hbs' )
    .pipe( plumber({ errorHandler: onError }) )
    .pipe( tap(function( file, t ) {
      H.registerHelpers( Handlebars )
      Handlebars.registerHelper('titleBasedId', titleBasedId);
      var template = Handlebars.compile( file.contents.toString() )
      var result   = template( Context )
      file.contents = new Buffer( result , 'utf-8')
    }))
    .pipe(rename({
      basename: "index",
      extname: ".html"
    }))
    .pipe( gulp.dest( dstFolder + 'search/' ) )
    .pipe( notify ( onSuccess ( 'layout_search' ) ) )
})


// Layout: Contact Page
gulp.task('layout_contact', ['register_partials'], function() {
  return gulp.src( layouts_srcFolder+'contact.hbs' )
    .pipe( plumber({ errorHandler: onError }) )
    .pipe( tap(function( file, t ) {
      H.registerHelpers( Handlebars )
      Handlebars.registerHelper('titleBasedId', titleBasedId);
      var template = Handlebars.compile( file.contents.toString() )
      var result   = template( Context )
      file.contents = new Buffer( result , 'utf-8')
    }))
    .pipe(rename({
      basename: "index",
      extname: ".html"
    }))
    .pipe( gulp.dest( dstFolder + 'contact/' ) )
    .pipe( notify ( onSuccess ( 'layout_contact' ) ) )
})



// Layout: form Page
gulp.task('layout_form', ['register_partials'], function() {
  return gulp.src( layouts_srcFolder+'form.hbs' )
    .pipe( plumber({ errorHandler: onError }) )
    .pipe( tap(function( file, t ) {
      H.registerHelpers( Handlebars )
      Handlebars.registerHelper('titleBasedId', titleBasedId);
      var template = Handlebars.compile( file.contents.toString() )
      var result   = template( Context )
      file.contents = new Buffer( result , 'utf-8')
    }))
    .pipe(rename({
      basename: "index",
      extname: ".html"
    }))
    .pipe( gulp.dest( dstFolder + 'form/' ) )
    .pipe( notify ( onSuccess ( 'layout_form' ) ) )
})



// Layout: Category Pages
gulp.task('layout_cats', ['register_partials'], function() {
  return gulp.src( layouts_srcFolder + 'category.hbs' )
    .pipe( plumber({ errorHandler: onError }) )
    .pipe( tap(function( file ) {
      H.registerHelpers( Handlebars )
      Handlebars.registerHelper('titleBasedId', titleBasedId);
      var template = Handlebars.compile( file.contents.toString() )
      return gulp.src( content_srcFolder + '**/*.cat' )
      .pipe( tap( function( file ) {
        var filename              = path.basename( file.path, '.cat' )
        var content               = file.contents.toString()
        var data                  = JSON.parse( content )
        Context.this_category     = data
        var result                = template( Context )
        file.contents             = new Buffer( result , 'utf-8')
      }))
      .pipe(rename({
        basename: "index",
        extname: ".html"
      }))
      .pipe( gulp.dest( dstFolder ) )
    }))
    .pipe( notify ( onSuccess ( 'layout_home' ) ) )
})

// Layout: Single Pages
gulp.task('layout_single', ['register_partials'], function() {
  return gulp.src( layouts_srcFolder + 'single.hbs' )
    .pipe( plumber( { errorHandler: onError } ) )
    .pipe( tap( function( file ) {
      H.registerHelpers( Handlebars )
      Handlebars.registerHelper('titleBasedId', titleBasedId);
      var template = Handlebars.compile( file.contents.toString() )
      return gulp.src( content_srcFolder + '**/*.md' )
        .pipe( tap( function( file ) {
          var filename  = path.basename( file.path, '.md' )
          var content = _.findWhere(  Context.pages, {slug: filename})
          var result    = template( content )
              file.contents = new Buffer( result, 'utf-8' )
        }))
        .pipe( rename(function(path) {
          path.extname = '.html'
        }))
        .pipe( gulp.dest( dstFolder ) )
    }))
    .pipe( notify ( onSuccess ( 'layout_single' ) ) )
})



// Generate Search JSON
gulp.task('gen_search_json', ['sort_pages'], function() {

  var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('content')

    Search.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  var filepath = scripts_srcFolder + '3_searchIndex.js'
  var content1 = 'var Search   = ' + JSON.stringify( idx )
  var content2 = 'var Content = ' + JSON.stringify( Search )
  var content  = content1 + '\n' + content2
  fs.writeFile( filepath, content, "utf8", function (err) {
    if (err) return console.log(err)
    console.log("3_searchIndex was written")
  })

  return gulp.src( filepath )
  .pipe(gulp.dest( dstFolder ))
  .pipe( notify ( onSuccess ( 'gen_search_json' ) ) )

})



gulp.task( 'watch_js',       function() { gulp.watch(scripts_srcFolder + '**/*.js',   ['scripts']) })


gulp.task( 'watch_styles',   function() { gulp.watch(style_srcFolder   + '**/*.scss', ['styles']) })


gulp.task( 'watch_content',  function() { gulp.watch(srcFolder + '**/*.md', ['layout_single', 'layout_home', 'layout_contact', 'layout_search', 'layout_form', 'layout_cats', 'gen_search_json']) })


gulp.task( 'watch_template', function() { gulp.watch(srcFolder + '**/*.hbs', ['layout_single', 'layout_home', 'layout_contact', 'layout_search', 'layout_form', 'layout_cats', 'gen_search_json']) })


gulp.task( 'watch',   ['watch_js', 'watch_styles', 'watch_content', 'watch_template'] )


gulp.task( 'build',   ['scripts', 'styles', 'layout_home', 'layout_contact', 'layout_search', 'layout_form', 'layout_single',  'layout_cats', 'gen_search_json', 'copy'] )


gulp.task( 'default', ['build', 'watch'] )
