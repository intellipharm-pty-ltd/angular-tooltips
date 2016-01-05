var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var ErrorHandler = require('../utils/error-handler');

var paths = require('../paths');
var ugilify_options = require('../options/uglify');

gulp.task('minify-js', function () {
    return gulp.src( paths.files.dest.js, {} )
        .pipe( plumber({ errorHandler: ErrorHandler }) )
        .pipe( uglify( ugilify_options ) )
        .pipe( rename( { extname: '.min.js' } ) )
        .pipe( gulp.dest( paths.dir.dest ) );
});
