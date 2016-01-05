var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

var ErrorHandler = require('../utils/error-handler');

var paths = require('../paths');
var autoprefixer_options = require('../options/autoprefixer');

gulp.task( 'compile-scss', function () {

    return gulp.src( paths.files.src.scss )
        .pipe( plumber({ errorHandler: ErrorHandler }) )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( autoprefixer( autoprefixer_options ) )
        .pipe( gulp.dest( paths.dir.dest ) );
});
