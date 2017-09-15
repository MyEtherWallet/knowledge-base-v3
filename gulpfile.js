'use strict';

// packages
const fs                = require('fs');
const gulp              = require('gulp');
const autoprefixer      = require('gulp-autoprefixer');
const bump              = require('gulp-bump');
const clean             = require('gulp-clean');
const concat            = require('gulp-concat');
const cssnano           = require('gulp-cssnano');
const less              = require('gulp-less');
const notify            = require('gulp-notify');
const plumber           = require('gulp-plumber' );
const rename            = require('gulp-rename');
const runSequence       = require('run-sequence');
const shell             = require('gulp-shell');
const uglify            = require('gulp-uglify');

// custom variables
const theme_srcFolder   = 'themes/default/';
const img_srcFolder     = theme_srcFolder + 'public/images/';
const style_srcFolder   = theme_srcFolder + 'public/styles/';
const scripts_srcFolder = theme_srcFolder + 'public/scripts/';
const theme_destFolder  = theme_srcFolder + 'public/';

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
        //sound:     "Pop",
        icon: "logo/logo.png",
        onLast: true
    }
}

function notifyFunc(msg) {
    return gulp.src('.', { read: false })
        .pipe(notify(onSuccess(msg)))
}

// styles: Compile and Minify style / CSS Files
const style_srcFile     = 'kb-master.less';
const style_destFile    = 'kb-master.min.css';

gulp.task('styles', function() {
  return gulp.src( style_srcFolder + style_srcFile )
    .pipe(plumber({ errorHandler: onError }))
    .pipe(less({ compress: false }))
    .pipe(autoprefixer({ browsers: ['last 4 versions', 'iOS > 7'], remove: false }))
    .pipe(cssnano({ autoprefixer: false, safe: true }))
    .pipe(rename( style_destFile ))
    .pipe(gulp.dest( theme_destFolder ))
    //.pipe(notify(onSuccess('Styles')))
});

// Rebuild JS
const scripts_destFile  = 'kb-master.min.js';

gulp.task('scripts', function() {
    return gulp.src(scripts_srcFolder + '**/*.js')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(concat(scripts_destFile))
        .pipe(uglify())
        .pipe(gulp.dest(theme_destFolder))
        //.pipe(notify(onSuccess('JS')))
});


gulp.task('copy', function () {

  var source = [
    '*',
  ];

  var dest = theme_srcFolder + 'public/lib';

  return gulp.src(source, { base: 'node_modules' })
             .pipe(gulp.dest(dest));
});

gulp.task('watchJS',      function() { gulp.watch(theme_srcFolder + '**/*.js', ['scripts']     ) })

gulp.task('watchSTYLES',  function() { gulp.watch(theme_srcFolder + '**/*[.css,.less]',  ['styles'] ) })

gulp.task('watch', ['watchJS', 'watchSTYLES'])

gulp.task('build', ['scripts', 'styles']);

gulp.task('default', ['build', 'watch']);