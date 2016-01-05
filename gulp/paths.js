var SRC = 'src/';
var DEST = 'dist/';

module.exports = {
	dir: {
		src: SRC,
		dest: DEST,
	},
	files: {
		jshintrc: '.jshintrc',
		jscsrc: '.jscsrc',
		src: {
			js: SRC + '**/*.js',
			scss: SRC + '**/*.scss',
		},
		dest: {
			js: [DEST + '**/*.js', '!' + DEST + '**/*.min.js'],
			css: DEST + '**/*.css',
		}
	}
};
