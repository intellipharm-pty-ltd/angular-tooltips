var gulp = require('gulp');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

var ErrorHandler = require('../utils/error-handler');

var paths = require('../paths');

gulp.task('minify-css', function () {
    return gulp.src( paths.files.dest.css, {} )
        .pipe( plumber({ errorHandler: ErrorHandler }) )
        .pipe( cssmin( ) )
        .pipe( rename( { extname: '.min.css' } ) )
        .pipe( gulp.dest( paths.dir.dest ) );
});
