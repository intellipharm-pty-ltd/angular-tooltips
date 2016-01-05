require('require-dir')('gulp/tasks');

var gulp = require('gulp');
var runSequence = require('run-sequence');

var paths = require('./gulp/paths');

//---------------------------------
// compile
//---------------------------------

gulp.task( 'compile', [], function( callback ) {
	return runSequence(
		[ 'lint-js', 'code-style-js', 'clean' ],
		'copy-js',
		'minify-js',
		'compile-scss',
		'minify-css',
		callback
	);
});

//---------------------------------
// run
//---------------------------------

gulp.task( 'run', [	'compile' ], function ( callback ) {
	gulp.watch( paths.files.src.js, [ 'copy-js', 'minify-js' ] );
	gulp.watch( paths.files.src.scss, [ 'compile-scss', 'minify-css' ] );
});

//---------------------------------
// default
//---------------------------------

gulp.task( 'default', [ 'run' ] );
