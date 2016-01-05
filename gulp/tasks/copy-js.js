var gulp = require('gulp');
var plumber = require('gulp-plumber');

var ErrorHandler = require('../utils/error-handler');

var paths = require('../paths');

gulp.task('copy-js', function () {
    return gulp.src( paths.files.src.js, {} )
        .pipe( plumber({ errorHandler: ErrorHandler }) )
        .pipe( gulp.dest( paths.dir.dest ));
});
